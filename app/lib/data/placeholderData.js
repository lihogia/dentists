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
        id: 1,
        name: 'Bô Huệ Phương',
        birth_year: 1956,
        gender: 'female',
        address: '11 Nguyen Trai P9 Q5, tp HCM',
        phone: '0903068892',
        medicalInfo: {
            height: 1.57,
            weight: 50.5,
            blood_pressure_sys: 125,
            blood_pressure_dia: 90,
            pulse: 80,
            hospitalized: true,
            hospitalized_declare: 'Mổ ruột thừa',
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
            tooth_diagram: {
                upper_left: ["root_problem", "good", "good", "good", "good", "good", "outside_cavities", "good"],
                upper_right: ["good", "good", "good", "good", "good", "occlusal_incisal_cavities", "good", "good"],
                lower_left: ["good", "outside_cavities,occlusal_incisal_cavities", "good", "tooth_missing", "good", "good", "root_problem,outside_cavities,occlusal_incisal_cavities", "good"],
                lower_right: ["good", "good", "root_problem,outside_cavities", "good", "good", "good", "good", "good"],
            },
            description: "Rang cua hoi khenh"
        },
        treatmentRecords: [
            {
                exam_date: '2024-01-16',
                diagnose: 'nhiễm trùng chóp, vôi răng',
                treatment: "cạo vôi răng, đánh bóng răng, tay răng, abc xyz",
                amount: 200000,
                paid: true
            },
            {
                exam_date: "2024-05-16",
                diagnose: 'sâu răng R16',
                treatment: "trám răng R16 ( xa trong ) GI \n2. đệm hàm PHHT cũ",
                amount: 500000,
                paid: false                
            }
        ],
    },
    {
        id: 2,
        name: 'Trần Tuệ Lâm',
        birth_year: 1964,
        gender: 'female',
        address: '308 Hong Bang P2 Q11, tp HCM',
        phone: '0907967892',
        medicalInfo: {
            height: 1.72,
            weight: 55.7,
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
                other_diseases: true,
                other_declare: 'Viêm gan siêu vi C'        
            }
        },
        dentalRecords: {
            tooth_diagram: {
                upper_left: ["root_problem", "good", "good", "good", "good", "good", "outside_cavities", "good"],
                upper_right: ["good", "good", "good", "good", "good", "occlusal_incisal_cavities", "good", "good"],
                lower_left: ["good", "outside_cavities,occlusal_incisal_cavities", "good", "tooth_missing", "good", "good", "root_problem,outside_cavities,occlusal_incisal_cavities", "good"],
                lower_right: ["tooth_missing", "good", "root_problem,outside_cavities", "good", "tooth_missing", "good", "good", "good"]
            },
            description: "Rang coi nho tren bi thieu san men"
        },
        treatmentRecords: [
            {
                exam_date: '2024-04-16',
                diagnose: 'viêm nướu',
                treatment: "cạo vôi răng, đánh bóng răng",
                amount: 300000,
                paid: true
            },
            {
                exam_date: '2024-06-27',
                diagnose: 'sâu răng R16',
                treatment: "1. trám răng R13 ( xa trong ) GI \n2. đệm hàm PHHT cũ",
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