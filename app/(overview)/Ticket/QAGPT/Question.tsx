import { direction } from "direction";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  text: string;
  dateTime: string;
  isUser?: boolean;
}
const Question = ({ text, dateTime, isUser = false }: Props) => {
  return (
    <div className={`${!isUser && "p-3 bg-qu-gray-50 rounded-md"}`}>
      <div className="flex gap-x-2 items-center text-sm">
        {isUser ? (
          <Image
            height={40}
            width={40}
            alt="avatar image"
            src={"/avatar.jpg"}
          />
        ) : (
          <Image
            height={40}
            width={40}
            alt="avatar image"
            src={"/GptAvatar.svg"}
          />
        )}

        {isUser ? <span>منوا اسکندریان</span> : <span>کیوجی‌پی‌تی</span>}
        <span className="text-qu-gray-500">{dateTime}</span>
      </div>
      {isUser && (
        <span dir={direction(text)} className="mt-2 text-qu-gray-800 text-xs">
          {text}
        </span>
      )}
      {isUser || (
        <div
          dir={direction(text)}
          className="m-0 p-0 mt-2 text-qu-gray-800 text-xs   overflow-hidden"
        >
          <Markdown>{text.replaceAll("answer:", "").trim()}</Markdown>
        </div>
      )}
    </div>
  );
};

export default Question;
