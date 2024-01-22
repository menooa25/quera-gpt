"use client";
import useNoScroll from "@/app/hooks/useNoScroll";
import { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
interface Props {
  register: any;
}
const QuestionInput = ({ register }: Props) => {
  const textareaRef: any = useRef();
  const { onScroll } = useNoScroll(textareaRef);
  return (
    <div className="input w-full flex items-start -mb-2 min-h-16 !p-2 ">
      <textarea
        {...register}
        onScroll={onScroll}
        className="w-full !min-h-full  focus-visible:outline-none"
        placeholder="سوال خودتون رو اینجا بنویسید"
      />
      <button type="submit" className="p-3 bg-qu-gray-100 rounded-md">
        <FiArrowLeft className="text-qu-gray-500" size={24} />
      </button>
    </div>
  );
};

export default QuestionInput;
