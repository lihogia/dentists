import { PrismaClient } from '@prisma/client';
import { users, patients } from '@/src/app/lib/data/placeholderData';
import { separateFullName } from '@/src/app/lib/utils';
import { CreatePatient } from '@/src/app/ui/patients/buttons';

const prisma = new PrismaClient();
const ENV = process.env.NODE_ENV;

async function insertPatients() {

    const insertPatients = patients.map((patient) => {
        const nNames = separateFullName(patient.name.toLowerCase());
        return {
            first_name: nNames[0],
            middle_name: nNames[1],
            last_name: nNames[2],
            birth_year: patient.birth_year,
            gender: patient.gender.toLowerCase(),
            phone: patient.phone,
            address: patient.address.toLowerCase()
        }
    })

    const resultWithIdOnly = await prisma.patient.createManyAndReturn({
        data: insertPatients,
        select: {
            id: true
        }
    });
    console.log(`Inserted ${insertPatients.length} patient`);
    console.log(resultWithIdOnly);
           
}

async function requestPatientsInfo() {

    const allPatients = await prisma.patient.findMany({
        include: {
          MedicalRecord: true,
          DentalRecord: true,
          TreatmentRecord: true
        },
      })
      console.dir(allPatients, { depth: null })

}

async function insertMedicalRecords() {

    const insertMRs = patients.map((patient) => {
        const mI = patient.medicalInfo;
        return {
            pid: patient.id,
            height: mI.height,
            weight: mI.weight,
            blood_pressure_sys: mI.blood_pressure_sys,
            blood_pressure_dia: mI.blood_pressure_dia,
            pulse: mI.pulse,
            hospitalized: mI.hospitalized,
            hospitalized_declare: mI.hospitalized_declare,
            suffered: JSON.stringify(mI.suffered)
        }
    });

    const resultWithIdOnly = await prisma.medicalRecord.createManyAndReturn({
        data: insertMRs,
        select: {
            pid: true
        }
    });
    console.log(`Inserted ${insertMRs.length} medical records`);
    console.log(resultWithIdOnly);
}

async function insertDentalRecords() {

    const insertDRs = patients.map((patient) => {
        const dI = patient.dentalRecords;
        return {
            pid: patient.id,
            tooth_diagram: dI.tooth_diagram,
            description: dI.description,
            
        }
    })
    const resultWithIdOnly = await prisma.dentalRecord.createManyAndReturn({
        data: insertDRs,
        select: {
            pid: true
        }
    });

    console.log(`Inserted ${insertDRs.length} Dental records`);
    console.log(resultWithIdOnly);
            
}

async function insertTreatmentRecords() {

    const insertTRs:any = [];

    for (let patient of patients) {
        const records = patient.treatmentRecords;
        for (let record of records) {
            const treatmentR = {
                pid: patient.id,
                exam_date: new Date(record.exam_date),
                diagnose: record.diagnose,
                amount: record.amount,
                paid: record.paid,
                treatment: record.treatment
            }
            insertTRs.push(treatmentR);
        }
    }

    const resultWithIdOnly = await prisma.treatmentRecord.createManyAndReturn({
        data: insertTRs,
        select: {
            pid: true
        }
    });

    console.log(`Inserted ${insertTRs.length} treatment records`);
    console.log(resultWithIdOnly);
            
}

async function main() {
    console.log(`env: ${ENV}`);

    //await insertPatients();
    //await insertMedicalRecords();
    await insertDentalRecords();
    //await insertTreatmentRecords();
    await requestPatientsInfo();


/*        await deleteMedicalRecordsTable();
        await deleteDentalRecordsTable();
        await deleteTreatmentRecordsTable();

        await deletePatientsTable();
        await createPatientsTable();
        await insertPatientsData();
        await requestPatientsInfo();  

        
        await createMedicalRecordsTable();
        await insertMedicalRecordsData();
        await requestMedicalRecordsInfo();

        await createDentalRecordsTable();
        await insertDentalRecordsData();
        await requestDentalRecordsInfo();

        await createTreatmentRecordsTable();
        await insertTreatmentRecordsData();
        await requestTreatmentRecordsInfo();
*/
}
  

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        e,
    );
    await prisma.$disconnect();
    process.exit(1);
  })
