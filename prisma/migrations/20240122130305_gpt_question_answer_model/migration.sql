-- CreateTable
CREATE TABLE "GptQuestion" (
    "id" SERIAL NOT NULL,
    "ask" TEXT NOT NULL,
    "answer" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GptQuestion_pkey" PRIMARY KEY ("id")
);
