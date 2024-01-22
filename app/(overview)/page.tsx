import { Suspense } from "react";
import Ticket from "./Ticket/Ticket";
import MyQuestions from "./MyQuestions/MyQuestions";

export default function Home() {
  return (
    <main className="flex gap-x-5 p-5" dir="rtl">
      <MyQuestions />

      <Suspense>
        <Ticket />
      </Suspense>
    </main>
  );
}
