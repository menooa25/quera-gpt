"use client";

import { useEffect, useState } from "react";
import AttachFile from "./AttackFile";
import Question from "./Question";
import ImageFile from "./ImageFile";
import { useForm, SubmitHandler } from "react-hook-form";
import { validateFileIsUnderXmb, validateQuestionType } from "./functions";
import QuestionType from "../QuestionType";
import QuestionTitle from "../QuestionTitle";
import ErrorMsg from "@/app/components/ErrorMsg";
import Loading from "@/app/components/Loading";

export type Inputs = {
  questionType: string;
  title: string;
  attackFile: File[];
  question: string;
  image: File[];
};

const QATeacherForm = () => {
  const {
    register,
    clearErrors,
    setValue,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const image = watch("image");
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const cleanedData = { ...data, attackFile: data.attackFile[0] };
    setLoading(true);

    console.log("submit", cleanedData);
    setTimeout(() => setLoading(false), 500);
  };
  useEffect(() => {
    if (image) {
      const fileError = validateFileIsUnderXmb(image);
      if (!(fileError === true)) setError("image", { message: fileError });
      else clearErrors("image");
    }
  }, [image]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <div>
        <div className="flex gap-x-3">
          <div className="flex-1">
            <QuestionTitle register={{ ...register("title") }} />
          </div>
          <div className="flex-1">
            <QuestionType
              register={{
                ...register("questionType", { validate: validateQuestionType }),
              }}
            />
            <ErrorMsg text={errors.questionType?.message} />
          </div>
        </div>
        <div className="mt-3">
          <AttachFile
            register={{
              ...register("attackFile", {
                validate: {
                  fileSize: validateFileIsUnderXmb,
                },
              }),
            }}
          />
          <ErrorMsg text={errors.attackFile?.message} />
        </div>
      </div>
      <div>
        <Question register={{ ...register("question", { required: true }) }} />
        <ErrorMsg
          text={
            errors.question?.type === "required" &&
            "لطفا متن سوال را وارد نمایید"
          }
        />
      </div>
      <div>
        <ImageFile formSetValue={setValue} />
        <ErrorMsg text={errors.image?.message} />
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`btn flex justify-center items-center ${
          loading && "cursor-not-allowed"
        }`}
      >
        {loading ? <Loading /> : "ارسال"}
      </button>
    </form>
  );
};

export default QATeacherForm;
