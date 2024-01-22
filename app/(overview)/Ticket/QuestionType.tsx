"use client";

import classNames from "classnames";
import { useState } from "react";

interface Props {
  register: any;
}
const questions = [
  { value: 0, text: "مسئله" },
  { value: 1, text: "اصلاح کد" },
  { value: 2, text: "حلقه چیست؟" },
  { value: 3, text: "سوال آزاد" },
];

const QuestionType = ({ register }: Props) => {
  const [changed, setChanged] = useState(false);
  const selectClassName = classNames({
    "focus-visible:outline-none w-full": true,
    "text-black text-opacity-100": changed,
  });
  return (
    <div className="input w-full  text-black text-opacity-35">
      <select
        required
        {...register}
        defaultValue={0}
        className={selectClassName}
        onClick={(v: any) => v?.target?.value !== "0" && setChanged(true)}
      >
        {questions.map(({ text, value }) => (
          <option
            className="text-black text-opacity-100"
            disabled={value === 0}
            value={value}
            key={value}
          >
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuestionType;
