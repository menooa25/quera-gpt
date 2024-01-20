"use client";

import { useState } from "react";
import FileInput from "./FileInput";

const questions = ["اصلاح کد", "حلقه چیست؟"];

const QATeacher = () => {
  const [questionType, setQuestionType] = useState(questions[0]);
  return (
    <div>
      <div className="flex gap-x-3">
        <input type="text" className="input flex-1" placeholder="عنوان سوال" />
        <div className="input  flex-1 text-black text-opacity-35">
          <select
            onChange={({ target: { value } }) => setQuestionType(value)}
            value={questionType}
            className="focus-visible:outline-none w-full"
          >
            {questions.map((v) => (
              <option className="text-black text-opacity-100" value={v} key={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-3">
        <FileInput />
      </div>
    </div>
  );
};

export default QATeacher;
