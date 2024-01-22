"use client";

import { convertToPersianNumbers } from "@/app/utils";
import { format } from "date-fns-jalali";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  text: string;
}
const Question = ({ text }: Props) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(
      convertToPersianNumbers(format(new Date(), " d MMMM yyyy ساعت HH:mm"))
    );
  }, []);
  return (
    <div>
      <div className="flex gap-x-2 items-center text-sm">
        <Image height={40} width={40} alt="avatar image" src={"/avatar.jpg"} />
        <span>منوا اسکندریان</span>
        <span className="text-qu-gray-500">{time}</span>
      </div>
      <span className="mt-2 text-qu-gray-800 text-xs">{text}</span>
    </div>
  );
};

export default Question;
