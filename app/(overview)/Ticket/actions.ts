"use server";

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
