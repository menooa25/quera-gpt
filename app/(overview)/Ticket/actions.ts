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
      model: "gpt-3.5-turbo-0301",
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
  });
  let concatedQA = "";
  let lastQuestionId = -1;
  for (let q of questions) {
    concatedQA += `question: ${q.ask} \n `;
    if (q.Answer) {
      concatedQA += `answer: ${q.Answer.text} \n `;
    }
    lastQuestionId = q.id;
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
    console.log(answer);
    const aiGeneratedAnswer =
      answer.choices[0].message.content?.toString() ?? "";
    await prisma.answer.create({
      data: { text: aiGeneratedAnswer, gptQuestionId: lastQuestionId },
    });
  } catch {
    return "";
  }
};
