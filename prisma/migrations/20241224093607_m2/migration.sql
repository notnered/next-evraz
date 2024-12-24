/*
  Warnings:

  - You are about to drop the column `shortText` on the `news` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "catalog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_news" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_news" ("createdAt", "id", "text", "title", "updatedAt") SELECT "createdAt", "id", "text", "title", "updatedAt" FROM "news";
DROP TABLE "news";
ALTER TABLE "new_news" RENAME TO "news";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
