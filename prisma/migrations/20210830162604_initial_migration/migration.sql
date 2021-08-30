-- CreateTable
CREATE TABLE "enterprise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enterpriseId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "enterprise.name_unique" ON "enterprise"("name");

-- AddForeignKey
ALTER TABLE "contact" ADD FOREIGN KEY ("enterpriseId") REFERENCES "enterprise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
