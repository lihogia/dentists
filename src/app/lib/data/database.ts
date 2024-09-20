import { convertDateToYYYYMMDD } from "@/src/app/lib/utils";
import { PrismaClient } from "@prisma/client";

declare global {
    var prisma;//: PrismaClient;
}

const prismaExt = new PrismaClient().$extends({
    result: {
      patient: {
        fullname: {
          needs: { first_name: true, middle_name: true, last_name: true },
          compute(patient) {
            return `${patient.first_name} ${patient.middle_name} ${patient.last_name}`
          },
        },
      },
      treatmentRecord: {
        examdate: {
          needs: { exam_date: true },
          compute(treatmentRecord) {
            return convertDateToYYYYMMDD(new Date(treatmentRecord.exam_date)) // to return YYYY-MM-DD
          }
        },
        isCreated: {
          compute(treatmentRecord) {
            return false;
          }
        }/*,
        exammonth: {
          needs: { exam_date: true },
          compute(treatmentRecord) {
            return (new Date(treatmentRecord.exam_date)).getMonth() + 1
          }
        },
        examyear: {
          needs: { exam_date: true },
          compute(treatmentRecord) {
            return (new Date(treatmentRecord.exam_date)).getFullYear()
          }
        }*/
      }
    },
  });

export const db = globalThis.prisma || prismaExt;

if (process.env.NODE_ENV != "production") globalThis.prisma = db;