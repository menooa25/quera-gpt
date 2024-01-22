import { convertToPersianNumbers } from "@/app/utils";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

interface Props {
  title: string;
  tags: string[];
  done: boolean;
  answerCount: number;
}
const AskedQuestion = ({ answerCount, done, tags, title }: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex justify-between">
        <div className="flex text-sm text-qu-gray-900">
          {done && (
            <IoMdCheckmarkCircle size={20} className="text-green-700 ml-1" />
          )}
          {done || (
            <div className="h-4 w-4 rounded-full ml-1 border-2 border-qu-gray-400" />
          )}
          <span>{title}</span>
        </div>
        <div className="flex">
          <span className="text-xs text-qu-gray-600 ml-1">
            {convertToPersianNumbers(answerCount.toString())}
          </span>
          <MdOutlineChatBubbleOutline size={16} />
        </div>
      </div>
      <div className="flex gap-x-[5px]">
        {tags.map((tag) => (
          <span
            className="px-2  py-[2px] rounded-md text-primary-800 text-xs bg-primary-50"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AskedQuestion;
