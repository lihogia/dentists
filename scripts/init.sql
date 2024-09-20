-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "middle_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "birth_year" INTEGER NOT NULL,
    "gender" VARCHAR NOT NULL,
    "phone" VARCHAR,
    "address" VARCHAR,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "MedicalRecord" (
    "pid" SERIAL NOT NULL,
    "height" NUMERIC(3, 1) NOT NULL,
    "weight" NUMERIC(3, 1) NOT NULL,
    "blood_pressure_sys" INTEGER NOT NULL,
    "blood_pressure_dia" INTEGER NOT NULL,
    "pulse" INTEGER NOT NULL,
    "hospitalized" BOOLEAN NOT NULL DEFAULT false,
    "hospitalized_declare" TEXT,
    "suffered" JSON NOT NULL,

    CONSTRAINT "MedicalRecord_pkey" PRIMARY KEY ("pid")
);
-- CreateTable
CREATE TABLE "DentalRecord" (
    "pid" SERIAL NOT NULL,
    "tooth_diagram" TEXT[][] NOT NULL,
    "description" TEXT,

    CONSTRAINT "DentalRecord_pkey" PRIMARY KEY ("pid")
);
-- CreateTable
CREATE TABLE "TreatmentRecord" (
    "pid" INTEGER NOT NULL,
    "exam_date" DATE NOT NULL,
    "diagnose" TEXT,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "treatment" TEXT,

    CONSTRAINT "TreatmentRecord_pkey" PRIMARY KEY ("pid", "exam_date")

);

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MR_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "DentalRecord" ADD CONSTRAINT "DR_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "TreatmentRecord" ADD CONSTRAINT "TR_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;