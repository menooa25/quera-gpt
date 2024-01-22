"use client";

import ErrorMsg from "@/app/components/ErrorMsg";
import QuestionTitle from "../QuestionTitle";
import QuestionType from "../QuestionType";
import { validateQuestionType } from "../QATeacher/functions";
import { SubmitHandler, useForm } from "react-hook-form";
import QuestionInput from "./QuestionInput";
import Question from "./Question";
import { addQuestionToGpt } from "../actions";
import QuestionAnswerContainer from "./QuestionAnswerContainer";

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
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { question } = data;
    if (question) await addQuestionToGpt(question);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-[475px] flex  flex-col"
    >
      <div className="flex gap-x-3 ">
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
      <div className="mb-2 max-h-[50vh] overflow-auto mt-3">
        <QuestionAnswerContainer />
      </div>
      <div className="mt-auto  w-full">
        <QuestionInput
          register={{
            ...register("question", { required: true }),
          }}
        />
        {errors.question && (
          <div className="-mb-5 mt-2">
            <ErrorMsg
              text={errors.question && "لطفا اول سوال خود را بنویسید"}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default QAGPT;
