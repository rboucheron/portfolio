-- CreateTable
CREATE TABLE "Technologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTechnologies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechnologies_AB_unique" ON "_ProjectToTechnologies"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechnologies_B_index" ON "_ProjectToTechnologies"("B");

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnologies" ADD CONSTRAINT "_ProjectToTechnologies_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnologies" ADD CONSTRAINT "_ProjectToTechnologies_B_fkey" FOREIGN KEY ("B") REFERENCES "Technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
