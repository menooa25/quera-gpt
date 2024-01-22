"use client";

import ErrorMsg from "@/app/components/ErrorMsg";
import QuestionTitle from "../QuestionTitle";
import QuestionType from "../QuestionType";
import { validateQuestionType } from "../QATeacher/functions";
import { useForm } from "react-hook-form";
import QuestionInput from "./QuestionInput";
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
    <div className="min-h-[475px] flex gap-y-3 flex-col">
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
      <Question text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. " />
      <div className="mt-auto w-full">
        <QuestionInput />
      </div>
    </div>
  );
};

export default QAGPT;
