"use client";

import { useState } from "react";
import FileInput from "./FileInput";
import Question from "./Question";
import ImageFile from "./ImageFile";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  questionType: string;
  title: string;
  attackFile: File;
  question: string;
  image: File;
};
const questions = ["اصلاح کد", "حلقه چیست؟"];

const QATeacher = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [questionType, setQuestionType] = useState(questions[0]);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <div>
        <div className="flex gap-x-3">
          <input
            type="text"
            className="input flex-1"
            placeholder="عنوان سوال"
            {...register("title")}
          />
          <div className="input  flex-1 text-black text-opacity-35">
            <select
              {...register("questionType")}
              onChange={({ target: { value } }) => setQuestionType(value)}
              value={questionType}
              className="focus-visible:outline-none w-full"
            >
              {questions.map((v) => (
                <option
                  className="text-black text-opacity-100"
                  value={v}
                  key={v}
                >
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3">
          <FileInput register={{ ...register("attackFile") }} />
        </div>
      </div>
      <Question register={{ ...register("question") }} />
      <ImageFile formSetValue={setValue} />
      <button type="submit" className="btn">
        ارسال
      </button>
    </form>
  );
};

export default QATeacher;
