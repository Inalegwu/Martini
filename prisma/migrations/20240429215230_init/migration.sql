-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_id_key" ON "Todo"("id");
