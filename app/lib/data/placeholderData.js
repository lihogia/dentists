const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User123',
      email: 'user@lilola.com',
      password: '123456',
    },
];

const patients = [
    {
        id: 'b0bc25ef-5d0b-4a49-ab35-625377525d6f',
        name: 'Bô Huệ Phương',
        birth_year: 1956,
        gender: 'female',
        address: '11 Nguyen Trai P9 Q5, tp HCM',
        phone: '0903068892',
        medicalInfo: {
            height: 1.57,
            weight: 50,
            blood_pressure_sys: 125,
            blood_pressure_dia: 90,
            pulse: 80,
            hospitalized: false,
            hospitalized_declare: '',
            suffered: {
                high_blood: false,
                ischemic_heart: false,
                diabetes: false,
                bleeding_disorders: false,
                allergies: false,
                asthma: false,
                epileptic: false,
                hepatitisB: false,
                pregnancy: false,
                other_diseases: false,
                other_declare: ''        
            }
        },
        dentalRecords: {
            tooth_diagram: [
                ["root_problem", "good", "good", "good", "good", "good", "outside_cavities", "good"],
                ["good", "good", "good", "good", "good", "occlusal_incisal_cavities", "good", "good"],
                ["good", "outside_cavities,occlusal_incisal_cavities", "good", "tooth_missing", "good", "good", "root_problem,outside_cavities,occlusal_incisal_cavities", "good"],
                ["good", "good", "root_problem,outside_cavities", "good", "good", "good", "good", "good"]
            ],
            description: "Rang cua hoi khenh"
        },
        treatmentRecords: [
            {
                exam_date: '2024-1-16',
                diagnoses: 'viêm nướu',
                treatments: [
                    {
                        cure: "cạo vôi răng, đánh bóng răng",
                        cure_date: '2024-1-16',
                        status: false
                    },
                    {
                        cure: "tay răng, abc xyz",
                        cure_date: '2024-1-18',
                        status: true
                    },

                ],
                amount: 200000,
                paid: true
            },
            {
                exam_date: "2024-5-16",
                diagnoses: 'sâu răng R16',
                treatments: [
                    {
                        cure: "1. trám răng R16 ( xa trong ) GI \n2. đệm hàm PHHT cũ",
                        cure_date: "2024-5-16",
                        status: false
                    }, 
                    {
                        cure: "lay tuy",
                        cure_date: "2024-5-26",
                        status: true
                    }, 

                ],
                amount: 500000,
                paid: false                
            }
        ],
    },
    {
        id: 'fd9bb2d4-e7f5-49e7-8efa-d7e6c958db94',
        name: 'Trần Tuệ Lâm',
        birth_year: 1964,
        gender: 'female',
        address: '308 Hong Bang P2 Q11, tp HCM',
        phone: '0907967892',
        medicalInfo: {
            height: 1.72,
            weight: 55,
            blood_pressure_sys: 128,
            blood_pressure_dia: 95,
            pulse: 90,
            hospitalized: false,
            hospitalized_declare: '',
            suffered: {
                high_blood: false,
                ischemic_heart: false,
                diabetes: false,
                bleeding_disorders: false,
                allergies: false,
                asthma: false,
                epileptic: false,
                hepatitisB: false,
                pregnancy: false,
                other_diseases: false,
                other_declare: ''        
            }
        },
        dentalRecords: {
            tooth_diagram: [
                ["root_problem", "good", "good", "good", "good", "good", "outside_cavities", "good"],
                ["good", "good", "good", "good", "good", "occlusal_incisal_cavities", "good", "good"],
                ["good", "outside_cavities,occlusal_incisal_cavities", "good", "tooth_missing", "good", "good", "root_problem,outside_cavities,occlusal_incisal_cavities", "good"],
                ["tooth_missing", "good", "root_problem,outside_cavities", "good", "tooth_missing", "good", "good", "good"]
            ],
            description: "Rang coi nho tren bi thieu san men"
        },
        treatmentRecords: [
            {
                exam_date: '2024-4-16',
                diagnoses: 'viêm nướu',
                treatments: [
                    {
                        cure: "cạo vôi răng, đánh bóng răng",
                        cure_date: '2024-4-16',
                        status: true
                    }
                ],
                amount: 300000,
                paid: true
            },
            {
                exam_date: '2024-6-27',
                diagnoses: 'sâu răng R16',
                treatments: [
                    {
                        cure: "1. trám răng R16 ( xa trong ) GI \n2. đệm hàm PHHT cũ",
                        cure_date: '2024-6-27',
                        status: true
                    }
                ],
                amount: 600000,
                paid: false                
            }
        ],

    },/*
    {
        id: 'e248ef17-befd-473b-934a-d4ae0d0900e6',
        name: 'Hồ Lê Em',
        birth_year: 1984,
        gender: 'Male',
        address: '',
        phone: '0949203004',
    },
    {
        id: 'cded6676-a040-463e-bde9-30b432bdc9c4',
        name: 'Nguyễn Kim Nhung',
        birth_year: 1981,
        gender: 'female',
        address: '',
        phone: '0378925573',
    },
    {
        id: '6c8933e1-9f05-4100-b33c-c9d3a8637851',
        name: 'Phạm Nguyễn Ngọc Tuân',
        birth_year: 1980,
        gender: 'male',
        address: '',
        phone: '0933210480',
    },*/
    
];

module.exports = {
    users,
    patients,
  };