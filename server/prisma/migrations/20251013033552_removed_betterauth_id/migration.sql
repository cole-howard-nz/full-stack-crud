/*
  Warnings:

  - You are about to drop the column `betterId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."User_betterId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "betterId";
