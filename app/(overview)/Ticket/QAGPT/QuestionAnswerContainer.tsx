"use client";
import { convertToPersianNumbers, formatDate, scrollToRef } from "@/app/utils";
import { format } from "date-fns-jalali";
import { useContext, useEffect, useRef } from "react";
import { QAContext } from "./QAContextProvider";
import Question from "./Question";
interface Props {
  loading?: boolean;
}
const QuestionAnswerContainer = ({ loading }: Props) => {
  const { data, updateQuestions } = useContext(QAContext);
  const buttomDiv: any = useRef();

  useEffect(() => {
    updateQuestions();
  }, []);
  useEffect(() => {
    scrollToRef(buttomDiv);
  }, [data]);
  return (
    <div className="flex flex-col gap-y-3">
      {data.map(({ id, create_at, ask, Answer }) => (
        <div key={id}>
          <Question
            isUser
            dateTime={convertToPersianNumbers(
              format(new Date(create_at), " d MMMM yyyy ساعت HH:mm")
            )}
            text={ask}
          />
          {Answer ? (
            <div className="mt-3">
              <Question
                dateTime={formatDate(new Date(Answer.create_at))}
                text={Answer.text}
              />
            </div>
          ) : (
            loading && (
              <div className="mt-3">
                <Question
                  dateTime={formatDate(new Date())}
                  text={"در حال نوشتن ..."}
                />
              </div>
            )
          )}
        </div>
      ))}
      <div ref={buttomDiv} />
    </div>
  );
};

export default QuestionAnswerContainer;
