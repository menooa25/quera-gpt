/*
  Warnings:

  - You are about to drop the column `answer` on the `GptQuestion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GptQuestion" DROP COLUMN "answer";

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gptQuestionId" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Answer_gptQuestionId_key" ON "Answer"("gptQuestionId");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_gptQuestionId_fkey" FOREIGN KEY ("gptQuestionId") REFERENCES "GptQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
