/*
  Warnings:

  - Added the required column `desc` to the `catalog_category` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_catalog_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_catalog_category" ("createdAt", "id", "title", "updatedAt") SELECT "createdAt", "id", "title", "updatedAt" FROM "catalog_category";
DROP TABLE "catalog_category";
ALTER TABLE "new_catalog_category" RENAME TO "catalog_category";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
