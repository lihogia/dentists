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
            teeth_diagram: {
                teeth_up_left: ['good', 'good', 'good', 'good', 'good', 'good', 'good', 'good'],
                teeth_bottom_left: ['good', 'good', 'good', 'good', 'good', 'good', 'good', 'good'],
                teeth_up_right: ['good', 'good', 'good', 'good', 'good', 'good', 'good', 'good'],
                teeth_bottom_right: ['good', 'good', 'good', 'good', 'good', 'good', 'good', 'good']
            },
            treatments: [
                {
                    invoice_id: '2345',
                    date: 5/16/2024,
                    diagnoses: 'viêm nướu',
                    cures: 'cạo vôi răng, đánh bóng răng'
                },
                {
                    invoice_id: '2345',
                    date: 5/26/2024,
                    diagnoses: 'sâu răng R16',
                    cures: "1. trám răng R16 ( xa trong ) GI \n2. đệm hàm PHHT cũ"
                }
            ]
        }
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
        }
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