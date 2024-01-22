"use client";

import ErrorMsg from "@/app/components/ErrorMsg";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { validateQuestionType } from "../QATeacher/functions";
import QuestionTitle from "../QuestionTitle";
import QuestionType from "../QuestionType";
import { addQuestionToGpt, generateAnswer, generateTitle } from "../actions";
import { QAContext } from "./QAContextProvider";
import QuestionAnswerContainer from "./QuestionAnswerContainer";
import QuestionInput from "./QuestionInput";
import { TitleContext } from "../TitleContextProvider";

export type Inputs = {
  questionType: string;
  title: string;
  question: string;
};
const QAGPTForm = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { updateQuestions } = useContext(QAContext);
  const { setTitle, title } = useContext(TitleContext);
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { question } = data;
    if (question) {
      setLoading(true);
      if (!title) setTitle((await generateTitle(question)) ?? "");
      await addQuestionToGpt(question);
      updateQuestions();
      await generateAnswer();
      updateQuestions();
      setLoading(false);

      setValue("question", "");
    }
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
      <div className="mb-2 max-h-[50vh]  overflow-auto mt-3">
        <QuestionAnswerContainer loading={loading} />
      </div>
      <div className="mt-auto  w-full">
        {loading || (
          <QuestionInput
            register={{
              ...register("question", { required: true }),
            }}
          />
        )}
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

export default QAGPTForm;
