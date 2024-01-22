"use server";

import prisma from "@/prisma/client";
import OpenAI from "openai";

const createOpenAi = () => {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
  });
  return openai;
};
export const generateTitle = async (question: string) => {
  try {
    const openAi = createOpenAi();
    const answer = await openAi.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `generate title for following question (only 30 character): ${question}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const title = answer.choices[0].message.content?.toString();
    return title;
  } catch {
    return "";
  }
};

export const addQuestionToGpt = async (question: string) => {
  await prisma.gptQuestion.create({ data: { ask: question } });
};
export const getGptQuestionAnswers = async () => {
  return await prisma.gptQuestion.findMany({ include: { Answer: true } });
};

export const generateAnswer = async () => {
  const questions = await prisma.gptQuestion.findMany({
    include: { Answer: true },
    orderBy: { create_at: "desc" },
    take: 4,
  });
  let concatedQA = "";
  let lastQuestion = await prisma.gptQuestion.findFirst({
    orderBy: { id: "desc" },
    select: { id: true },
  });
  if (!lastQuestion) return "";
  for (let q of questions) {
    concatedQA += `${q.ask} \n `;
    if (q.Answer) {
      concatedQA += `${q.Answer.text} \n `;
    }
  }

  try {
    const openAi = createOpenAi();
    const answer = await openAi.chat.completions.create({
      messages: [
        {
          role: "user",
          content: concatedQA,
        },
      ],
      model: "gpt-3.5-turbo-0301",
    });
    const aiGeneratedAnswer =
      answer.choices[0].message.content?.toString() ?? "";
    await prisma.answer.create({
      data: { text: aiGeneratedAnswer, gptQuestionId: lastQuestion.id },
    });
  } catch {
    return "";
  }
};
