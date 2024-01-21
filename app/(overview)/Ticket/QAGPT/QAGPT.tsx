"use client";

import ErrorMsg from "@/app/components/ErrorMsg";
import QuestionTitle from "../QuestionTitle";
import QuestionType from "../QuestionType";
import { validateQuestionType } from "../QATeacher/functions";
import { useForm } from "react-hook-form";
import Question from "./Question";

export type Inputs = {
  questionType: string;
  title: string;
  question: string;
};
const QAGPT = () => {
  const {
    register,
    clearErrors,
    setValue,
    handleSubmit,
    watch,
    setError,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div>
      <div className="flex gap-x-3 min-h-[475px]">
        <div className="flex-1">
          <QuestionTitle register={{ ...register("title") }} />
        </div>
        <div className="flex-1">
          <QuestionType
            register={{
              ...register("questionType", {
                validate: validateQuestionType,
              }),
            }}
          />
          <ErrorMsg text={errors.questionType?.message} />
        </div>
      </div>
      <div className="mt-auto ">
        <Question />
      </div>
    </div>
  );
};

export default QAGPT;
