"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Cart from "../../components/Cart";
import QAGPT from "./QAGPT/QAGPT";
import QATeacherForm from "./QATeacher/QATeacherForm";
import TabBtn from "./TabBtn";
import TitleContextProvider from "./TitleContextProvider";

const Ticket = () => {
  const tabName = useSearchParams().get("tab");
  const router = useRouter();
  const QATeacherLable = "سوال از مربی‌های دوره";
  const QAGptLable = "سوال از ربات QGPT";
  useEffect(() => {
    router.replace(`/?tab=${QATeacherLable}`);
  }, []);
  return (
    <div className="p-6">
      <TitleContextProvider>
        <Cart title="درخواست پشتیبانی">
          <p className="my-3 p-3 text-sm leading-[23.8px] font-normal">
            بررسی کدی که نوشتید و رفع خطا توسط خودتون یکی از مفیدترین کارها برای
            پیشرفت مهارت برنامه‌نویسیه! اگر به اندازه کافی تلاش کردید و وقت خوبی
            برای رفع خطا گذاشتید و به نتیجه نرسیدید، ما اینجاییم که در فرایند
            دیباگ کردن بهتون کمک کنیم.
          </p>
          <div className="rounded-lg overflow-hidden text-lg font-bold text-qu-gray-600 flex items-center shadow-md">
            <Suspense>
              <TabBtn title={QAGptLable} />
              <TabBtn title={QATeacherLable} />
            </Suspense>
          </div>
          <div className="my-5 mx-3">
            {tabName === QATeacherLable && <QATeacherForm />}
            {tabName === QAGptLable && <QAGPT />}
          </div>
        </Cart>
      </TitleContextProvider>
    </div>
  );
};

export default Ticket;
