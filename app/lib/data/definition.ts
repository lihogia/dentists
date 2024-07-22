export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type PatientsTable = {
    id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    birth_year: number;
    gender: 'male' | 'female';
    phone: string;
    //latest_date: string;
};

export type PatientForm = {
    id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    birth_year: number;
    gender: 'male' | 'female';
    address: string;
    phone: string;

};

export type MedicalRecordsForm = {
    pid: string; // patient id
    fullname: string;
    height: number; // m
    weight: number; // kg
    blood_pressure_sys: number; // mmHg
    blood_pressure_dia: number; // mmHg
    pulse: number; // pul/min
    hospitalized: boolean; // be hospitalized in 5 years, true: yes, false: no
    hospitalized_declare: string;
    //suffered: string; // from Diseases: false; false; false; ...; true; abc xyz | make it as a JSON string
    suffered: Diseases;
}

export type Diseases = {
    high_blood: boolean; // 1
    ischemic_heart: boolean; // 2
    diabetes: boolean; // 3
    bleeding_disorders: boolean; // 4
    allergies: boolean; // both medication, food . 5
    asthma: boolean; // 6
    epileptic: boolean; // 7
    hepatitisB: boolean; // 8
    pregnancy: boolean; // 9
    other_diseases: boolean; // 10
    other_declare: string; // 11
}

export type DentalRecordsForm = {
    pid: string; // patient id
    fullname: string;
    tooth_diagram: 
        [[string, string, string, string, string, string, string, string], // up right 8 teeth
        [string, string, string, string, string, string, string, string], // up left 8 teeth
        [string, string, string, string, string, string, string, string], // bottom right 8 teeth
        [string, string, string, string, string, string, string, string]]; // bottom left 8 teeth
    description: string;
    isCreated: boolean;
}


export type TeethStatus = [
    [string, string, string, string, string, string, string, string],
    [string, string, string, string, string, string, string, string],
    [string, string, string, string, string, string, string, string],
    [string, string, string, string, string, string, string, string]
]

export type TreatmentRecordsForm = {
    pid: string;
    fullname: string;
    exam_date: string;
    diagnoses: string;
    treatments: Task[];
    amount: number;
    paid: boolean;
    isCreated: boolean;
}

export type Task = {
    cure: string,
    cure_date: string,
    status: boolean // true: Done, false: Pending
}

export type TreatmentRecordsBoard = {
    records: TreatmentRecordsForm[],
    selectedIndex: number,
    creatingNew: boolean,
    state: StatusBoard
}

export type StatusBoard = {
    status: number, // 0: begin, 1: success, 2: fail
    message: string // error message or successful message
}