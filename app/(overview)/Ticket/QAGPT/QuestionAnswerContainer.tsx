"use client";
import { convertToPersianNumbers, formatDate } from "@/app/utils";
import { format } from "date-fns-jalali";
import { useEffect, useState } from "react";
import { getGptQuestionAnswers } from "../actions";
import Question from "./Question";
import { Answer, GptQuestion } from "@prisma/client";
const QuestionAnswerContainer = () => {
  const [gptQuestion, setGptQuestion] = useState<
    (GptQuestion & { Answer: Answer | null })[]
  >([]);
  const sendRequest = async () => {
    const gptQuestionData = await getGptQuestionAnswers();
    console.log(gptQuestionData);
    setGptQuestion(gptQuestionData);
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <div className="flex flex-col gap-y-3">
      {gptQuestion.map(({ id, create_at, ask, Answer }) => (
        <div key={id}>
          <Question
            isUser
            dateTime={convertToPersianNumbers(
              format(new Date(create_at), " d MMMM yyyy ساعت HH:mm")
            )}
            text={ask}
          />
          {Answer && (
            <div className="mt-3">
              <Question
                dateTime={formatDate(new Date(Answer.create_at))}
                text={Answer.text}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswerContainer;
