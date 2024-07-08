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
/*
export type DentalDiagram = {
    teeth_up_left: [string, string, string, string, string, string, string, string]; // status of 8 teeth
    teeth_bottom_left: [string, string, string, string, string, string, string, string]; // status of 8 teeth
    teeth_up_right: [string, string, string, string, string, string, string, string]; // status of 8 teeth
    teeth_bottom_right: [string, string, string, string, string, string, string, string]; // status of 8 teeth
}

export type ToothStatus_GOOD = "good";
export type ToothStatus_MISSING = 'tooth_missing';
export type ToothStatus_ROOT_PROBLEM = 'root_problem';
export type ToothStatus_INSIDE_CAVITIES = 'occlusal_incisal_cavities';
export type ToothStatus_OUTSIDE_CAVITIES = 'outside_cavities';

export type ToothStatus = {
    status: ToothStatus_GOOD | ToothStatus_MISSING | ToothStatus_ROOT_PROBLEM | ToothStatus_INSIDE_CAVITIES | ToothStatus_OUTSIDE_CAVITIES;
}

export type DentalRecords = {
    pid: string; // patient id
    teeth_diagram: DentalDiagram;
    treatments: Treatment[];
}*/

export type Treatment = {
    pid: string;
    date: Date;
    diagnoses: string;
    cures: string;
}