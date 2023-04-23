/*
  Warnings:

  - The primary key for the `ExchangeRate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `currency` on the `ExchangeRate` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `ExchangeRate` table. All the data in the column will be lost.
  - You are about to drop the column `rate` on the `ExchangeRate` table. All the data in the column will be lost.
  - Added the required column `name` to the `ExchangeRate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ExchangeRate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symbol` to the `ExchangeRate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExchangeRate" DROP CONSTRAINT "ExchangeRate_pkey",
DROP COLUMN "currency",
DROP COLUMN "date",
DROP COLUMN "rate",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "symbol" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExchangeRate_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExchangeRate_id_seq";
