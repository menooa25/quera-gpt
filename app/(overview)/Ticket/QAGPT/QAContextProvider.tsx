"use client";

import { Answer, GptQuestion } from "@prisma/client";
import { PropsWithChildren, createContext, useState } from "react";
import { getGptQuestionAnswers } from "../actions";

type DataType = (GptQuestion & { Answer: Answer | null })[];

export const QAContext = createContext<{
  updateQuestions: () => void;
  data: DataType;
}>({ updateQuestions: () => {}, data: [] });
const QAContextProvider = ({ children }: PropsWithChildren) => {
  const [gptQuestion, setGptQuestion] = useState<DataType>([]);
  const updateQuestions = async () => {
    const gptQuestionData = await getGptQuestionAnswers();
    setGptQuestion(gptQuestionData);
  };
  return (
    <QAContext.Provider value={{ data: gptQuestion, updateQuestions }}>
      {children}
    </QAContext.Provider>
  );
};

export default QAContextProvider;
