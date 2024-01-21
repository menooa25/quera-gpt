"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { TitleContext } from "./TitleContextProvider";

interface Props {
  title: string;
}
const TabBtn = ({ title }: Props) => {
  const tabBane = useSearchParams().get("tab");
  const { setTitle } = useContext(TitleContext);

  const active = tabBane === title;
  return (
    <Link
      href={`/?tab=${title}`}
      onClick={() => !active && setTitle("")}
      className={`flex-1 text-center cursor-pointer py-2 px-4 ${
        active && "text-primary-600  border-b-2 border-primary-500"
      }`}
    >
      {title}
    </Link>
  );
};

export default TabBtn;
