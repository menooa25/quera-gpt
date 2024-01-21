"use client";
import useNoScroll from "@/app/hooks/useNoScroll";
import { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";

const Question = () => {
  const textareaRef: any = useRef();
  const { onScroll } = useNoScroll(textareaRef);
  return (
    <div className="input w-full flex items-start -mb-2 min-h-16 !p-2 ">
      <textarea
        onScroll={onScroll}
        className="w-full min-h-3 focus-visible:outline-none"
        placeholder="سوال خودتون رو اینجا بنویسید"
      />
      <div className="p-3 bg-qu-gray-100 rounded-md">
        <FiArrowLeft className="text-qu-gray-500" size={24} />
      </div>
    </div>
  );
};

export default Question;
