"use client";

import { useContext } from "react";
import { TitleContext } from "./TitleContextProvider";

interface Props {
  register: any;
}
const QuestionTitle = ({ register }: Props) => {
  const { setTitle, title } = useContext(TitleContext);
  return (
    <input
      type="text"
      className="input w-full"
      placeholder="عنوان سوال"
      {...register}
      onChange={({ target: { value } }) => setTitle(value)}
      value={title}
    />
  );
};

export default QuestionTitle;
