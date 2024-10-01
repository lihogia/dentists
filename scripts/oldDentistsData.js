const oldpatients = [{
  "_id": {
    "$oid": "62862321107ea1754743a00f"
  },
  "fullname": "LỢI NGỌC MỸ",
  "birthyear": 1978,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-10T00:00:00.000Z"
      },
      "diagnoses": "Mất răng",
      "cures": "Giao PHHT thay R 23",
      "bill": 100000,
      "_id": {
        "$oid": "62862321107ea1754743a010"
      }
    },
    {
      "date": {
        "$date": "2023-11-13T00:00:00.000Z"
      },
      "diagnoses": "R tháo lắp bị sút khỏi hàm giả HT.",
      "cures": "gắn lại R nhựa 21 vào hàm giả HT bằng nhựa tự cứng.",
      "bill": 0,
      "_id": {
        "$oid": "655338e0bb78d7aad424dfb3"
      }
    },
    {
      "date": {
        "$date": "2024-08-04T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R36",
      "cures": "đặt As R36, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "66b0c17142e66b9f8224fed6"
      }
    },
    {
      "date": {
        "$date": "2024-08-07T17:00:00.000Z"
      },
      "diagnoses": "endo R36",
      "cures": "mở tuỷ buồng, đặt lại As R36, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "66b485b442e66b9f8224ff17"
      }
    }
  ],
  "__v": 9
},
{
  "_id": {
    "$oid": "6286235d107ea1754743a015"
  },
  "fullname": "TRẦN QUANG CHIẾN TRƯỜNG",
  "birthyear": 1990,
  "phone": "0708387639",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-11T00:00:00.000Z"
      },
      "diagnoses": "Viêm nướu, sáu răng",
      "cures": "1. cạo vôi răng + đánh bóng răng \r\n2. trám R 27 GIC ( xa ngoài )",
      "bill": 600000,
      "_id": {
        "$oid": "6286235d107ea1754743a016"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "628b569a2ae15c18ecdb0a87"
  },
  "fullname": "HUỲNH VĂN ĐÀI",
  "birthyear": 1970,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-11T00:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R 14",
      "cures": "đặt As R14",
      "bill": 0,
      "_id": {
        "$oid": "628b569a2ae15c18ecdb0a88"
      }
    },
    {
      "date": {
        "$date": "2022-03-15T00:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R14",
      "cures": "mở tuỷ R 14, đặt lại As",
      "bill": 0,
      "_id": {
        "$oid": "628b76b65dbbd1d3a3af02b7"
      }
    },
    {
      "date": {
        "$date": "2022-03-17T00:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "Bơm rửa ống tuỷ R 14",
      "bill": 0,
      "_id": {
        "$oid": "628bb3771e9cfedc92dc0418"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "628b625ed914c098948d38d0"
  },
  "fullname": "NGUYỄN NGỌC HIỂN",
  "birthyear": 1979,
  "phone": "0906646011",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-11T00:00:00.000Z"
      },
      "diagnoses": "Hàm giả lỏng ",
      "cures": "đệm hàm ",
      "bill": 150000,
      "_id": {
        "$oid": "628b625ed914c098948d38d1"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "628b64e935137a4d686704d7"
  },
  "fullname": "LÊ NGUYỆT HOÀ",
  "birthyear": 1961,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-12T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R13, R23",
      "cures": "Trám GIC R13 ( X ), R 23 ( X )",
      "bill": 350000,
      "_id": {
        "$oid": "628b64e935137a4d686704d8"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "628b77055dbbd1d3a3af02bd"
  },
  "fullname": "LÊ THỊ LOAN",
  "birthyear": 1966,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-15T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R36",
      "cures": "trám R 36 ( G ) GIC",
      "bill": 300000,
      "_id": {
        "$oid": "628b77055dbbd1d3a3af02be"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "628b77c65dbbd1d3a3af02c5"
  },
  "fullname": "HỒNG THẾ CHÂN",
  "birthyear": 1948,
  "phone": "0903144836",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-16T00:00:00.000Z"
      },
      "diagnoses": "veneer nhựa mòn mặt nhựa ngoài",
      "cures": "mài bỏ nhựa veneer, lấy dấu hàm dưới",
      "bill": 0,
      "_id": {
        "$oid": "628b77c65dbbd1d3a3af02c6"
      }
    },
    {
      "date": {
        "$date": "2022-03-19T00:00:00.000Z"
      },
      "diagnoses": "phục hình răng cố định",
      "cures": "thử sườn R 42, 43",
      "bill": 0,
      "_id": {
        "$oid": "628e67deaa0be203d7a1a08e"
      }
    },
    {
      "date": {
        "$date": "2022-03-24T00:00:00.000Z"
      },
      "diagnoses": "phục hình tháo lắp bị gãy góc",
      "cures": "thêm nhựa góc hàm 1 PHHT, lấy dấu có luôn hàm giả HT để thêm móc R26",
      "bill": 0,
      "_id": {
        "$oid": "628e6997aa0be203d7a1a0b7"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "628b77ec5dbbd1d3a3af02c8"
  },
  "fullname": "ĐỖ TỐ ANH",
  "birthyear": 1970,
  "phone": "0911608708",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-16T00:00:00.000Z"
      },
      "diagnoses": "răng vỡ lớn",
      "cures": "nhổ chân răng 25",
      "bill": 200000,
      "_id": {
        "$oid": "628b77ec5dbbd1d3a3af02c9"
      }
    },
    {
      "date": {
        "$date": "2022-03-17T00:00:00.000Z"
      },
      "diagnoses": "PHTL dẻo HD 3 R Justi",
      "cures": "Chỉnh PH dẻo",
      "bill": 0,
      "_id": {
        "$oid": "628bb2ee1e9cfedc92dc040d"
      }
    },
    {
      "date": {
        "$date": "2022-03-19T00:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "Phục hình tháo lắp dẻo HD 3 R Justi",
      "bill": 2200000,
      "_id": {
        "$oid": "628e6827aa0be203d7a1a09a"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "628bb20d1e9cfedc92dc03fe"
  },
  "fullname": "ĐINH THỊ ĐIỆP",
  "birthyear": 1963,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-16T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R 26",
      "cures": "trám răng R 26 ( GIC ) (G)",
      "bill": 200000,
      "_id": {
        "$oid": "628bb20d1e9cfedc92dc03ff"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "628bb2561e9cfedc92dc0402"
  },
  "fullname": "NGUYỄN QUỐC CƯỜNG",
  "birthyear": 2006,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-16T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng , đánh bóng răng",
      "bill": 350000,
      "_id": {
        "$oid": "628bb2561e9cfedc92dc0403"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "628bb2c51e9cfedc92dc0407"
  },
  "fullname": "NGUYỄN QUỐC BẢO",
  "birthyear": 2009,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-16T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng, đánh bóng răng",
      "bill": 350000,
      "_id": {
        "$oid": "628bb2c51e9cfedc92dc0408"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "628bb3a81e9cfedc92dc041b"
  },
  "fullname": "NGÔ THI MẪN MAMY",
  "birthyear": 1944,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-17T00:00:00.000Z"
      },
      "diagnoses": "phục hình cố định R 22",
      "cures": "lấy dấu ống mang chốt làm cùi giả R 22",
      "bill": 0,
      "_id": {
        "$oid": "628bb3a81e9cfedc92dc041c"
      }
    },
    {
      "date": {
        "$date": "2022-03-19T00:00:00.000Z"
      },
      "diagnoses": "phục hình",
      "cures": "gắn cùi giả R 23",
      "bill": 0,
      "_id": {
        "$oid": "628e68bfaa0be203d7a1a0a5"
      }
    },
    {
      "date": {
        "$date": "2022-03-24T00:00:00.000Z"
      },
      "diagnoses": "mất răng",
      "cures": "gắn R sứ 23 ( A2 )",
      "bill": 0,
      "_id": {
        "$oid": "628e69cfaa0be203d7a1a0be"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "628e6898aa0be203d7a1a09f"
  },
  "fullname": "TRƯƠNG CHÍ DŨNG",
  "birthyear": 1969,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-19T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng, đánh bóng răng",
      "bill": 350000,
      "_id": {
        "$oid": "628e6898aa0be203d7a1a0a0"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "628e6905aa0be203d7a1a0a8"
  },
  "fullname": "TRẦN PHI",
  "birthyear": 1900,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-21T00:00:00.000Z"
      },
      "diagnoses": "Endo R 23",
      "cures": "Bơm rửa ống tủy R 23",
      "bill": 0,
      "_id": {
        "$oid": "628e6905aa0be203d7a1a0a9"
      }
    },
    {
      "date": {
        "$date": "2022-06-17T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R16",
      "cures": "1. trám răng R16 ( xa trong ) GIC\r\n2. đệm hàm PHHT cũ",
      "bill": 60000,
      "_id": {
        "$oid": "62ac595de656f2a2f97af930"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "628e693eaa0be203d7a1a0ad"
  },
  "fullname": "NGUYỄN THANH LOAN",
  "birthyear": 1986,
  "phone": "0909319300",
  "treatments": [
    {
      "date": {
        "$date": "2022-03-21T00:00:00.000Z"
      },
      "diagnoses": "Viêm nướu",
      "cures": "Cạo vôi răng, đánh bóng R",
      "bill": 300000,
      "_id": {
        "$oid": "628e693eaa0be203d7a1a0ae"
      }
    },
    {
      "date": {
        "$date": "2023-11-10T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng HT, HD",
      "cures": "1. mài chỉnh gờ bén nhịp sứ R25 do bị mẻ.\r\n2. CVR + ĐBR.",
      "bill": 300000,
      "_id": {
        "$oid": "65533aebbb78d7aad424dfc6"
      }
    },
    {
      "date": {
        "$date": "2024-05-26T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 17 (G)",
      "cures": "trám răng R17 (G) GIC",
      "bill": 200000,
      "_id": {
        "$oid": "66555abd42e66b9f8224fa5c"
      }
    },
    {
      "date": {
        "$date": "2024-05-27T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 300000,
      "_id": {
        "$oid": "6655b81142e66b9f8224fa69"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "62a9faa5e656f2a2f97af920"
  },
  "fullname": "TRƯƠNG NỮ",
  "birthyear": 1952,
  "phone": "0902869957",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-15T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R 25",
      "cures": "trám răng R25 ( cổ răng trong ) GIC",
      "bill": 150000,
      "_id": {
        "$oid": "62a9faa5e656f2a2f97af921"
      }
    },
    {
      "date": {
        "$date": "2024-07-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R35, 26",
      "cures": "trám răng R35 ( cổ răng trong, xa ) GIC\r\ntrám răng R26 ( cổ răng trong ) GIC",
      "bill": 300000,
      "_id": {
        "$oid": "6690a2da42e66b9f8224fc54"
      }
    },
    {
      "date": {
        "$date": "2024-07-25T17:00:00.000Z"
      },
      "diagnoses": "R25 sâu răng vỡ lớn, R26 sâu răng ngoài",
      "cures": "trám răng GIC R26 (N), R25 (T) vỡ lớn.",
      "bill": 300000,
      "_id": {
        "$oid": "66a36b7942e66b9f8224fe1c"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "62a9fb1ce656f2a2f97af923"
  },
  "fullname": "DƯƠNG CHÍ CƯỜNG",
  "birthyear": 1952,
  "phone": "0903068892",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-15T00:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm trên",
      "cures": "lấy dấu sau cùng hàm trên",
      "bill": 0,
      "_id": {
        "$oid": "62a9fb1ce656f2a2f97af924"
      }
    },
    {
      "date": {
        "$date": "2022-06-17T00:00:00.000Z"
      },
      "diagnoses": "mất răng hàm trên toàn bộ",
      "cures": "cắn sáp hàm trên",
      "bill": 0,
      "_id": {
        "$oid": "62b283a9b50adcbc05f3a1ce"
      }
    },
    {
      "date": {
        "$date": "2022-06-21T00:00:00.000Z"
      },
      "diagnoses": "mất răng hàm trên toàn bộ",
      "cures": "thử PHTL TH hàm trên sáp, RVN màu A3",
      "bill": 0,
      "_id": {
        "$oid": "62b2841cb50adcbc05f3a1d3"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "62a9fbd7e656f2a2f97af926"
  },
  "fullname": "PHẠM NGUYỄN NGỌC TUÂN",
  "birthyear": 1980,
  "phone": "0933210480",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-15T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "62a9fbd7e656f2a2f97af927"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62ac58e9e656f2a2f97af92a"
  },
  "fullname": "HỒ LÊ EM",
  "birthyear": 1984,
  "phone": "0949203004",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-17T00:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm nướu",
      "cures": "1.cạo vôi răng + đánh bóng răng\r\n2. trám cổ răng R44 LC màu A2\r\n3. trám mặt nhai R46 GIC, cổ răng R45 LC A2",
      "bill": 800000,
      "_id": {
        "$oid": "62ac58e9e656f2a2f97af92b"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62ac5afde656f2a2f97af933"
  },
  "fullname": "NGUYỄN KIM NHUNG",
  "birthyear": 1981,
  "phone": "0378925573",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-17T00:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm nướu nặng",
      "cures": "1. cạo vôi răng + đánh bóng răng\r\n2. trám răng GIC R 38 (mặt nhai)",
      "bill": 700000,
      "_id": {
        "$oid": "62ac5afde656f2a2f97af934"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62b09353b50adcbc05f3a1bd"
  },
  "fullname": "ĐẶNG THANH THUỶ",
  "birthyear": 1957,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-14T00:00:00.000Z"
      },
      "diagnoses": "Khoan ống mang chốt chân răng R 22, 23. \r\nLấy dấu ống mang chốt để làm cùi giả R 22, 23.",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "62b09353b50adcbc05f3a1be"
      }
    },
    {
      "date": {
        "$date": "2022-06-20T00:00:00.000Z"
      },
      "diagnoses": "Mất răng hàm trên, hàm dưới.",
      "cures": "Gắn cùi giả R22, 23. \r\nTrám GIC cùi R 12\r\nMài chỉnh 6 cùi R ( 14, 13, 12, 22,23, 26 ) \r\ntrong đó R 14,22,23 là cùi giả, R 26 là R tuỷ sống, R 13, 12 đã lấy tuỷ.\r\nLấy dấu HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "62b09953b50adcbc05f3a1c5"
      }
    },
    {
      "date": {
        "$date": "2022-06-22T00:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "1.cắn sáp HT lấy dấu khớp cắn.\r\n2.gắn vĩnh viễn cầu răng sứ vói 2 đơn vị R 46,45. \r\n( R trụ R46, nhịp vói R45 ).",
      "bill": 0,
      "_id": {
        "$oid": "62b284dab50adcbc05f3a1d8"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "62b09a1eb50adcbc05f3a1c7"
  },
  "fullname": "TRẦN THỊ ĐÔNG",
  "birthyear": 1938,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-20T00:00:00.000Z"
      },
      "diagnoses": "Sâu răng R37.",
      "cures": "Trám răng GIC R37 ( mặt nhai ).",
      "bill": 250000,
      "_id": {
        "$oid": "62b09a1eb50adcbc05f3a1c8"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62b285eeb50adcbc05f3a1de"
  },
  "fullname": "HUỲNH THỊ BÍCH LIÊN",
  "birthyear": 1986,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-14T00:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "1. trám răng R 46 ( GIC )\r\n2. trám tạm R36 ( Eu )",
      "bill": 150000,
      "_id": {
        "$oid": "62b285eeb50adcbc05f3a1df"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62b28643b50adcbc05f3a1e2"
  },
  "fullname": "LƯ DĨNH THÔNG",
  "birthyear": 2009,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-14T00:00:00.000Z"
      },
      "diagnoses": "RTE lung lay",
      "cures": "nhổ răng R 65 lung lay",
      "bill": 50000,
      "_id": {
        "$oid": "62b28643b50adcbc05f3a1e3"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62b286bcb50adcbc05f3a1e6"
  },
  "fullname": "PHẠM THỊ TUYẾT NGA",
  "birthyear": 1970,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-07T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 350000,
      "_id": {
        "$oid": "62b286bcb50adcbc05f3a1e7"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62b28766b50adcbc05f3a1e9"
  },
  "fullname": "TRẦN THỊ NGA",
  "birthyear": 1971,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-21T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R24, 25",
      "cures": "trám răng LC A1 R24, 25.",
      "bill": 500000,
      "_id": {
        "$oid": "62b28766b50adcbc05f3a1ea"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "62b28911b50adcbc05f3a1ec"
  },
  "fullname": "NGUYỄN HUỲNH BẢO NGỌC",
  "birthyear": 2016,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-21T00:00:00.000Z"
      },
      "diagnoses": "viêm quanh chóp mãn R 61",
      "cures": "nhổ răng R 61",
      "bill": 50000,
      "_id": {
        "$oid": "62b28911b50adcbc05f3a1ed"
      }
    },
    {
      "date": {
        "$date": "2024-04-14T17:00:00.000Z"
      },
      "diagnoses": "viêm quanh chóp mãn R65",
      "cures": "điều trị thuốc R65.",
      "bill": 0,
      "_id": {
        "$oid": "661f8bad42e66b9f8224f7c4"
      }
    },
    {
      "date": {
        "$date": "2024-04-17T17:00:00.000Z"
      },
      "diagnoses": "R sữa sâu răng vỡ lớn R 64",
      "cures": "gây tê nhổ răng sữa R64.",
      "bill": 50000,
      "_id": {
        "$oid": "6620a4d742e66b9f8224f7e5"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "65532c1cbb78d7aad424df3a"
  },
  "fullname": "DƯƠNG THỊ KIỀU LOAN",
  "birthyear": 1975,
  "phone": "0917212910",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-12T00:00:00.000Z"
      },
      "diagnoses": "1. sâu răng R 36, R 46.\r\n2. viêm tuỷ cấp R 13.\r\n3. mất răng HT, HD.",
      "cures": "1. nội nha R 13: gây tê endo, ssot, bơm rửa ống tuỷ R13.\r\n2. trám răng R 36, 46 ( GIC, mặt nhai ).",
      "bill": 0,
      "_id": {
        "$oid": "65532c1cbb78d7aad424df3b"
      }
    },
    {
      "date": {
        "$date": "2023-10-19T00:00:00.000Z"
      },
      "diagnoses": "endo R13",
      "cures": "bơm rửa, SSOT ống tuỷ R13.",
      "bill": 0,
      "_id": {
        "$oid": "65532e9bbb78d7aad424df5d"
      }
    },
    {
      "date": {
        "$date": "2023-10-26T00:00:00.000Z"
      },
      "diagnoses": "endo R13",
      "cures": "bơm rửa, SSOT ống tuỷ R13, quay Ca (OH)2, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "65532f20bb78d7aad424df62"
      }
    },
    {
      "date": {
        "$date": "2023-11-03T00:00:00.000Z"
      },
      "diagnoses": "endo R13",
      "cures": "bơm rửa ống tuỷ R13, trám bít ống tuỷ R13.",
      "bill": 0,
      "_id": {
        "$oid": "65532f69bb78d7aad424df67"
      }
    },
    {
      "date": {
        "$date": "2023-11-17T00:00:00.000Z"
      },
      "diagnoses": "endo R13",
      "cures": "trám kết thúc R13 ( GIC )",
      "bill": 800000,
      "_id": {
        "$oid": "655737d8bb78d7aad424dfed"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "655330d3bb78d7aad424df6b"
  },
  "fullname": "TRẦN THỊ KIM GIÀU",
  "birthyear": 1977,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-21T00:00:00.000Z"
      },
      "diagnoses": "1. viêm tuỷ cấp R14.\r\n2. viêm nướu.\r\n3. mất răng HT, HD.",
      "cures": "gây tê endo R14. R14 đã có Am từ trước, SR tái phát ở phía xa. SSOT, bơm rửa ống tuỷ R 14, có 2 ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "655330d3bb78d7aad424df6c"
      }
    },
    {
      "date": {
        "$date": "2023-10-28T00:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "bơm rửa ống tuỷ, SSOT R14, quay Ca (OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "65533184bb78d7aad424df75"
      }
    },
    {
      "date": {
        "$date": "2023-11-04T00:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "bơm rửa ống tuỷ R14, trám bít ống tuỷ R14. ( 2 ống tuỷ ).",
      "bill": 0,
      "_id": {
        "$oid": "655331f3bb78d7aad424df7a"
      }
    },
    {
      "date": {
        "$date": "2023-11-11T00:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "trám kết thúc R14 (GIC): trám mặt nhai + xa + cổ răng.",
      "bill": 0,
      "_id": {
        "$oid": "65533322bb78d7aad424df7f"
      }
    },
    {
      "date": {
        "$date": "2024-06-14T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 13",
      "cures": "trám răng R13 (G) LC composite A3",
      "bill": 200000,
      "_id": {
        "$oid": "6670196b42e66b9f8224fb44"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "65533412bb78d7aad424df84"
  },
  "fullname": "NGUYỄN THỊ THAY",
  "birthyear": 1954,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-11T00:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "1. mài mặt chân răng R 33.\r\n2. lấy dấu HT, HD.\r\n(HT là 1 PHTL toàn hàm ).",
      "bill": 0,
      "_id": {
        "$oid": "65533412bb78d7aad424df85"
      }
    },
    {
      "date": {
        "$date": "2023-11-14T00:00:00.000Z"
      },
      "diagnoses": "mất răng HD.",
      "cures": "cắn sáp HD, so màu răng R Justi 62. HD chỉ còn răng sứ 43 + các mặt chân răng HD, ko nhổ.",
      "bill": 0,
      "_id": {
        "$oid": "6553347fbb78d7aad424df8b"
      }
    },
    {
      "date": {
        "$date": "2023-11-17T00:00:00.000Z"
      },
      "diagnoses": "mất răng hàm dưới.",
      "cures": "Thử hàm sáp hàm dưới ( 13R ) ( R Justi 62 )",
      "bill": 5200000,
      "_id": {
        "$oid": "6557366cbb78d7aad424dfe3"
      }
    },
    {
      "date": {
        "$date": "2023-11-22T00:00:00.000Z"
      },
      "diagnoses": "PHTLHD",
      "cures": "giao hàm, PHTLHD 13R Justi màu 66. lấy dấu HD để thêm 1R vào hàm cũ.",
      "bill": 0,
      "_id": {
        "$oid": "655dd46fbb78d7aad424e122"
      }
    },
    {
      "date": {
        "$date": "2023-11-27T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD dẻo gây đau",
      "cures": "chỉnh đau PHTL dẻo HD.\r\ntặng 1 tube Kamistad.",
      "bill": 0,
      "_id": {
        "$oid": "65656a8042e66b9f8224f013"
      }
    },
    {
      "date": {
        "$date": "2023-12-18T17:00:00.000Z"
      },
      "diagnoses": "chân răng R33 viêm quanh chóp cấp",
      "cures": "nhổ chân răng R33.",
      "bill": 250000,
      "_id": {
        "$oid": "65811bca42e66b9f8224f330"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "65533709bb78d7aad424df92"
  },
  "fullname": "LỘ THỊ XUÂN LOAN",
  "birthyear": 1961,
  "phone": "0913703540",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-14T00:00:00.000Z"
      },
      "diagnoses": "mất răng toàn bộ HT.\r\nmất răng bán phần HD.",
      "cures": "lấy dấu sơ khởi HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "65533709bb78d7aad424df93"
      }
    },
    {
      "date": {
        "$date": "2023-11-16T00:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "lấy dấu sau cùng HT, cắn sáp HT, mài chỉnh đau hàm khung HD cũ của bệnh nhân, tặng 1 tube Kamistad, so màu răng Justi 66.",
      "bill": 0,
      "_id": {
        "$oid": "655c6f0cbb78d7aad424e082"
      }
    },
    {
      "date": {
        "$date": "2023-11-21T00:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD.",
      "cures": "thử hàm sáp hàm trên, hàm dưới. gửi labo ép nhựa dẻo HD 7R.\r\nlần tới giao hàm dưới thu 3,2tr.",
      "bill": 0,
      "_id": {
        "$oid": "655c6f87bb78d7aad424e087"
      }
    },
    {
      "date": {
        "$date": "2023-11-22T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD.",
      "cures": "giao hàm giả HD: PHTLHD dẻo 7R Justi ( màu 66 ). lấy dấu toàn HD ( có luôn hàm giả ) để lên răng lại HT.",
      "bill": 3200000,
      "_id": {
        "$oid": "655f529742e66b9f8224ef10"
      }
    },
    {
      "date": {
        "$date": "2023-11-27T17:00:00.000Z"
      },
      "diagnoses": "PHTLTH HT R Mỹ Justi",
      "cures": "thử hàm sáp toàn hàm HT, chỉnh đau PHTL dẻo HD.",
      "bill": 0,
      "_id": {
        "$oid": "6565be0142e66b9f8224f020"
      }
    },
    {
      "date": {
        "$date": "2023-11-30T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT TH R Mỹ Justi",
      "cures": "chỉnh đau hàm dẻo HD, giao hàm trên PHTL TH. Tặng giấy nhám + 1 tube Fixodent.",
      "bill": 3500000,
      "_id": {
        "$oid": "656a7e9142e66b9f8224f107"
      }
    },
    {
      "date": {
        "$date": "2023-12-05T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD gây đau",
      "cures": "chỉnh đau hàm trên, hàm dưới.",
      "bill": 0,
      "_id": {
        "$oid": "6570649d42e66b9f8224f138"
      }
    },
    {
      "date": {
        "$date": "2023-12-19T17:00:00.000Z"
      },
      "diagnoses": "đau do hàm giả tháo lắp HT,HD.",
      "cures": "chỉnh đau PHTL HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "65837b5a42e66b9f8224f34e"
      }
    },
    {
      "date": {
        "$date": "2023-12-29T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD.",
      "cures": "chỉnh đau hàm trên, tặng thêm giấy nhám.",
      "bill": 0,
      "_id": {
        "$oid": "659289bb42e66b9f8224f42a"
      }
    }
  ],
  "__v": 10
},
{
  "_id": {
    "$oid": "65533983bb78d7aad424dfb8"
  },
  "fullname": "ĐỖ VY Y",
  "birthyear": 1958,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-23T00:00:00.000Z"
      },
      "diagnoses": "R 26 mòn mặt nhai nhiều, viêm tuỷ cấp.",
      "cures": "gây tê, mở tuỷ buồng, đặt As R26.\r\nĐiều trị thuốc giảm đau.\r\nHA = 112/76, M= 77.",
      "bill": 0,
      "_id": {
        "$oid": "65533bb2bb78d7aad424dfd2"
      }
    },
    {
      "date": {
        "$date": "2023-10-25T17:00:00.000Z"
      },
      "diagnoses": "endo R26, chẩn đoán: viêm mô tế bào cấp vùng má trên bên trái do R26.",
      "cures": "điều trị thuốc R26, mở tuỷ R26, SSOT bơm rửa ống tuỷ, chỉ dò được ống tuỷ trong.",
      "bill": 0,
      "_id": {
        "$oid": "6560183742e66b9f8224ef22"
      }
    },
    {
      "date": {
        "$date": "2023-11-02T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "SSOT, bơm rửa ống tuỷ R26.",
      "bill": 0,
      "_id": {
        "$oid": "6560187042e66b9f8224ef27"
      }
    },
    {
      "date": {
        "$date": "2023-11-12T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "SSOT, bơm rửa ống tuỷ R26.",
      "bill": 0,
      "_id": {
        "$oid": "656018af42e66b9f8224ef2c"
      }
    },
    {
      "date": {
        "$date": "2023-11-23T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "bơm rửa ống tuỷ R26, trám bít ống tuỷ trong R26, lót Eu, trám kết thúc GIC.",
      "bill": 700000,
      "_id": {
        "$oid": "6560191942e66b9f8224ef31"
      }
    }
  ],
  "__v": 8
},
{
  "_id": {
    "$oid": "655b3c80bb78d7aad424dff8"
  },
  "fullname": "NGUYỄN TRỌNG TOÀN",
  "birthyear": 1953,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-16T00:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R 47",
      "cures": "gây tê, mở tuỷ buồng, đặt As R 47. \r\nPhim XQ R 47.",
      "bill": 0,
      "_id": {
        "$oid": "655b3c80bb78d7aad424dff9"
      }
    },
    {
      "date": {
        "$date": "2023-11-20T00:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "mở tuỷ R 47, sửa soạn ống tuỷ, bơm rửa ống tuỷ, điều trị thuốc 5 ngày.\r\nMetrogyl denta ( 1 tube ).",
      "bill": 0,
      "_id": {
        "$oid": "655b3d02bb78d7aad424dffe"
      }
    },
    {
      "date": {
        "$date": "2023-11-22T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "bơm rửa, sửa soạn ống tuỷ R47.",
      "bill": 0,
      "_id": {
        "$oid": "655f50c542e66b9f8224ef06"
      }
    },
    {
      "date": {
        "$date": "2023-11-29T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT, bơm rửa ống tuỷ R47.",
      "bill": 0,
      "_id": {
        "$oid": "6568392f42e66b9f8224f073"
      }
    },
    {
      "date": {
        "$date": "2023-12-05T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT bơm rửa ống tuỷ R47.",
      "bill": 0,
      "_id": {
        "$oid": "656fe40942e66b9f8224f124"
      }
    },
    {
      "date": {
        "$date": "2023-12-12T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT bơm rửa ống tuỷ R47, điều trị thuốc 5 ngày ( Rodogyl + Alaxan + Omeprazole 20mg ).",
      "bill": 0,
      "_id": {
        "$oid": "657993bf42e66b9f8224f27b"
      }
    },
    {
      "date": {
        "$date": "2023-12-20T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT bơm rửa ống tuỷ R47, trám bít ống tuỷ R47.",
      "bill": 0,
      "_id": {
        "$oid": "6583292b42e66b9f8224f338"
      }
    },
    {
      "date": {
        "$date": "2024-01-09T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "trám kết thúc GIC R47.",
      "bill": 800000,
      "_id": {
        "$oid": "659e577f42e66b9f8224f4ce"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "655b3ec8bb78d7aad424e022"
  },
  "fullname": "NGÔ THỊ THUỲ MAI",
  "birthyear": 1972,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-20T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu\r\nsâu răng vỡ lớn mặt trong R14",
      "cures": "cạo vôi răng + đánh bóng răng.\r\ntrám R 14 ( GIC )",
      "bill": 600000,
      "_id": {
        "$oid": "655b3ec8bb78d7aad424e023"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655b462abb78d7aad424e02a"
  },
  "fullname": "NGUYỄN TÚ NGÂN ( NGỌC PHỤNG )",
  "birthyear": 1977,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-20T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu kẽ răng",
      "cures": "khám HDVSRM, dùng chỉ nha khoa, súc miệng chlorfast.",
      "bill": 0,
      "_id": {
        "$oid": "655b462abb78d7aad424e02b"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655b46ebbb78d7aad424e02d"
  },
  "fullname": "TIẾT DỤC ANH",
  "birthyear": 1958,
  "phone": "0903399821",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-18T00:00:00.000Z"
      },
      "diagnoses": "mất răng cối lớn HD 2 bên.\r\nlàm PHTLHD dẻo.",
      "cures": "lấy dấu sơ khởi HT, HD.",
      "bill": 3500000,
      "_id": {
        "$oid": "655b46ebbb78d7aad424e02e"
      }
    },
    {
      "date": {
        "$date": "2023-11-21T00:00:00.000Z"
      },
      "diagnoses": "PHTL HD dẻo, R Mỹ Justi màu 62.",
      "cures": "cắn sáp HD, so màu răng, bệnh nhân chọn màu răng trắng ( Justi 62 ).",
      "bill": 0,
      "_id": {
        "$oid": "655c87e6bb78d7aad424e092"
      }
    },
    {
      "date": {
        "$date": "2023-11-22T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD.",
      "cures": "thử hàm sáp HD.",
      "bill": 0,
      "_id": {
        "$oid": "655f52c042e66b9f8224ef15"
      }
    },
    {
      "date": {
        "$date": "2023-11-28T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD dẻo",
      "cures": "giao hàm PHTL HD dẻo 7R Mỹ Justi, tặng 1 Kamistad.",
      "bill": 0,
      "_id": {
        "$oid": "6567168742e66b9f8224f063"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "655b4896bb78d7aad424e030"
  },
  "fullname": "THANG CHƠN",
  "birthyear": 1957,
  "phone": "0936157723",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-18T00:00:00.000Z"
      },
      "diagnoses": "mất răng HD: R 36,37.",
      "cures": "lấy dấu HT, HD",
      "bill": 0,
      "_id": {
        "$oid": "655b4896bb78d7aad424e031"
      }
    },
    {
      "date": {
        "$date": "2023-11-21T00:00:00.000Z"
      },
      "diagnoses": "PHTL HD nhựa dẻo 2R Justi.",
      "cures": "thử hàm sáp 2R 36,37.",
      "bill": 0,
      "_id": {
        "$oid": "655c8840bb78d7aad424e099"
      }
    },
    {
      "date": {
        "$date": "2023-11-24T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD 2R dẻo, R Mỹ Justi.",
      "cures": "giao hàm dẻo HD 2R 36,37. R Justi màu 66.",
      "bill": 1500000,
      "_id": {
        "$oid": "6563e60442e66b9f8224efbf"
      }
    },
    {
      "date": {
        "$date": "2023-12-04T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD gây đau",
      "cures": "chỉnh đau PHHD dẻo 2R.",
      "bill": 0,
      "_id": {
        "$oid": "658c28f342e66b9f8224f3e2"
      }
    },
    {
      "date": {
        "$date": "2023-12-26T17:00:00.000Z"
      },
      "diagnoses": "hàm giả HD gây đau",
      "cures": "chỉnh đau hàm giả dẻo HD, R giả 37 cắn má.",
      "bill": 0,
      "_id": {
        "$oid": "658c29b742e66b9f8224f3e7"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "655b4a87bb78d7aad424e046"
  },
  "fullname": "TỐNG VIỆT PHƯƠNG",
  "birthyear": 1974,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-18T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R22 ( xa trong ).",
      "cures": "trám răng LC A1 R22 ( xa trong ).",
      "bill": 250000,
      "_id": {
        "$oid": "655b4a87bb78d7aad424e047"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655b4ad9bb78d7aad424e049"
  },
  "fullname": "TRIỆU LỆ CHÂN",
  "birthyear": 1957,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-18T00:00:00.000Z"
      },
      "diagnoses": "R42 sâu răng vỡ lớn.",
      "cures": "khám tư vấn.",
      "bill": 0,
      "_id": {
        "$oid": "655b4ad9bb78d7aad424e04a"
      }
    },
    {
      "date": {
        "$date": "2023-11-23T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 42.",
      "cures": "gây tê endo R42, SSOT bơm rửa ống tuỷ. cạo vôi răng vùng R cửa dưới.\r\nHA=123/76, M=89.",
      "bill": 0,
      "_id": {
        "$oid": "65606eb542e66b9f8224ef5e"
      }
    },
    {
      "date": {
        "$date": "2023-11-27T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 42.",
      "cures": "SSOT bơm rửa ống tuỷ chân răng R42, quay Ca (OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "6565be8842e66b9f8224f027"
      }
    },
    {
      "date": {
        "$date": "2023-12-04T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 42.",
      "cures": "bơm rửa ống tuỷ SSOT chân răng 42.",
      "bill": 0,
      "_id": {
        "$oid": "656eab7b42e66b9f8224f113"
      }
    },
    {
      "date": {
        "$date": "2023-12-07T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 42",
      "cures": "quay cortisomol trám bít ống tuỷ chân răng 42, khoan ống mang chốt, lấy dấu HT, HD đúc cùi giả R42.",
      "bill": 0,
      "_id": {
        "$oid": "6572977542e66b9f8224f153"
      }
    },
    {
      "date": {
        "$date": "2023-12-10T17:00:00.000Z"
      },
      "diagnoses": "phục hình sứ R42",
      "cures": "gắn cùi giả R42, mài cùi, lấy dấu HD, so màu răng C2.",
      "bill": 0,
      "_id": {
        "$oid": "6576b81342e66b9f8224f17f"
      }
    },
    {
      "date": {
        "$date": "2023-12-13T17:00:00.000Z"
      },
      "diagnoses": "R sứ 42",
      "cures": "thử răng sứ R42, mài bớt sứ cingulum, chỉnh độ cao, đổi màu răng từ C2 sang A3.",
      "bill": 0,
      "_id": {
        "$oid": "657a7ded42e66b9f8224f288"
      }
    },
    {
      "date": {
        "$date": "2023-12-17T17:00:00.000Z"
      },
      "diagnoses": "R sứ 42",
      "cures": "1. gắn răng sứ R42 màu A3.\r\n2. cạo vôi răng lần 2 + đánh bóng răng.",
      "bill": 1600000,
      "_id": {
        "$oid": "657fc13642e66b9f8224f312"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "655b4b31bb78d7aad424e050"
  },
  "fullname": "LƯ PHỤNG",
  "birthyear": 1960,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-20T00:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "655b4b31bb78d7aad424e051"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655b4b54bb78d7aad424e053"
  },
  "fullname": "DƯƠNG MINH HÙNG",
  "birthyear": 1959,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-09-24T17:00:00.000Z"
      },
      "diagnoses": "R24 viêm quanh chóp mãn.",
      "cures": "mở tuỷ để trống R24, bơm rửa ống tuỷ, SSOT.",
      "bill": 0,
      "_id": {
        "$oid": "6560727742e66b9f8224ef66"
      }
    },
    {
      "date": {
        "$date": "2023-09-26T17:00:00.000Z"
      },
      "diagnoses": "endo R24",
      "cures": "SSOT bơm rửa ống tuỷ R24, trám tạm Eu.",
      "bill": 0,
      "_id": {
        "$oid": "656072f642e66b9f8224ef70"
      }
    },
    {
      "date": {
        "$date": "2023-10-03T17:00:00.000Z"
      },
      "diagnoses": "endo R24",
      "cures": "SSOT bơm rửa ống tuỷ R24, quay Ca(OH)2 vô ống tuỷ, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6560739d42e66b9f8224ef75"
      }
    },
    {
      "date": {
        "$date": "2023-10-10T17:00:00.000Z"
      },
      "diagnoses": "endo R24",
      "cures": "SSOT bơm rửa ống tuỷ R24, quay Ca(OH)2, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "656073f542e66b9f8224ef7a"
      }
    },
    {
      "date": {
        "$date": "2023-10-17T17:00:00.000Z"
      },
      "diagnoses": "endo R24",
      "cures": "bơm rửa ống tuỷ R24 bằng NaCl 0,9%, trám bít ống tuỷ bằng cortisomol + cone GP, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6560747442e66b9f8224ef7f"
      }
    },
    {
      "date": {
        "$date": "2023-10-24T17:00:00.000Z"
      },
      "diagnoses": "endo R24",
      "cures": "trám kết thúc R24 endo bằng GIC.",
      "bill": 700000,
      "_id": {
        "$oid": "656074b342e66b9f8224ef84"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "655b4b78bb78d7aad424e056"
  },
  "fullname": "PHAN THỊ NGỌC LAN",
  "birthyear": 1977,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-20T00:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "655b4b78bb78d7aad424e057"
      }
    },
    {
      "date": {
        "$date": "2023-08-31T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 17",
      "cures": "trám răng GIC R17 (xa trong )",
      "bill": 300000,
      "_id": {
        "$oid": "65601d8e42e66b9f8224ef38"
      }
    },
    {
      "date": {
        "$date": "2023-10-06T17:00:00.000Z"
      },
      "diagnoses": "miếng trám R17 bị sút",
      "cures": "trám lại R17 (XT) GIC (free).",
      "bill": 0,
      "_id": {
        "$oid": "6586bc3a42e66b9f8224f3ac"
      }
    },
    {
      "date": {
        "$date": "2023-12-22T17:00:00.000Z"
      },
      "diagnoses": "miếng trám R17 bị sút",
      "cures": "trám lại R17 (XT) GIC.",
      "bill": 200000,
      "_id": {
        "$oid": "6586bd0f42e66b9f8224f3b1"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "655b4ba2bb78d7aad424e05a"
  },
  "fullname": "NGUYỄN HUY KHANG",
  "birthyear": 1974,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-21T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "trám răng GIC mặt nhai R 35,17.",
      "bill": 450000,
      "_id": {
        "$oid": "655b4ba2bb78d7aad424e05b"
      }
    },
    {
      "date": {
        "$date": "2023-04-12T17:00:00.000Z"
      },
      "diagnoses": "viêm quanh chóp mãn R12",
      "cures": "mở tuỷ R12, bơm rửa SSOT.",
      "bill": 0,
      "_id": {
        "$oid": "6565caec42e66b9f8224f03d"
      }
    },
    {
      "date": {
        "$date": "2023-04-17T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "SSOT bơm rửa ống tuỷ R12.",
      "bill": 0,
      "_id": {
        "$oid": "6565cb5342e66b9f8224f042"
      }
    },
    {
      "date": {
        "$date": "2023-04-26T17:00:00.000Z"
      },
      "diagnoses": "endo R12.",
      "cures": "SSOT bơm rửa ống tuỷ R12.",
      "bill": 0,
      "_id": {
        "$oid": "6565cba442e66b9f8224f047"
      }
    },
    {
      "date": {
        "$date": "2023-06-25T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "SSOT bởm rửa ống tuỷ R12, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "6565cc3e42e66b9f8224f04c"
      }
    },
    {
      "date": {
        "$date": "2023-07-02T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "SSOT bơm rửa ống tuỷ R12, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "6565cc9b42e66b9f8224f051"
      }
    },
    {
      "date": {
        "$date": "2023-07-10T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "SSOT bơm rửa ống tuỷ R12, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "6644764342e66b9f8224f903"
      }
    },
    {
      "date": {
        "$date": "2023-10-05T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "BN nghỉ ko điều trị thời gian dài do bị tai nạn.\r\nSSOT bơm rửa ống tuỷ R12, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "6644775f42e66b9f8224f908"
      }
    },
    {
      "date": {
        "$date": "2023-10-12T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "bơm rửa ống tuỷ, trám bít ống tuỷ R12.",
      "bill": 0,
      "_id": {
        "$oid": "664477b042e66b9f8224f90d"
      }
    },
    {
      "date": {
        "$date": "2023-10-18T17:00:00.000Z"
      },
      "diagnoses": "endo R12, sâu răng 14, 16, 34.",
      "cures": "trám kết thúc R12 GIC.\r\ntrám răng GIC R 14, 16, 34.\r\ncạo vôi răng + đánh bóng răng ( chủ yếu răng cửa dưới ).",
      "bill": 1500000,
      "_id": {
        "$oid": "6644784a42e66b9f8224f912"
      }
    }
  ],
  "__v": 9
},
{
  "_id": {
    "$oid": "655b4c28bb78d7aad424e05d"
  },
  "fullname": "LÝ HÁ NỮ",
  "birthyear": 1959,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-05T00:00:00.000Z"
      },
      "diagnoses": "mất răng HT.\r\nlàm PHTL HT dẻo.",
      "cures": "lấy dấu HT, HD.\r\ngắp 1 mảnh chân răng R14.",
      "bill": 0,
      "_id": {
        "$oid": "655b4c28bb78d7aad424e05e"
      }
    },
    {
      "date": {
        "$date": "2023-10-12T00:00:00.000Z"
      },
      "diagnoses": "PHTLHT dẻo",
      "cures": "thử hàm sáp HT, cắn sáp lại HT. đặt cọc 1 tr.",
      "bill": 0,
      "_id": {
        "$oid": "655ddd96bb78d7aad424e138"
      }
    },
    {
      "date": {
        "$date": "2023-11-22T00:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "thử hàm sáp HT 13R Justi ( màu 69 ).",
      "bill": 3200000,
      "_id": {
        "$oid": "655dddfebb78d7aad424e13d"
      }
    },
    {
      "date": {
        "$date": "2023-10-19T00:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "giao PHTLHT dẻo 13R Justi ( màu 69 ).\r\ncạo vôi răng + đánh bóng răng HD ( free ).\r\ntặng 2 hộp nhựa đựng hàm giả + 4 viên thuốc tẩy hàm giả.",
      "bill": 0,
      "_id": {
        "$oid": "655ddea2bb78d7aad424e142"
      }
    },
    {
      "date": {
        "$date": "2023-11-21T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD dẻo",
      "cures": "lấy dấu HT, HD, màu răng Justi 69.",
      "bill": 0,
      "_id": {
        "$oid": "6563e49d42e66b9f8224efad"
      }
    },
    {
      "date": {
        "$date": "2023-11-24T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD dẻo",
      "cures": "thử hàm sáp HD 4R Justi màu 69.",
      "bill": 0,
      "_id": {
        "$oid": "6563e4e042e66b9f8224efb2"
      }
    },
    {
      "date": {
        "$date": "2023-11-28T17:00:00.000Z"
      },
      "diagnoses": "PHTLD dẻo R Mỹ Justi",
      "cures": "giao hàm PHTLHD 4R Justi, tặng 1 tube Kamistad.",
      "bill": 2800000,
      "_id": {
        "$oid": "6566c54742e66b9f8224f056"
      }
    },
    {
      "date": {
        "$date": "2023-12-22T17:00:00.000Z"
      },
      "diagnoses": "hàm giả HD gây đau",
      "cures": "chỉnh đau PHHD hàm dẻo, tặng 6 viên thuốc tẩy hàm giả.",
      "bill": 0,
      "_id": {
        "$oid": "6586bb0042e66b9f8224f3a2"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "655c38f2bb78d7aad424e060"
  },
  "fullname": "TRƯƠNG XỈU YẾN",
  "birthyear": 1955,
  "phone": "0903855017",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-21T00:00:00.000Z"
      },
      "diagnoses": "phục hình hàm trên cũ (2) gãy dọc.\r\nphục hình hàm trên cũ (1)gây đau.",
      "cures": "chỉnh đau PHHT cũ (1).\r\nlấy dấu HT để gửi labo vá hàm PHTL cũ (20.",
      "bill": 0,
      "_id": {
        "$oid": "655c38f2bb78d7aad424e061"
      }
    },
    {
      "date": {
        "$date": "2023-11-24T17:00:00.000Z"
      },
      "diagnoses": "vá hàm HT",
      "cures": "giao hàm gãy được vá lại, có lót lưới, đệm hàm.",
      "bill": 500000,
      "_id": {
        "$oid": "6563e53f42e66b9f8224efb7"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "655c39b4bb78d7aad424e063"
  },
  "fullname": "LÂM KIM ÁNH",
  "birthyear": 1944,
  "phone": "0708682054",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-16T00:00:00.000Z"
      },
      "diagnoses": "hàm giả HD gãy,cần thêm 1R giả",
      "cures": "lấy dấu HD. nhổ chân răng 14 nhô khỏi sóng hàm ( dưới cầu răng ).",
      "bill": 0,
      "_id": {
        "$oid": "655c39b4bb78d7aad424e064"
      }
    },
    {
      "date": {
        "$date": "2023-11-21T00:00:00.000Z"
      },
      "diagnoses": "hàm giả HD gãy",
      "cures": "giao hàm PHHD: thêm R42 vào hàm giả, cắt móc chỗ R42, đệm hàm.",
      "bill": 400000,
      "_id": {
        "$oid": "655c3c39bb78d7aad424e06e"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "655c876abb78d7aad424e08c"
  },
  "fullname": "KHỔNG THU",
  "birthyear": 1949,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-21T00:00:00.000Z"
      },
      "diagnoses": "R36 sâu răng vỡ lớn",
      "cures": "trám răng GIC R36 (xa).",
      "bill": 200000,
      "_id": {
        "$oid": "655c876abb78d7aad424e08d"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655c9c16bb78d7aad424e101"
  },
  "fullname": "HUỲNH MỸ DIỄM",
  "birthyear": 1957,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-05T00:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn R11,21.",
      "cures": "nhổ răng chân răng 11, 21. HA=117/80, M=78.",
      "bill": 400000,
      "_id": {
        "$oid": "655c9c16bb78d7aad424e102"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655c9c9bbb78d7aad424e105"
  },
  "fullname": "ĐẶNG KHÁNH GIAI",
  "birthyear": 1996,
  "phone": "0777732136",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-07T00:00:00.000Z"
      },
      "diagnoses": "sâu răng R26 (nhai)",
      "cures": "trám răng GIC R26 (nhai)",
      "bill": 200000,
      "_id": {
        "$oid": "655c9c9bbb78d7aad424e106"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655c9d35bb78d7aad424e109"
  },
  "fullname": "ĐẶNG PHƯƠNG THẢO",
  "birthyear": 1967,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-06T17:00:00.000Z"
      },
      "diagnoses": "viêm quanh chóp cấp R34",
      "cures": "gây tê, mở tuỷ buồng R34, đặt As.",
      "bill": 0,
      "_id": {
        "$oid": "655c9d35bb78d7aad424e10a"
      }
    },
    {
      "date": {
        "$date": "2023-10-09T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "mở tuỷ, bơm rửa ống tuỷ R34, trám tạm Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6560775e42e66b9f8224ef92"
      }
    },
    {
      "date": {
        "$date": "2023-10-16T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT, bơm rửa ống tuỷ R34, glyde phá Calci hoá ống tuỷ, quay Ca(OH)2, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6560788c42e66b9f8224ef97"
      }
    },
    {
      "date": {
        "$date": "2023-10-26T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34, quay Ca(OH)2, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "656078f242e66b9f8224ef9e"
      }
    },
    {
      "date": {
        "$date": "2023-11-07T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34.",
      "bill": 0,
      "_id": {
        "$oid": "6560793942e66b9f8224efa3"
      }
    },
    {
      "date": {
        "$date": "2023-11-16T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34, quay Ca(OH)2, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "65607b9942e66b9f8224efa8"
      }
    },
    {
      "date": {
        "$date": "2023-11-28T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "bơm rửa ống tuỷ R34.",
      "bill": 0,
      "_id": {
        "$oid": "6566ff5542e66b9f8224f05b"
      }
    },
    {
      "date": {
        "$date": "2023-12-05T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34.",
      "bill": 0,
      "_id": {
        "$oid": "656ffaec42e66b9f8224f130"
      }
    },
    {
      "date": {
        "$date": "2023-12-12T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "bơm rửa ống tuỷ R34, trám bít ống tuỷ R34.",
      "bill": 0,
      "_id": {
        "$oid": "65792ea642e66b9f8224f25d"
      }
    }
  ],
  "__v": 8
},
{
  "_id": {
    "$oid": "655c9e74bb78d7aad424e114"
  },
  "fullname": "TĂNG THIÊN TRUNG",
  "birthyear": 1997,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-10T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu nặng HT, HD. sâu răng  R35, R46.",
      "cures": "cạo vôi răng + đánh bóng răng. (400k)\r\ntrám GIC R 35 (nhai), R46. (450k)\r\nbán 1 tube Metrogyldenta (50k)",
      "bill": 900000,
      "_id": {
        "$oid": "655c9e74bb78d7aad424e115"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655dd3e1bb78d7aad424e11c"
  },
  "fullname": "ĐẶNG KHANG VẪN",
  "birthyear": 1992,
  "phone": "0906820387",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-22T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng 2 hàm. đã nhổ R38.",
      "cures": "cạo vôi răng + đánh bóng răng. HDVSRM, hướng dẫn cách dùng chỉ nha khoa đúng phương pháp.",
      "bill": 400000,
      "_id": {
        "$oid": "655dd3e1bb78d7aad424e11d"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655ddc5ebb78d7aad424e12a"
  },
  "fullname": "NGUYỄN THANH PHONG",
  "birthyear": 1981,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-14T00:00:00.000Z"
      },
      "diagnoses": "sâu răng. viêm nướu răng 2 hàm.",
      "cures": "cạo vôi răng + đánh bóng răng (400k). \r\ntrám răng GIC R15 (G) + R27 ( nhai xa )(500k).",
      "bill": 900000,
      "_id": {
        "$oid": "655ddc5ebb78d7aad424e12b"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655ddfabbb78d7aad424e147"
  },
  "fullname": "ĐỖ THỊ THU HÀ",
  "birthyear": 1957,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-12T00:00:00.000Z"
      },
      "diagnoses": "abces quanh chóp R36",
      "cures": "mở tuỷ R36 để trống, bơm rửa ống tuỷ.\r\nđưa 1 tube Metrogyldenta về nhà bôi lên nướu viêm.",
      "bill": 0,
      "_id": {
        "$oid": "655ddfabbb78d7aad424e148"
      }
    },
    {
      "date": {
        "$date": "2023-10-11T17:00:00.000Z"
      },
      "diagnoses": "abces quanh chóp R36",
      "cures": "mở tuỷ R36, bơm rửa ống tuỷ, để trống. Tặng 1 tube Metrogyl denta.",
      "bill": 0,
      "_id": {
        "$oid": "65685b4642e66b9f8224f080"
      }
    },
    {
      "date": {
        "$date": "2023-10-15T17:00:00.000Z"
      },
      "diagnoses": "endo R36.",
      "cures": "bơm rửa ống tuỷ, SSOT R36, trám Eu, gửi chụp XQ R36.",
      "bill": 0,
      "_id": {
        "$oid": "65685ba542e66b9f8224f085"
      }
    },
    {
      "date": {
        "$date": "2023-11-29T17:00:00.000Z"
      },
      "diagnoses": "endo R36.",
      "cures": "SSOT bơm rửa ống tuỷ R36, điều trị thuốc.",
      "bill": 0,
      "_id": {
        "$oid": "65685bfc42e66b9f8224f08a"
      }
    },
    {
      "date": {
        "$date": "2023-11-22T17:00:00.000Z"
      },
      "diagnoses": "endo R36.",
      "cures": "SSOT bơm rửa ống tuỷ R36, quay Ca (OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "65685ccd42e66b9f8224f08f"
      }
    },
    {
      "date": {
        "$date": "2023-11-29T17:00:00.000Z"
      },
      "diagnoses": "endo R36.",
      "cures": "SSOT bơm rửa ống tuỷ R36.",
      "bill": 0,
      "_id": {
        "$oid": "65685d3442e66b9f8224f094"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "655de61fbb78d7aad424e15d"
  },
  "fullname": "PHAN THỊ THU THUỶ",
  "birthyear": 1987,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-27T00:00:00.000Z"
      },
      "diagnoses": "mất 1 răng HT",
      "cures": "lấy dấu HT, HD.\r\nso màu răng ( R Justi màu 62 ).",
      "bill": 0,
      "_id": {
        "$oid": "655de61fbb78d7aad424e15e"
      }
    },
    {
      "date": {
        "$date": "2023-11-01T00:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "giao hàm tháo lắp dẻo 1R ( R dư kẽ giữa HT ) ( R Justi màu 62 ).",
      "bill": 700000,
      "_id": {
        "$oid": "655de6acbb78d7aad424e163"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "655de703bb78d7aad424e166"
  },
  "fullname": "NGUYỄN TUẤN KHẢI",
  "birthyear": 2007,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-03T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng.",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 200000,
      "_id": {
        "$oid": "655de703bb78d7aad424e167"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655de75ebb78d7aad424e169"
  },
  "fullname": "LƯ DIỆU NAM",
  "birthyear": 1900,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-04T00:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng HT, HD.",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "655de75ebb78d7aad424e16a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "655f519d42e66b9f8224ef08"
  },
  "fullname": "DƯƠNG KIM THẠNH",
  "birthyear": 1970,
  "phone": "0907595719",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-22T17:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm nướu, mất răng.",
      "cures": "1. cạo vôi đánh bóng răng. (400k)\r\n2. trám răng GIC mặt nhai các R47,36,38. (900k)\r\n3. gửi chụp XQ R 23,24.",
      "bill": 1300000,
      "_id": {
        "$oid": "655f519d42e66b9f8224ef09"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65601e1942e66b9f8224ef3a"
  },
  "fullname": "DAO ĐẠO MINH",
  "birthyear": 1966,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-09-17T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn R45.",
      "cures": "trám răng GIC R45 (xa ).",
      "bill": 250000,
      "_id": {
        "$oid": "65601e1942e66b9f8224ef3b"
      }
    },
    {
      "date": {
        "$date": "2024-04-05T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "khám tư vấn, hẹn cạo vôi răng",
      "bill": 0,
      "_id": {
        "$oid": "66111faf42e66b9f8224f655"
      }
    },
    {
      "date": {
        "$date": "2024-04-08T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "6614c2e642e66b9f8224f680"
      }
    },
    {
      "date": {
        "$date": "2024-04-12T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R37 (G)",
      "cures": "trám răng R37 (G) GIC",
      "bill": 350000,
      "_id": {
        "$oid": "661a439942e66b9f8224f71c"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "65601e8242e66b9f8224ef3d"
  },
  "fullname": "DAO ĐÌNH HẢO",
  "birthyear": 1998,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-09-17T17:00:00.000Z"
      },
      "diagnoses": "khám răng định kỳ",
      "cures": "khám răng, HDVSRM tư vấn, gửi chụp XQ các R 16,17 + 26,27 +34,35.",
      "bill": 0,
      "_id": {
        "$oid": "65601e8242e66b9f8224ef3e"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65601ecf42e66b9f8224ef41"
  },
  "fullname": "DAO THỪA CHÍ",
  "birthyear": 2003,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-09-19T17:00:00.000Z"
      },
      "diagnoses": "khám định kỳ",
      "cures": "khám răng, tư vấn HDVSRM.",
      "bill": 0,
      "_id": {
        "$oid": "65601ecf42e66b9f8224ef42"
      }
    },
    {
      "date": {
        "$date": "2023-09-20T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng HT, HD.",
      "cures": "cạo vôi răng, đánh bóng răng 2 hàm.",
      "bill": 400000,
      "_id": {
        "$oid": "65601f1042e66b9f8224ef47"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65606fbd42e66b9f8224ef60"
  },
  "fullname": "TRẦN VĂN CHÍ",
  "birthyear": 1993,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-23T17:00:00.000Z"
      },
      "diagnoses": "khám răng",
      "cures": "khám tư vấn, gửi XQ R12 -> R42.\r\ntư vấn chi phí cho BN = 1,4 tr + CVR 200k.",
      "bill": 0,
      "_id": {
        "$oid": "65606fbd42e66b9f8224ef61"
      }
    },
    {
      "date": {
        "$date": "2023-11-26T17:00:00.000Z"
      },
      "diagnoses": "PHCĐ R sứ HT vùng răng cửa.",
      "cures": "gây tê endo chân răng 11,21. SSOT, bơm rửa ống tuỷ R11,21.",
      "bill": 0,
      "_id": {
        "$oid": "65644d7942e66b9f8224efee"
      }
    },
    {
      "date": {
        "$date": "2023-11-29T17:00:00.000Z"
      },
      "diagnoses": "endo R 11,21,22,23.",
      "cures": "gây tê mở tuỷ R22,23, bơm rửa, SSOT 4R 11,21,22,23.",
      "bill": 0,
      "_id": {
        "$oid": "656857b342e66b9f8224f07b"
      }
    },
    {
      "date": {
        "$date": "2023-12-04T17:00:00.000Z"
      },
      "diagnoses": "endo R 12,13.",
      "cures": "gây tê mở tuỷ SSOT, bơm rửa ống tuỷ R 12,13.",
      "bill": 0,
      "_id": {
        "$oid": "656f153342e66b9f8224f11c"
      }
    },
    {
      "date": {
        "$date": "2023-12-07T17:00:00.000Z"
      },
      "diagnoses": "endo R 13 -> R 23.",
      "cures": "SSOT bơm rửa ống tuỷ R13, 12, 11, 21, điều trị thuốc.",
      "bill": 0,
      "_id": {
        "$oid": "6573260c42e66b9f8224f158"
      }
    },
    {
      "date": {
        "$date": "2023-12-11T17:00:00.000Z"
      },
      "diagnoses": "endo R13 -> R23",
      "cures": "SSOT bơm rửa ống tuỷ R13 -> R23.",
      "bill": 0,
      "_id": {
        "$oid": "6578670d42e66b9f8224f258"
      }
    },
    {
      "date": {
        "$date": "2023-12-13T17:00:00.000Z"
      },
      "diagnoses": "endo 6R từ R13 -> R23",
      "cures": "SSOT bơm rửa ống tuỷ 6R (R13->R23).",
      "bill": 0,
      "_id": {
        "$oid": "657ad97b42e66b9f8224f292"
      }
    },
    {
      "date": {
        "$date": "2023-12-21T17:00:00.000Z"
      },
      "diagnoses": "endo 6 răng cửa HT.",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "6588e91f42e66b9f8224f3bc"
      }
    },
    {
      "date": {
        "$date": "2023-12-27T17:00:00.000Z"
      },
      "diagnoses": "PH sứ răng cửa HT",
      "cures": "SSOT bơm rửa ống tuỷ R13, quay Ca(OH)2.\r\ngắn 3 cùi giả R12, 11,21.",
      "bill": 0,
      "_id": {
        "$oid": "658e0e0f42e66b9f8224f410"
      }
    },
    {
      "date": {
        "$date": "2024-01-01T17:00:00.000Z"
      },
      "diagnoses": "endo R cửa HT",
      "cures": "trám bít ống tuỷ R13,23,22.",
      "bill": 0,
      "_id": {
        "$oid": "65943e3d42e66b9f8224f45d"
      }
    }
  ],
  "__v": 9
},
{
  "_id": {
    "$oid": "6563e59d42e66b9f8224efb9"
  },
  "fullname": "LÝ TÔ HÀ",
  "birthyear": 1952,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-24T17:00:00.000Z"
      },
      "diagnoses": "R16 viêm nha chu, R16 lung lay độ 3, tụt nướu nhiều.",
      "cures": "khám răng, HDVSRM",
      "bill": 0,
      "_id": {
        "$oid": "6563e59d42e66b9f8224efba"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6564077e42e66b9f8224efc1"
  },
  "fullname": "HỨA MUỘI",
  "birthyear": 1949,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-06-18T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD.",
      "cures": "làm PHTL HD dẻo 3R Mỹ Justi.",
      "bill": 0,
      "_id": {
        "$oid": "6564077e42e66b9f8224efc2"
      }
    },
    {
      "date": {
        "$date": "2023-06-21T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD 3R dẻo.",
      "cures": "thử hàm sáp 3R Justi màu 81 ( cọc 1 triệu ).",
      "bill": 0,
      "_id": {
        "$oid": "6564088c42e66b9f8224efc7"
      }
    },
    {
      "date": {
        "$date": "2023-06-26T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD dẻo 3R.",
      "cures": "giao hàm dưới dẻo 3R Justi màu 81.",
      "bill": 2750000,
      "_id": {
        "$oid": "6564097e42e66b9f8224efcc"
      }
    },
    {
      "date": {
        "$date": "2023-06-29T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD dẻo 3R",
      "cures": "chỉnh đau hàm dưới dẻo.",
      "bill": 0,
      "_id": {
        "$oid": "65640b5942e66b9f8224efde"
      }
    },
    {
      "date": {
        "$date": "2023-07-02T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD gây đau.",
      "cures": "khám tư vấn, tặng 1 tube Kamistad.",
      "bill": 0,
      "_id": {
        "$oid": "65644e1242e66b9f8224eff3"
      }
    },
    {
      "date": {
        "$date": "2023-07-12T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD gây đau.",
      "cures": "chỉnh đau PHTL HD dẻo 3R.",
      "bill": 0,
      "_id": {
        "$oid": "65644e6142e66b9f8224eff8"
      }
    },
    {
      "date": {
        "$date": "2023-07-30T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD dẻo gây đau.",
      "cures": "chỉnh đau PHTL HD dẻo 3R Justi.",
      "bill": 0,
      "_id": {
        "$oid": "65644ec042e66b9f8224effd"
      }
    },
    {
      "date": {
        "$date": "2023-11-24T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD ( hàm giả dẻo HD 3R vừa làm xong bj mất ).",
      "cures": "lấy dấu HD",
      "bill": 0,
      "_id": {
        "$oid": "6565c3fa42e66b9f8224f02e"
      }
    },
    {
      "date": {
        "$date": "2023-11-27T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD.",
      "cures": "thử hàm sáp HD 3R Mỹ ( Justi ). Chi phí tổng công là 1,7 tr.",
      "bill": 0,
      "_id": {
        "$oid": "6565c47142e66b9f8224f033"
      }
    }
  ],
  "__v": 8
},
{
  "_id": {
    "$oid": "65640a5b42e66b9f8224efce"
  },
  "fullname": "LÝ VĨ LƯƠNG",
  "birthyear": 1966,
  "phone": "0703399063",
  "treatments": [
    {
      "date": {
        "$date": "2023-06-18T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "lấy dấu HT, HD sơ khởi, giá 1,5 triệu, 10R VN.",
      "bill": 0,
      "_id": {
        "$oid": "65640a5b42e66b9f8224efcf"
      }
    },
    {
      "date": {
        "$date": "2023-06-21T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT 10R VN.",
      "cures": "lấy dấu sau cùng HT, cắn sáp HT, so màu răng A3.5, cọc 500k.",
      "bill": 0,
      "_id": {
        "$oid": "65640ac042e66b9f8224efd4"
      }
    },
    {
      "date": {
        "$date": "2023-06-26T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT 10 RVN",
      "cures": "thử phục hình sáp 10R VN màu A3.5",
      "bill": 1500000,
      "_id": {
        "$oid": "65640b2042e66b9f8224efd9"
      }
    },
    {
      "date": {
        "$date": "2023-06-29T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT 10R VN.",
      "cures": "giao hàm PHTLHT 10R VN.",
      "bill": 0,
      "_id": {
        "$oid": "65640b9442e66b9f8224efe3"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "65640c6742e66b9f8224efe6"
  },
  "fullname": "DƯƠNG THỤC MY",
  "birthyear": 1989,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-06-23T17:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm nướu.",
      "cures": "1. trám răng R16,26 (GIC)(400K).\r\n2. CVR + ĐBR (400K).",
      "bill": 800000,
      "_id": {
        "$oid": "65640c6742e66b9f8224efe7"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "656714e042e66b9f8224f05d"
  },
  "fullname": "LÊ HOÀNG MAI ( bé Maika )",
  "birthyear": 2012,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-28T17:00:00.000Z"
      },
      "diagnoses": "sâu ngà sâu R46",
      "cures": "trám tạm Eu R46",
      "bill": 0,
      "_id": {
        "$oid": "656714e042e66b9f8224f05e"
      }
    },
    {
      "date": {
        "$date": "2023-12-26T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 46 ( sâu ngà sâu )",
      "cures": "thay mới miếng trám eugenate R46.",
      "bill": 0,
      "_id": {
        "$oid": "658c028142e66b9f8224f3d8"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65685e1d42e66b9f8224f096"
  },
  "fullname": "LỤC HUÊ",
  "birthyear": 1953,
  "phone": "0937459633",
  "treatments": [
    {
      "date": {
        "$date": "2023-11-05T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ cạnh cắn R21.",
      "cures": "trám R21 (XT) trám đèn halogen LC màu A2.",
      "bill": 250000,
      "_id": {
        "$oid": "65685e1d42e66b9f8224f097"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "656957e742e66b9f8224f09c"
  },
  "fullname": "TRẦN QUANG DIỆM",
  "birthyear": 1989,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-08-25T17:00:00.000Z"
      },
      "diagnoses": "R24 sâu răng vỡ lớn, còn lại chân răng. R11 đổi màu răng.\r\nTăng HA =142/92 -> 150/85.",
      "cures": "khám tư vấn, gửi chụp XQ.",
      "bill": 0,
      "_id": {
        "$oid": "656957e742e66b9f8224f09d"
      }
    },
    {
      "date": {
        "$date": "2023-09-15T17:00:00.000Z"
      },
      "diagnoses": "R24 sâu răng vỡ lớn",
      "cures": "nhổ chân răng 24. HA=134/83, M=67.",
      "bill": 300000,
      "_id": {
        "$oid": "6569599042e66b9f8224f0a7"
      }
    },
    {
      "date": {
        "$date": "2023-10-13T17:00:00.000Z"
      },
      "diagnoses": "R11 chấn thương đã rất lâu, đổi màu nhiều, phim XQ thể hiện phản ứng tụ cốt quanh chóp quanh chóp R11.",
      "cures": "khám tư vấn, bệnh nhân hoãn lại việc nội nha R11.",
      "bill": 0,
      "_id": {
        "$oid": "65695a8942e66b9f8224f0ac"
      }
    },
    {
      "date": {
        "$date": "2023-11-30T17:00:00.000Z"
      },
      "diagnoses": "mất răng R21, 24.",
      "cures": "khám răng, tư vấn, hẹn lại làm PHTL dẻo 2R.",
      "bill": 0,
      "_id": {
        "$oid": "65695af042e66b9f8224f0b1"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "65695bd642e66b9f8224f0b4"
  },
  "fullname": "LÂM THUÝ MI",
  "birthyear": 1966,
  "phone": "0785327775",
  "treatments": [
    {
      "date": {
        "$date": "2023-08-10T17:00:00.000Z"
      },
      "diagnoses": "R47 viêm tuỷ mãn tính.",
      "cures": "khám, gửi XQ R47.",
      "bill": 0,
      "_id": {
        "$oid": "65695bd642e66b9f8224f0b5"
      }
    },
    {
      "date": {
        "$date": "2023-08-13T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R47.",
      "cures": "gây tê, mở tuỷ buồng R47, đặt As, trám Eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "65695caf42e66b9f8224f0be"
      }
    },
    {
      "date": {
        "$date": "2023-08-15T17:00:00.000Z"
      },
      "diagnoses": "endo R47.",
      "cures": "mở tuỷ R47, bơm rửa ống tuỷ, đặt lại chút xíu As.",
      "bill": 0,
      "_id": {
        "$oid": "65695d7942e66b9f8224f0c5"
      }
    },
    {
      "date": {
        "$date": "2023-08-17T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "bơm rửa ống tuỷ R47, đặt lịa xíu As, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "65695ddd42e66b9f8224f0ca"
      }
    },
    {
      "date": {
        "$date": "2023-08-20T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT, bơm rửa ống tuỷ R47, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "65695e4042e66b9f8224f0cf"
      }
    },
    {
      "date": {
        "$date": "2023-08-27T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT, bơm rửa ống tuỷ R47, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "65695eac42e66b9f8224f0d4"
      }
    },
    {
      "date": {
        "$date": "2023-09-06T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT bơm rửa ống tuỷ R47",
      "bill": 0,
      "_id": {
        "$oid": "65695f0542e66b9f8224f0d9"
      }
    },
    {
      "date": {
        "$date": "2023-09-13T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "trám bít ống tuỷ R47",
      "bill": 0,
      "_id": {
        "$oid": "65695f5d42e66b9f8224f0de"
      }
    },
    {
      "date": {
        "$date": "2023-09-25T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "trám kết thúc R47 GIC.",
      "bill": 800000,
      "_id": {
        "$oid": "65695fcd42e66b9f8224f0e3"
      }
    }
  ],
  "__v": 8
},
{
  "_id": {
    "$oid": "656960c042e66b9f8224f0e5"
  },
  "fullname": "NGUYỄN THỊ XUÂN VI",
  "birthyear": 1995,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-08-07T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng.",
      "cures": "CVR + ĐBR, tư vấn nướu thâm nhiễm đen vùng nướu R24->27.",
      "bill": 400000,
      "_id": {
        "$oid": "656960c042e66b9f8224f0e6"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6569618942e66b9f8224f0e9"
  },
  "fullname": "LÊ THỊ GIA BẢO",
  "birthyear": 2009,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-07-31T17:00:00.000Z"
      },
      "diagnoses": "R46 sâu răng vỡ lớn.",
      "cures": "khám tư vấn, gửi XQ R46.",
      "bill": 0,
      "_id": {
        "$oid": "6569618942e66b9f8224f0ea"
      }
    },
    {
      "date": {
        "$date": "2023-08-06T17:00:00.000Z"
      },
      "diagnoses": "endo R46. R46 nhiễm trùng quanh chóp.",
      "cures": "mở tuỷ SSOT, bơm rửa, để trống R46.",
      "bill": 0,
      "_id": {
        "$oid": "6569623e42e66b9f8224f0ef"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "656964e242e66b9f8224f0f2"
  },
  "fullname": "NGUYỄN THỊ TUYẾT VUI",
  "birthyear": 1954,
  "phone": "0938230453",
  "treatments": [
    {
      "date": {
        "$date": "2023-07-26T17:00:00.000Z"
      },
      "diagnoses": "vài răng sâu răng vỡ lớn, còn lại chân răng.",
      "cures": "khám tư vấn, hẹn nhổ răng.",
      "bill": 0,
      "_id": {
        "$oid": "656964e242e66b9f8224f0f3"
      }
    },
    {
      "date": {
        "$date": "2023-07-31T17:00:00.000Z"
      },
      "diagnoses": "R11 sâu răng vỡ lớn.",
      "cures": "nhổ răng R11 (HA=123/70) (M=82).",
      "bill": 300000,
      "_id": {
        "$oid": "6569656b42e66b9f8224f0f8"
      }
    },
    {
      "date": {
        "$date": "2023-08-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn R15, 25.",
      "cures": "nhổ chân răng 15, 25. HA=110/72, M=75.",
      "bill": 300000,
      "_id": {
        "$oid": "6569668c42e66b9f8224f0fd"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "6570645242e66b9f8224f132"
  },
  "fullname": "MẠC ANH",
  "birthyear": 1953,
  "phone": "0704591019",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-05T17:00:00.000Z"
      },
      "diagnoses": "theo dõi viêm tuỷ mãn R 45, chẩn đoán phân biệt đau dây thần kinh số 5.",
      "cures": "gây tê mở tuỷ SSOT R45, bơm rửa ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "6570645242e66b9f8224f133"
      }
    },
    {
      "date": {
        "$date": "2023-12-12T17:00:00.000Z"
      },
      "diagnoses": "endo R45",
      "cures": "SSOT bơm rửa ống tuỷ R 45.",
      "bill": 0,
      "_id": {
        "$oid": "657992a242e66b9f8224f274"
      }
    },
    {
      "date": {
        "$date": "2023-12-19T17:00:00.000Z"
      },
      "diagnoses": "endo R45",
      "cures": "SSOT bơm rửa ống tuỷ R45.",
      "bill": 0,
      "_id": {
        "$oid": "6583297342e66b9f8224f33d"
      }
    },
    {
      "date": {
        "$date": "2023-12-26T17:00:00.000Z"
      },
      "diagnoses": "endo R45",
      "cures": "SSOT bơm rửa ống tuỷ R45, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "658c2aa342e66b9f8224f3ec"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "6571912b42e66b9f8224f13a"
  },
  "fullname": "BÔ HUỆ PHƯƠNG",
  "birthyear": 1956,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-06T17:00:00.000Z"
      },
      "diagnoses": "mất răng bán phần hàm trên, mất răng toàn bộ hàm dưới từ rất lâu, tiêu xương hàm dưới rất nhiều.",
      "cures": "lấy dấu sơ khởi hàm trên, hàm dưới.",
      "bill": 0,
      "_id": {
        "$oid": "6571912b42e66b9f8224f13b"
      }
    },
    {
      "date": {
        "$date": "2023-12-08T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD R Mỹ Justi",
      "cures": "lấy dấu sau cùng HT, cắn sáp HT, HD, chọn màu R Justi 59.",
      "bill": 0,
      "_id": {
        "$oid": "65741d6442e66b9f8224f167"
      }
    },
    {
      "date": {
        "$date": "2023-12-13T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD.",
      "cures": "thử răng sáp HT, HD, màu  răng Justi 59.",
      "bill": 0,
      "_id": {
        "$oid": "657ab1cb42e66b9f8224f28d"
      }
    },
    {
      "date": {
        "$date": "2023-12-15T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD RMyx Justi màu 59.",
      "cures": "thử hàm sáp HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "657d50b542e66b9f8224f2f1"
      }
    },
    {
      "date": {
        "$date": "2023-12-20T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD R Mỹ Justi màu 59.",
      "cures": "gắn PHTL HT 9R, thử hàm sáp toàn hàm HD.",
      "bill": 0,
      "_id": {
        "$oid": "6583fcf642e66b9f8224f378"
      }
    },
    {
      "date": {
        "$date": "2023-12-25T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD",
      "cures": "giao hàm trên, hàm dưới. R Justi màu 59. HT 9R, HD 14R.\r\nHD ép nhựa 2 lớp.",
      "bill": 7700000,
      "_id": {
        "$oid": "658ab20242e66b9f8224f3ce"
      }
    },
    {
      "date": {
        "$date": "2023-12-29T17:00:00.000Z"
      },
      "diagnoses": "PHTLTH HD gây đau",
      "cures": "chỉnh đau hàm dưới.",
      "bill": 0,
      "_id": {
        "$oid": "659289f942e66b9f8224f42f"
      }
    }
  ],
  "__v": 6
},
{
  "_id": {
    "$oid": "657192a442e66b9f8224f13d"
  },
  "fullname": "VƯƠNG CHẤN NAM",
  "birthyear": 1971,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-16T17:00:00.000Z"
      },
      "diagnoses": "viêm nha chu R41,42, răng lung lay độ 4.",
      "cures": "nhổ răng R41,42. HA=117/76.",
      "bill": 400000,
      "_id": {
        "$oid": "657192a442e66b9f8224f13e"
      }
    },
    {
      "date": {
        "$date": "2023-03-15T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng  hàm dưới.",
      "cures": "cạo vôi răng hàm dưới.",
      "bill": 200000,
      "_id": {
        "$oid": "657194f042e66b9f8224f14b"
      }
    },
    {
      "date": {
        "$date": "2024-03-30T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "lấy dấu HT, HD",
      "bill": 0,
      "_id": {
        "$oid": "6611197f42e66b9f8224f634"
      }
    },
    {
      "date": {
        "$date": "2023-03-31T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "cắn sáp HD, so màu răng R Justi 66.",
      "bill": 0,
      "_id": {
        "$oid": "661119e542e66b9f8224f639"
      }
    },
    {
      "date": {
        "$date": "2023-04-10T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "thử hàm sáp HD, gửi ép dẻo PHHD 9R Justi.",
      "bill": 0,
      "_id": {
        "$oid": "66111a9642e66b9f8224f63e"
      }
    },
    {
      "date": {
        "$date": "2023-04-13T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "giao PHTLHD dẻo , R Justi",
      "bill": 3750000,
      "_id": {
        "$oid": "66179cda42e66b9f8224f6bc"
      }
    },
    {
      "date": {
        "$date": "2023-04-23T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD ép lại",
      "cures": "do mài hàm dẻo HD nhiều dẫn đến đeo hàm lỏng, không khít nên ép lại 1 hàm dẻo khác cho bệnh nhân (9R).\r\nR Justi màu 66.",
      "bill": 0,
      "_id": {
        "$oid": "66179e0142e66b9f8224f6c6"
      }
    },
    {
      "date": {
        "$date": "2024-04-24T17:00:00.000Z"
      },
      "diagnoses": "hàm dẻo HD gây đau",
      "cures": "chỉnh đau PHTLHD dẻo",
      "bill": 0,
      "_id": {
        "$oid": "66179e4a42e66b9f8224f6cb"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "6571931b42e66b9f8224f140"
  },
  "fullname": "NGUYỄN THỊ TƯỜNG VÂN",
  "birthyear": 1962,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-16T17:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm nướu.",
      "cures": "trám răng GIC R 28 (XN), 47 (nhai)",
      "bill": 400000,
      "_id": {
        "$oid": "6571931b42e66b9f8224f141"
      }
    },
    {
      "date": {
        "$date": "2023-02-19T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "6571936a42e66b9f8224f146"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6571954442e66b9f8224f14d"
  },
  "fullname": "TĂNG QUỐC BÌNH",
  "birthyear": 1987,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-16T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng HT, HD.",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 300000,
      "_id": {
        "$oid": "6571954442e66b9f8224f14e"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6573ec7742e66b9f8224f15c"
  },
  "fullname": "HÀ GIA TÀI",
  "birthyear": 1963,
  "phone": "0909791208",
  "treatments": [
    {
      "date": {
        "$date": "2023-09-12T17:00:00.000Z"
      },
      "diagnoses": "R13 sâu răng vỡ lớn",
      "cures": "gửi XQ chân răng R13",
      "bill": 0,
      "_id": {
        "$oid": "6576bac542e66b9f8224f188"
      }
    },
    {
      "date": {
        "$date": "2023-09-14T17:00:00.000Z"
      },
      "diagnoses": "phục hình sứ R13",
      "cures": "phim XQ thể hiện R13 đã nội nha, khoan ống mang chốt chân răng R13, lấy dấu HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "6576bb7442e66b9f8224f192"
      }
    },
    {
      "date": {
        "$date": "2023-09-18T17:00:00.000Z"
      },
      "diagnoses": "phục hình sứ R13",
      "cures": "gắn cùi giả R13, mài cùi răng, lấy dấu HT, cắn sáp, so màu răng A3.",
      "bill": 0,
      "_id": {
        "$oid": "6576c84542e66b9f8224f199"
      }
    },
    {
      "date": {
        "$date": "2023-09-21T17:00:00.000Z"
      },
      "diagnoses": "phục hình sứ R13",
      "cures": "gắn mão sứ R13, màu A3.",
      "bill": 1100000,
      "_id": {
        "$oid": "6576c8b442e66b9f8224f1a3"
      }
    },
    {
      "date": {
        "$date": "2023-10-23T17:00:00.000Z"
      },
      "diagnoses": "răng cửa HT ê buốt",
      "cures": "khám tư vấn",
      "bill": 0,
      "_id": {
        "$oid": "6576c9b442e66b9f8224f1ac"
      }
    },
    {
      "date": {
        "$date": "2023-12-08T17:00:00.000Z"
      },
      "diagnoses": "R12 sâu răng vỡ lớn, còn chân răng.",
      "cures": "gửi XQ chân răng R12.",
      "bill": 0,
      "_id": {
        "$oid": "6576ca0c42e66b9f8224f1b1"
      }
    },
    {
      "date": {
        "$date": "2023-12-11T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "gây tê lấy tuỷ chân răng 12, SSOT bơm rửa ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "6578069f42e66b9f8224f1e4"
      }
    },
    {
      "date": {
        "$date": "2023-12-14T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "SSOT bơm rửa ống tuỷ R12.",
      "bill": 0,
      "_id": {
        "$oid": "657bda3142e66b9f8224f2a3"
      }
    },
    {
      "date": {
        "$date": "2023-12-22T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng R12",
      "cures": "SSOT bơm rửa ống tuỷ R12",
      "bill": 0,
      "_id": {
        "$oid": "6586bb8b42e66b9f8224f3a7"
      }
    },
    {
      "date": {
        "$date": "2023-12-26T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "SSOT bơm rửa ống tuỷ R12, trám bít ống tuỷ cortisomol.",
      "bill": 0,
      "_id": {
        "$oid": "658be9f442e66b9f8224f3d3"
      }
    },
    {
      "date": {
        "$date": "2024-01-07T17:00:00.000Z"
      },
      "diagnoses": "R sứ 12",
      "cures": "gắn cùi giả R12, mài cùi răng R12, lấy dấu HT làm mão sứ R12.\r\nBệnh nhân đã trả đủ tiền răng sứ 12 (có giảm giá nhiều, giảm tiền răng sứ, ko tính tiền lấy tuỷ + cùi giả )",
      "bill": 800000,
      "_id": {
        "$oid": "659b889a42e66b9f8224f476"
      }
    }
  ],
  "__v": 12
},
{
  "_id": {
    "$oid": "65741e1142e66b9f8224f169"
  },
  "fullname": "HỒ THỊ THANH THUỶ",
  "birthyear": 1961,
  "phone": "0365330540",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-08T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "trám răng LC A2 R 13 (GT), R21 (X), R22 (G).",
      "bill": 700000,
      "_id": {
        "$oid": "65741e1142e66b9f8224f16a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65741eba42e66b9f8224f16c"
  },
  "fullname": "VÕ VĂN THÀNH",
  "birthyear": 1955,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-08T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng, răng cối lớn mòn mặt nhai nhiều.",
      "cures": "cạo vôi răng, không có đánh bóng răng. BN lớn tuổi dễ bị sặc nước.",
      "bill": 300000,
      "_id": {
        "$oid": "65741eba42e66b9f8224f16d"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6574206442e66b9f8224f179"
  },
  "fullname": "CHÂU QUẾ HỒNG",
  "birthyear": 1966,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-08T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R37",
      "cures": "trám răng R37 (NX) GIC",
      "bill": 250000,
      "_id": {
        "$oid": "6574206442e66b9f8224f17a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6576c94d42e66b9f8224f1a6"
  },
  "fullname": "LÝ TRƯỜNG LONG",
  "birthyear": 1981,
  "phone": "0933696367",
  "treatments": [
    {
      "date": {
        "$date": "2023-09-29T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 300000,
      "_id": {
        "$oid": "6576c94d42e66b9f8224f1a7"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6576caf442e66b9f8224f1b6"
  },
  "fullname": "TRẦN THỊ KHÁNH VÂN",
  "birthyear": 1977,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-08T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng R16, 26.",
      "cures": "1.cạo vôi răng + đánh bóng răng.\r\n2. trám răng GIC mặt nhai R26, nhai gần R16 ( miếng trám lớn bằng 1/2 răng 16 ).",
      "bill": 600000,
      "_id": {
        "$oid": "6576caf442e66b9f8224f1b7"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6576cc5542e66b9f8224f1be"
  },
  "fullname": "NGUYỄN PHÚ HIẾU",
  "birthyear": 1973,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-10T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "lấy dấu HT, HD, so màu răng Mỹ Justi màu 69.",
      "bill": 0,
      "_id": {
        "$oid": "6576cc5542e66b9f8224f1bf"
      }
    },
    {
      "date": {
        "$date": "2023-12-14T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD dẻo",
      "cures": "thử hàm sáp HD 6R R Justi màu 69, chi phí 3,5 tr + phí thay 1R giả R26.",
      "bill": 0,
      "_id": {
        "$oid": "657bd88342e66b9f8224f299"
      }
    },
    {
      "date": {
        "$date": "2023-12-20T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD dẻo màu 69.",
      "cures": "giao PHTL HD dẻo 6R Mỹ Justi màu 69, thay răng R26 cũ bằng R Justi mới. \r\nChi phí 3,5tr + 200k.",
      "bill": 3700000,
      "_id": {
        "$oid": "6583fb9842e66b9f8224f369"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "6576d03342e66b9f8224f1c6"
  },
  "fullname": "TRƯƠNG NGUYỆT ÁNH",
  "birthyear": 1979,
  "phone": "0936034518",
  "treatments": [
    {
      "date": {
        "$date": "2023-07-23T17:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm tuỷ mãn tính R14.",
      "cures": "1. trám răng GIC R16 (200k).\r\n2. trám tạm R15 Eu (G).\r\n3. dặt As R14\r\n4. gửi XQ R14,24.\r\n5. chuyển BV nhổ răng 17,18 sâu răng, vỡ lớn.",
      "bill": 0,
      "_id": {
        "$oid": "6576d03342e66b9f8224f1c7"
      }
    },
    {
      "date": {
        "$date": "2023-07-27T17:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "mở tuỷ R14, SSOT bơm rửa ống tuỷ (2 ống tuỷ), ống tuỷ ngoài đã chết tuỷ, ống tuỷ trong còn đang viêm tuỷ gây đau nên phải gây tê.",
      "bill": 0,
      "_id": {
        "$oid": "6576d0ef42e66b9f8224f1cc"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6576d2c142e66b9f8224f1cf"
  },
  "fullname": "HÀ THỊ KHƯƠNG",
  "birthyear": 1981,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-07-16T17:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm nướu.",
      "cures": "1. trám răng R36 (xa) GIC.\r\n2. cạo vôi răng + đánh bóng răng.",
      "bill": 600000,
      "_id": {
        "$oid": "6576d2c142e66b9f8224f1d0"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6576d6d042e66b9f8224f1d3"
  },
  "fullname": "NGUYỄN THỊ LAN (con dâu cô AnNThiêu )",
  "birthyear": 1975,
  "phone": "0392313200",
  "treatments": [
    {
      "date": {
        "$date": "2023-07-14T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R26 (G)",
      "cures": "trám tạm R 26 (G) Eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6576d6d042e66b9f8224f1d4"
      }
    },
    {
      "date": {
        "$date": "2023-11-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R26",
      "cures": "trám răng R26 (G) GIC",
      "bill": 200000,
      "_id": {
        "$oid": "6576d78742e66b9f8224f1d9"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6576d8db42e66b9f8224f1de"
  },
  "fullname": "AN THUẬN THIÊU",
  "birthyear": 1938,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-07-06T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "lấy dấu HT, HD làm phục hình dẻo HT 2R Mỹ Justi màu 69, đặt cọc 500k.",
      "bill": 0,
      "_id": {
        "$oid": "6576d8db42e66b9f8224f1df"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6578083042e66b9f8224f1eb"
  },
  "fullname": "NGUYỄN ĐÌNH TRUNG",
  "birthyear": 1952,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-30T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R35, 27.",
      "cures": "1.gây tê, mở tuỷ, đặt As R27.\r\n2. gây tê mở tuỷ để trống R35.",
      "bill": 0,
      "_id": {
        "$oid": "6578083042e66b9f8224f1ec"
      }
    },
    {
      "date": {
        "$date": "2023-03-31T17:00:00.000Z"
      },
      "diagnoses": "endo R 27,35.",
      "cures": "mở tuỷ R27, bơm rửa ống tuỷ 2R 27, 35, điều trị thuốc R35.",
      "bill": 0,
      "_id": {
        "$oid": "657d76d342e66b9f8224f2f6"
      }
    },
    {
      "date": {
        "$date": "2023-04-03T17:00:00.000Z"
      },
      "diagnoses": "endo R35, 27.",
      "cures": "SSOT, bơm rửa ống tuỷ 2R 35, 27.",
      "bill": 0,
      "_id": {
        "$oid": "657d772d42e66b9f8224f2fb"
      }
    },
    {
      "date": {
        "$date": "2023-04-07T17:00:00.000Z"
      },
      "diagnoses": "endo 2R 27,35.",
      "cures": "SSOT, bơm rửa ống tuỷ 2R 27,35, quay Ca (OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "657d777942e66b9f8224f300"
      }
    },
    {
      "date": {
        "$date": "2023-04-13T17:00:00.000Z"
      },
      "diagnoses": "endo R 27, 35",
      "cures": "trám bít ống tuỷ R27, 35.",
      "bill": 0,
      "_id": {
        "$oid": "6611178642e66b9f8224f628"
      }
    },
    {
      "date": {
        "$date": "2023-04-19T17:00:00.000Z"
      },
      "diagnoses": "endo R27, 35",
      "cures": "trám kết thúc R 27, 35 (GIC)",
      "bill": 1600000,
      "_id": {
        "$oid": "661117f842e66b9f8224f62d"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "65780a8c42e66b9f8224f1f0"
  },
  "fullname": "NGUYỄN THỊ THAY (3/2023)",
  "birthyear": 1954,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-14T17:00:00.000Z"
      },
      "diagnoses": "R32, 43 gãy thân răng, còn chân răng.",
      "cures": "lấy dấu hàm dưới (có kèm PHHD) để thêm 1 răng giả vô hàm giả.",
      "bill": 0,
      "_id": {
        "$oid": "65780a8c42e66b9f8224f1f1"
      }
    },
    {
      "date": {
        "$date": "2023-03-15T17:00:00.000Z"
      },
      "diagnoses": "thêm răng vào hàm giả HD, endo R43.",
      "cures": "1. giao lại hàm giả dẻo HD thêm R32 (200k).\r\n2. gây tê endo R43, SSOT bơm rửa ống tuỷ.",
      "bill": 200000,
      "_id": {
        "$oid": "65780c7e42e66b9f8224f1fd"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65780b1f42e66b9f8224f1f4"
  },
  "fullname": "LÊ ĐÌNH VƯƠNG",
  "birthyear": 1987,
  "phone": "0934814449",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-19T17:00:00.000Z"
      },
      "diagnoses": "endo R 46",
      "cures": "gửi XQ R46, đặt As R46.",
      "bill": 0,
      "_id": {
        "$oid": "65780b1f42e66b9f8224f1f5"
      }
    },
    {
      "date": {
        "$date": "2023-02-23T17:00:00.000Z"
      },
      "diagnoses": "endo R46",
      "cures": "mở tuỷ buồng R46, đặt lại As R46.",
      "bill": 0,
      "_id": {
        "$oid": "657811e942e66b9f8224f234"
      }
    },
    {
      "date": {
        "$date": "2023-03-06T17:00:00.000Z"
      },
      "diagnoses": "endo R46",
      "cures": "mở tuỷ, SSOT bơm rửa ống tuỷ R46.",
      "bill": 0,
      "_id": {
        "$oid": "6578123142e66b9f8224f239"
      }
    },
    {
      "date": {
        "$date": "2023-03-13T17:00:00.000Z"
      },
      "diagnoses": "endo R46",
      "cures": "bơm rửa ống tuỷ R46, đặt chút xíu As cho ống tuỷ xa.",
      "bill": 0,
      "_id": {
        "$oid": "657813a242e66b9f8224f245"
      }
    },
    {
      "date": {
        "$date": "2023-03-16T17:00:00.000Z"
      },
      "diagnoses": "endo R46",
      "cures": "SSOT, bơm rửa ống tuỷ R46",
      "bill": 0,
      "_id": {
        "$oid": "657813ec42e66b9f8224f24a"
      }
    },
    {
      "date": {
        "$date": "2023-03-23T17:00:00.000Z"
      },
      "diagnoses": "endo R46",
      "cures": "SSOT bơm rửa ống tuỷ R 46, quay Ca (OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "661115b442e66b9f8224f619"
      }
    },
    {
      "date": {
        "$date": "2023-03-30T17:00:00.000Z"
      },
      "diagnoses": "endo R46",
      "cures": "trám bít ống tuỷ R 46.\r\ntrám răng R27 (GIC)\r\n900K + 300K = 1200K.",
      "bill": 1200000,
      "_id": {
        "$oid": "6611166e42e66b9f8224f61e"
      }
    },
    {
      "date": {
        "$date": "2023-04-04T17:00:00.000Z"
      },
      "diagnoses": "endo R46",
      "cures": "trám kết thúc R46 GIC",
      "bill": 0,
      "_id": {
        "$oid": "661116cb42e66b9f8224f623"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "65780bc242e66b9f8224f1f7"
  },
  "fullname": "LƯ MÊ LI",
  "birthyear": 1988,
  "phone": "0917767617",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-13T17:00:00.000Z"
      },
      "diagnoses": "chân răng 12 bị tét, trước đây là răng chốt veneer nhựa R21.",
      "cures": "nhổ chân răng R21, lấy dấu HT.",
      "bill": 200000,
      "_id": {
        "$oid": "65780bc242e66b9f8224f1f8"
      }
    },
    {
      "date": {
        "$date": "2023-02-15T17:00:00.000Z"
      },
      "diagnoses": "hàm giả tạm",
      "cures": "giao hàm giả HT 1R (R21) A2 VN.",
      "bill": 400000,
      "_id": {
        "$oid": "65780e7742e66b9f8224f20b"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65780cee42e66b9f8224f1ff"
  },
  "fullname": "HUỲNH PHÚC HUY",
  "birthyear": 2003,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-10T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "65780cee42e66b9f8224f200"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65780dd442e66b9f8224f203"
  },
  "fullname": "HUỲNH KIM MAI",
  "birthyear": 1949,
  "phone": "0397080375",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-08T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn, viêm nướu.",
      "cures": "khám tư vấn, điều trị thuốc R cửa, hẹn nhổ chân răng cửa. HA=115/77.",
      "bill": 0,
      "_id": {
        "$oid": "65780dd442e66b9f8224f204"
      }
    },
    {
      "date": {
        "$date": "2023-03-12T17:00:00.000Z"
      },
      "diagnoses": "R11 sâu răng vỡ lớn",
      "cures": "nhổ chân răng R11. HA=121/71, M=76.",
      "bill": 200000,
      "_id": {
        "$oid": "657812d242e66b9f8224f23e"
      }
    },
    {
      "date": {
        "$date": "2023-03-19T17:00:00.000Z"
      },
      "diagnoses": "R 13 sâu răng vỡ lớn.",
      "cures": "nhổ chân răng R13 ( có u hạt quanh chóp )\r\nHA=116/68, M=75.",
      "bill": 200000,
      "_id": {
        "$oid": "6578153642e66b9f8224f24f"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "65780f0742e66b9f8224f20d"
  },
  "fullname": "TRẦN PHI (2/2023)",
  "birthyear": 1900,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-12T17:00:00.000Z"
      },
      "diagnoses": "R sứ R33",
      "cures": "gây tê mài cùi R33, lấy dấu HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "65780f0742e66b9f8224f20e"
      }
    },
    {
      "date": {
        "$date": "2023-02-15T17:00:00.000Z"
      },
      "diagnoses": "mão sứ R33",
      "cures": "gắn mão sứ R33 màu A3.",
      "bill": 800000,
      "_id": {
        "$oid": "65780fb342e66b9f8224f217"
      }
    },
    {
      "date": {
        "$date": "2023-02-16T17:00:00.000Z"
      },
      "diagnoses": "hàm giả HD gây đau.",
      "cures": "chỉnh khớp cắn hàm giả dẻo HD cũ.",
      "bill": 0,
      "_id": {
        "$oid": "6578108f42e66b9f8224f220"
      }
    },
    {
      "date": {
        "$date": "2023-02-20T17:00:00.000Z"
      },
      "diagnoses": "hàm giả HD gây đau",
      "cures": "chỉnh đau hàm giả dẻo HD",
      "bill": 0,
      "_id": {
        "$oid": "657810cd42e66b9f8224f225"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "6578174042e66b9f8224f251"
  },
  "fullname": "PHẠM THỊ KIM NGÂN",
  "birthyear": 1999,
  "phone": "0987972178",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-09T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "trám răng GIC mặt nhai R36,37, R24 phía xa GIC. Đặt As R45.",
      "bill": 600000,
      "_id": {
        "$oid": "6578174042e66b9f8224f252"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6579319542e66b9f8224f269"
  },
  "fullname": "TRẦN MINH KHOA",
  "birthyear": 1997,
  "phone": "0974741913",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-07T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng, viêm tuỷ R34.",
      "cures": "1. cạo vôi răng + đánh bóng răng.\r\n2. gây tê, mở tuỷ buồng, đặt As R34, điều trị thuốc.",
      "bill": 0,
      "_id": {
        "$oid": "6579319542e66b9f8224f26a"
      }
    },
    {
      "date": {
        "$date": "2023-12-11T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "mở tuỷ, SSOT bơm rửa ống tuỷ R34.",
      "bill": 0,
      "_id": {
        "$oid": "6579322b42e66b9f8224f26f"
      }
    },
    {
      "date": {
        "$date": "2023-12-14T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34.",
      "bill": 0,
      "_id": {
        "$oid": "657cdb4a42e66b9f8224f2e8"
      }
    },
    {
      "date": {
        "$date": "2023-12-26T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "658c2b5c42e66b9f8224f3f3"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "657a7d4142e66b9f8224f282"
  },
  "fullname": "NGUYỄN THỊ NINH",
  "birthyear": 1955,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-13T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn bộ HT",
      "cures": "lấy dấu sơ khởi HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "657a7d4142e66b9f8224f283"
      }
    },
    {
      "date": {
        "$date": "2023-12-17T17:00:00.000Z"
      },
      "diagnoses": "PHTLTH HT R VN",
      "cures": "lấy dấu sau cùng HT, cắn sáp HT, so màu răng VN A3, đặt cọc 1,1 triệu.",
      "bill": 0,
      "_id": {
        "$oid": "657fb76d42e66b9f8224f30d"
      }
    },
    {
      "date": {
        "$date": "2023-12-20T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT RVN",
      "cures": "thử hàm sáp HT R VN, màu A3.",
      "bill": 0,
      "_id": {
        "$oid": "6583fc2b42e66b9f8224f373"
      }
    },
    {
      "date": {
        "$date": "2023-12-25T17:00:00.000Z"
      },
      "diagnoses": "PHTLTH HT R VN A3",
      "cures": "giao hàm trên RVN A3: PHTLTH HT.",
      "bill": 2100000,
      "_id": {
        "$oid": "658ab15442e66b9f8224f3c7"
      }
    },
    {
      "date": {
        "$date": "2023-12-28T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT gây đau",
      "cures": "chỉnh đau hàm trên.",
      "bill": 0,
      "_id": {
        "$oid": "658e4f4242e66b9f8224f415"
      }
    },
    {
      "date": {
        "$date": "2024-01-02T17:00:00.000Z"
      },
      "diagnoses": "hàm giả HT gây đau",
      "cures": "chỉnh đau PHTLTH HT, tặng giấy nhám, ghi toa cho bịnh nhân mua 1 tube Kamistad.",
      "bill": 0,
      "_id": {
        "$oid": "6594de7442e66b9f8224f469"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "657c0cbe42e66b9f8224f2a6"
  },
  "fullname": "LÊ MẠNH",
  "birthyear": 1954,
  "phone": "0983246164",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-14T17:00:00.000Z"
      },
      "diagnoses": "R41 bị gãy",
      "cures": "gây tê endo R41, SSOT bơm rửa ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "657c0cbe42e66b9f8224f2a7"
      }
    },
    {
      "date": {
        "$date": "2023-12-22T17:00:00.000Z"
      },
      "diagnoses": "endo R41.",
      "cures": "SSOT bơm rửa ống tuỷ R41.",
      "bill": 0,
      "_id": {
        "$oid": "6586ba6342e66b9f8224f39d"
      }
    },
    {
      "date": {
        "$date": "2023-12-27T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 41",
      "cures": "SSOT, bơm rửa ống tuỷ chân răng 41, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "658e0cc142e66b9f8224f3fd"
      }
    },
    {
      "date": {
        "$date": "2024-01-01T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 41",
      "cures": "SSOT bơm rửa ống tuỷ R41, trám bít ống tuỷ R41 cortisomol.",
      "bill": 0,
      "_id": {
        "$oid": "65937d6e42e66b9f8224f43e"
      }
    },
    {
      "date": {
        "$date": "2024-01-03T17:00:00.000Z"
      },
      "diagnoses": "R41 gãy ngang còn chân răng",
      "cures": "khoan ống mang chốt chân răng 41, chân răng nhỏ, khó thao tác.",
      "bill": 500000,
      "_id": {
        "$oid": "659dd79c42e66b9f8224f4a0"
      }
    },
    {
      "date": {
        "$date": "2024-01-08T17:00:00.000Z"
      },
      "diagnoses": "R 41 gãy ngang thân răng, còn chân răng.",
      "cures": "dùng trâm máy inox làm chốt tuỷ, gắn cement, tái tạo thân răng bằng composite LC A2.",
      "bill": 500000,
      "_id": {
        "$oid": "659dd9e042e66b9f8224f4bc"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "657c0ec442e66b9f8224f2ac"
  },
  "fullname": "HỒ CHUYÊN HẢO",
  "birthyear": 1957,
  "phone": "0708566524",
  "treatments": [
    {
      "date": {
        "$date": "2023-08-18T17:00:00.000Z"
      },
      "diagnoses": "R21 bị gãy",
      "cures": "gây tê endo R21, SSOT bơm rửa ống tuỷ R21.",
      "bill": 0,
      "_id": {
        "$oid": "657c2cd642e66b9f8224f2b6"
      }
    },
    {
      "date": {
        "$date": "2023-08-21T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 21",
      "cures": "SSOT bơm rửa ống tuỷ R21",
      "bill": 0,
      "_id": {
        "$oid": "657c2d1a42e66b9f8224f2bb"
      }
    },
    {
      "date": {
        "$date": "2023-08-28T17:00:00.000Z"
      },
      "diagnoses": "endo R21",
      "cures": "bơm rửa ống tuỷ R21, tặng 1 tube Metrogyldenta.",
      "bill": 0,
      "_id": {
        "$oid": "657c2d8342e66b9f8224f2c5"
      }
    },
    {
      "date": {
        "$date": "2023-09-06T17:00:00.000Z"
      },
      "diagnoses": "endo R21",
      "cures": "bơm rửa ống tuỷ R21",
      "bill": 0,
      "_id": {
        "$oid": "657c2dc742e66b9f8224f2ca"
      }
    },
    {
      "date": {
        "$date": "2023-09-18T17:00:00.000Z"
      },
      "diagnoses": "endo R21",
      "cures": "khoan ống mang chốt R21, lấy dấu HT,HD.",
      "bill": 0,
      "_id": {
        "$oid": "657c2e2142e66b9f8224f2cf"
      }
    },
    {
      "date": {
        "$date": "2023-09-21T17:00:00.000Z"
      },
      "diagnoses": "làm R sứ R21",
      "cures": "gắn cùi giả R21, mài cùi, lấy dấu HT.",
      "bill": 0,
      "_id": {
        "$oid": "657c2e8742e66b9f8224f2d4"
      }
    },
    {
      "date": {
        "$date": "2023-09-25T17:00:00.000Z"
      },
      "diagnoses": "làm răng sứ R21",
      "cures": "gắn răng sứ R21 màu A3, mài ngắn răng nhựa 22 của hàm tháo lắp HT.",
      "bill": 1300000,
      "_id": {
        "$oid": "657c2efb42e66b9f8224f2d9"
      }
    },
    {
      "date": {
        "$date": "2023-11-02T17:00:00.000Z"
      },
      "diagnoses": "R sứ R21 rớt",
      "cures": "gắn lại răng sứ 21",
      "bill": 0,
      "_id": {
        "$oid": "6580071742e66b9f8224f31c"
      }
    },
    {
      "date": {
        "$date": "2023-12-15T17:00:00.000Z"
      },
      "diagnoses": "R21 R sứ rớt lần 2",
      "cures": "lấy dấu hàm trên có kèm hàm giả để thêm răng 21 vào hàm.",
      "bill": 0,
      "_id": {
        "$oid": "65800bde42e66b9f8224f321"
      }
    },
    {
      "date": {
        "$date": "2023-12-17T17:00:00.000Z"
      },
      "diagnoses": "thêm răng 21 vào hàm giả cũ HT.",
      "cures": "giao hàm cho bệnh nhân: PHHT dẻo cũ thêm R21 vào + đệm hàm, trả lại bệnh nhân 400k, vì làm răng sứ R21 thất bại.",
      "bill": 0,
      "_id": {
        "$oid": "65800fed42e66b9f8224f32b"
      }
    }
  ],
  "__v": 11
},
{
  "_id": {
    "$oid": "657c25a442e66b9f8224f2b0"
  },
  "fullname": "LƯ YẾN DUNG",
  "birthyear": 1968,
  "phone": "0933651936",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-14T17:00:00.000Z"
      },
      "diagnoses": "miếng trám lớn R14 bị mẻ phía gần",
      "cures": "trám lại GIC phía gần của miếng trám to phía trong R 14.",
      "bill": 200000,
      "_id": {
        "$oid": "657c25a442e66b9f8224f2b1"
      }
    },
    {
      "date": {
        "$date": "2024-01-09T17:00:00.000Z"
      },
      "diagnoses": "R14 sút miếng trám",
      "cures": "trám lại chân răng R14 GIC vỡ lớn",
      "bill": 100000,
      "_id": {
        "$oid": "659eb8a942e66b9f8224f4df"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "657c2f9042e66b9f8224f2dc"
  },
  "fullname": "LỘC TIỀN AN",
  "birthyear": 1995,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-14T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R11",
      "cures": "trám răng R11 (G), LC màu A1",
      "bill": 400000,
      "_id": {
        "$oid": "657c2f9042e66b9f8224f2dd"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "657c2ff542e66b9f8224f2df"
  },
  "fullname": "ĐỖ THUỲ DƯƠNG",
  "birthyear": 1970,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-09-19T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 300000,
      "_id": {
        "$oid": "657c2ff542e66b9f8224f2e0"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "657c30de42e66b9f8224f2e2"
  },
  "fullname": "LÊ MẠNH (7/2023)",
  "birthyear": 1954,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-07-19T17:00:00.000Z"
      },
      "diagnoses": "R22 gãy vỡ lớn.",
      "cures": "khám, gửi chụp phim XQ R22 vỡ lớn.",
      "bill": 0,
      "_id": {
        "$oid": "657c30de42e66b9f8224f2e3"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "657d508042e66b9f8224f2eb"
  },
  "fullname": "LÊ HOÀNG TRANG",
  "birthyear": 1966,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-08T17:00:00.000Z"
      },
      "diagnoses": "mòn ngót cổ răng",
      "cures": "trám LC cổ răng R35, gây tê mài cùi R23, lấy dấu HT, HD.\r\n(trám răng 250k).",
      "bill": 250000,
      "_id": {
        "$oid": "657d508042e66b9f8224f2ec"
      }
    },
    {
      "date": {
        "$date": "2023-02-10T17:00:00.000Z"
      },
      "diagnoses": "R sứ R23",
      "cures": "thử sườn cùi răng R23.",
      "bill": 0,
      "_id": {
        "$oid": "6614c85142e66b9f8224f694"
      }
    },
    {
      "date": {
        "$date": "2023-02-13T17:00:00.000Z"
      },
      "diagnoses": "làm răng sứ R23",
      "cures": "hẹn lại",
      "bill": 0,
      "_id": {
        "$oid": "6614c88742e66b9f8224f699"
      }
    },
    {
      "date": {
        "$date": "2023-02-14T17:00:00.000Z"
      },
      "diagnoses": "làm răng sứ R23",
      "cures": "gắn mão sứ R23, màu A2.",
      "bill": 750000,
      "_id": {
        "$oid": "6614c90f42e66b9f8224f6a3"
      }
    },
    {
      "date": {
        "$date": "2023-12-15T17:00:00.000Z"
      },
      "diagnoses": "kẽ hở giữa 2 răng cửa (R31, R41).",
      "cures": "trám kín kẽ hở giữa 2 răng cửa dưới (R31, R41) mặt gần.",
      "bill": 350000,
      "_id": {
        "$oid": "6614c9a142e66b9f8224f6a8"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "657d8c6142e66b9f8224f307"
  },
  "fullname": "BÀNH MỈNH HÀO",
  "birthyear": 1989,
  "phone": "0902955028",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-15T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng: vôi răng vết dính nhiều.",
      "cures": "caọ vôi răng + đánh bóng răng.",
      "bill": 500000,
      "_id": {
        "$oid": "657d8c6142e66b9f8224f308"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65811c6942e66b9f8224f332"
  },
  "fullname": "TRANG ĐỒNG AN",
  "birthyear": 2014,
  "phone": "TRUNG QUỐC",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-18T17:00:00.000Z"
      },
      "diagnoses": "sâu răng, viêm nướu.",
      "cures": "trám răng RTE R65, cạo vôi răng + đánh bóng răng.",
      "bill": 0,
      "_id": {
        "$oid": "65811c6942e66b9f8224f333"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65837c0742e66b9f8224f355"
  },
  "fullname": "LÊ THUẬN HỶ",
  "birthyear": 1961,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-17T17:00:00.000Z"
      },
      "diagnoses": "khám tư vấn, gãy cùi răng 43, 41 của cầu răng sứ 3 đơn vị 41-43.",
      "cures": "điều trị thuốc, hẹn nhổ chân răng 43.",
      "bill": 0,
      "_id": {
        "$oid": "65837c0742e66b9f8224f356"
      }
    },
    {
      "date": {
        "$date": "2023-12-19T17:00:00.000Z"
      },
      "diagnoses": "gãy cùi răng 43",
      "cures": "nhổ chân răng 43, HA=105/85, M=88.",
      "bill": 250000,
      "_id": {
        "$oid": "65837c6c42e66b9f8224f35b"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65837cd942e66b9f8224f35e"
  },
  "fullname": "PHẠM PHÚ KHÁNH",
  "birthyear": 1983,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-17T17:00:00.000Z"
      },
      "diagnoses": "răng cửa sâu răng vỡ lớn, mất răng cửa dưới.",
      "cures": "khám tư vấn, hẹn nội nha răng.",
      "bill": 0,
      "_id": {
        "$oid": "65837cd942e66b9f8224f35f"
      }
    },
    {
      "date": {
        "$date": "2023-12-19T17:00:00.000Z"
      },
      "diagnoses": "endo R 11,13.",
      "cures": "gây tê endo R11,13, bịnh nhân không có răng 12, SSOT bơm rửa ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "65837d3b42e66b9f8224f364"
      }
    },
    {
      "date": {
        "$date": "2024-12-24T17:00:00.000Z"
      },
      "diagnoses": "PHCĐ sứ răng cửa HT, HD.",
      "cures": "SSOT bơm rửa ống tuỷ R 11,12. Gây tê endo R 21,43.",
      "bill": 0,
      "_id": {
        "$oid": "659f1b6b42e66b9f8224f4e4"
      }
    },
    {
      "date": {
        "$date": "2024-01-08T17:00:00.000Z"
      },
      "diagnoses": "PHCĐ sứ răng cửa HT, HD.",
      "cures": "trám bít ống tuỷ R11,12,21,43.",
      "bill": 0,
      "_id": {
        "$oid": "659f1cfb42e66b9f8224f4eb"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "658503f642e66b9f8224f37a"
  },
  "fullname": "TỪ TÔ TỬ",
  "birthyear": 1953,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-21T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng HD + đánh bóng răng HD, trám cổ răng R35 do mòn ngót LC A2, vá lỗ mòn vùng R25 của hàm giả HT.\r\n(400K+200k+100k)",
      "bill": 700000,
      "_id": {
        "$oid": "658503f642e66b9f8224f37b"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6585482642e66b9f8224f37f"
  },
  "fullname": "NGUYỄN ĐÌNH DUY KHANG",
  "birthyear": 2005,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-21T17:00:00.000Z"
      },
      "diagnoses": "viêm quanh thân răng do mọc răng khôn R18",
      "cures": "Rodogyl 4v/ngày, Alaxan2v/ngày, chlorfast 1 chai ngậm súc miệng.",
      "bill": 0,
      "_id": {
        "$oid": "6585482642e66b9f8224f380"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "658554a542e66b9f8224f383"
  },
  "fullname": "TRẦN THỊ HOÀNG ANH",
  "birthyear": 1965,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-30T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R11,12",
      "cures": "trám răng LC A2 R11 (X), R12 (X). R11 (300K) + R12(150K).\r\ncắt bỏ móc R14.",
      "bill": 450000,
      "_id": {
        "$oid": "658554a542e66b9f8224f384"
      }
    },
    {
      "date": {
        "$date": "2023-12-21T17:00:00.000Z"
      },
      "diagnoses": "miếng trám R12 rớt, R11 bị mẻ miếng trám cũ.",
      "cures": "trám lại R12 (X) LC A2, trám đắp mặt bên (gần) của R12 lấp kín kẽ với R11.\r\ntrám bảo hành free.",
      "bill": 0,
      "_id": {
        "$oid": "6585554442e66b9f8224f389"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6586a38a42e66b9f8224f392"
  },
  "fullname": "NGUYỄN THỊ PHƯƠNG ĐAN",
  "birthyear": 1986,
  "phone": "0909174854",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-22T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R37",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "6586a38a42e66b9f8224f393"
      }
    },
    {
      "date": {
        "$date": "2024-04-17T17:00:00.000Z"
      },
      "diagnoses": "sâu răng tái phát R37 nhai.",
      "cures": "trám răng GIC mặt nhai R37.",
      "bill": 150000,
      "_id": {
        "$oid": "6620ebc742e66b9f8224f7fb"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6586a5bf42e66b9f8224f395"
  },
  "fullname": "LỤC TÚ ANH",
  "birthyear": 1963,
  "phone": "0702032635",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-22T17:00:00.000Z"
      },
      "diagnoses": "khám",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "6586a5bf42e66b9f8224f396"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6586bf7d42e66b9f8224f3b4"
  },
  "fullname": "TRẦN THỊ ÁI HUÊ",
  "birthyear": 1951,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-22T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "trám răng GIC R47 (N), trám răng LC A3 R12 (X), R13 (G).",
      "bill": 350000,
      "_id": {
        "$oid": "6586bf7d42e66b9f8224f3b5"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6588e97842e66b9f8224f3be"
  },
  "fullname": "LÊ THỊ BÍCH SƠN",
  "birthyear": 1967,
  "phone": "0936168471",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-24T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "lấy dấu HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "6588e97842e66b9f8224f3bf"
      }
    },
    {
      "date": {
        "$date": "2023-12-28T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD.",
      "cures": "lấy dấu sau cùng HT, HD, cắn sáp HT, HD. Chọn răng Justi màu 66.\r\nTính chi phí: HT 13R=3250K + HD 12R dẻo=3tr +2tr =>8250k, bớt còn 8,2 tr.",
      "bill": 0,
      "_id": {
        "$oid": "658e0c7c42e66b9f8224f3f8"
      }
    },
    {
      "date": {
        "$date": "2013-12-29T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT R Justi màu 66",
      "cures": "thử hàm sáp HT, đặt cọc 2 triệu, gửi labo ép nhựa trước HT.",
      "bill": 0,
      "_id": {
        "$oid": "6592893842e66b9f8224f420"
      }
    },
    {
      "date": {
        "$date": "2024-01-02T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD R Justi màu 66",
      "cures": "giao PHTLHT 13R Justi màu 66, lấy dấu HT, cắn sáp HD, gửi labo lên răng HD.",
      "bill": 0,
      "_id": {
        "$oid": "6594de1642e66b9f8224f464"
      }
    },
    {
      "date": {
        "$date": "2024-01-08T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD",
      "cures": "thử hàm sáp HD 12R Mỹ Justi, đặt cọc thêm 3 triệu.",
      "bill": 3000000,
      "_id": {
        "$oid": "659dd72642e66b9f8224f49b"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "658908d842e66b9f8224f3c1"
  },
  "fullname": "NGUYỄN LƯƠNG MINH TRÍ",
  "birthyear": 2005,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-24T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu trung bình",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "658908d842e66b9f8224f3c2"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "658e0d5e42e66b9f8224f405"
  },
  "fullname": "ĐẶNG THỊ HỒNG NGỌC",
  "birthyear": 1965,
  "phone": "0702994005",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-24T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn bộ HT, HD.",
      "cures": "lấy dấu sơ khởi HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "658e0d5e42e66b9f8224f406"
      }
    },
    {
      "date": {
        "$date": "2023-12-27T17:00:00.000Z"
      },
      "diagnoses": "PHTLTH HT, HD R VN.",
      "cures": "cắn sáp HT, HD, chọn màu răng A1, R VN.",
      "bill": 0,
      "_id": {
        "$oid": "658e0dae42e66b9f8224f40b"
      }
    },
    {
      "date": {
        "$date": "2024-01-07T17:00:00.000Z"
      },
      "diagnoses": "PHTLTH HT, HD R Mỹ Justi màu 66",
      "cures": "thử lại hàm sáp HT, HD ( đổi từ R VN qua R Mỹ Justi màu 66 )",
      "bill": 0,
      "_id": {
        "$oid": "659c920442e66b9f8224f484"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "658e4fd142e66b9f8224f417"
  },
  "fullname": "LÝ VAN",
  "birthyear": 1967,
  "phone": "0903132938",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-28T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R21, gãy răng R12.",
      "cures": "trám răng R21 LC màu A2 phía xa. Gửi XQ chân răng R12.",
      "bill": 250000,
      "_id": {
        "$oid": "658e4fd142e66b9f8224f418"
      }
    },
    {
      "date": {
        "$date": "2024-01-02T17:00:00.000Z"
      },
      "diagnoses": "R12 gãy còn chân răng.",
      "cures": "XQ thể hiện R12 đã nội nha, khoan ống mang chốt, lấy dấu HT làm cùi giả, lấy dấu HD.",
      "bill": 0,
      "_id": {
        "$oid": "659590a342e66b9f8224f471"
      }
    },
    {
      "date": {
        "$date": "2024-01-07T17:00:00.000Z"
      },
      "diagnoses": "R sứ 12",
      "cures": "gắn cùi giả R12, mài cùi, lấy dấu HT",
      "bill": 0,
      "_id": {
        "$oid": "659c92d242e66b9f8224f48f"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "659288c242e66b9f8224f41a"
  },
  "fullname": "ĐẶNG TRẤN ĐẠT",
  "birthyear": 2017,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2013-12-29T17:00:00.000Z"
      },
      "diagnoses": "RTE lung lay",
      "cures": "nhổ răng R71 lung lay.",
      "bill": 50000,
      "_id": {
        "$oid": "659288c242e66b9f8224f41b"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65928a9542e66b9f8224f432"
  },
  "fullname": "HỒNG TUYẾT PHONG",
  "birthyear": 1959,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-12-26T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R17.",
      "cures": "gây tê đặt As R17.",
      "bill": 0,
      "_id": {
        "$oid": "65928a9542e66b9f8224f433"
      }
    },
    {
      "date": {
        "$date": "2023-12-29T17:00:00.000Z"
      },
      "diagnoses": "endo R17",
      "cures": "mở tuỷ R17, SSOT bơm rửa ống tuỷ R17.",
      "bill": 0,
      "_id": {
        "$oid": "65928adb42e66b9f8224f438"
      }
    },
    {
      "date": {
        "$date": "2024-01-08T17:00:00.000Z"
      },
      "diagnoses": "endo R17",
      "cures": "SSOT bơm rửa ống tuỷ R17, trám chân răng bị lộ của R sứ 12 LC A1.",
      "bill": 0,
      "_id": {
        "$oid": "659dd80742e66b9f8224f4a5"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "6593d6ec42e66b9f8224f449"
  },
  "fullname": "NGUYỄN TRỌNG PHÚC",
  "birthyear": 2003,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-01T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng HT, HD",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "6593d6ec42e66b9f8224f44a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65943dd142e66b9f8224f452"
  },
  "fullname": "NGUYỄN THỊ NHƯ MAI",
  "birthyear": 1970,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-01T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu răng",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 300000,
      "_id": {
        "$oid": "65943dd142e66b9f8224f453"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6594deab42e66b9f8224f46b"
  },
  "fullname": "NINH THANH HUỆ",
  "birthyear": 1985,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-10T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "6594deab42e66b9f8224f46c"
      }
    },
    {
      "date": {
        "$date": "2024-01-02T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "66111b5542e66b9f8224f648"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "659c91a842e66b9f8224f47e"
  },
  "fullname": "LÊ THỊ NGỌC DUNG",
  "birthyear": 1964,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-07T17:00:00.000Z"
      },
      "diagnoses": "mất răng cửa HT",
      "cures": "lấy dấu HT, HD để làm PHTLHT dẻo R Mỹ Justi.",
      "bill": 0,
      "_id": {
        "$oid": "659c91a842e66b9f8224f47f"
      }
    },
    {
      "date": {
        "$date": "2024-01-09T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT dẻo R Mỹ Justi",
      "cures": "lấy dấu lại HT, cắn sáp HT, chọn màu răng Justi màu 69.",
      "bill": 0,
      "_id": {
        "$oid": "659e582342e66b9f8224f4d7"
      }
    },
    {
      "date": {
        "$date": "2024-01-14T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT nhựa dẻo R Mỹ Justi màu 69",
      "cures": "thử hàm sáp 5R",
      "bill": 0,
      "_id": {
        "$oid": "65a50b2542e66b9f8224f500"
      }
    },
    {
      "date": {
        "$date": "2024-01-17T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "giao hàm PHTLHT dẻo 5R Mỹ Justi. (3,2 tr)\r\ncạo vôi răng + đánh bóng răng (400k)",
      "bill": 3600000,
      "_id": {
        "$oid": "65fa553e42e66b9f8224f5b5"
      }
    },
    {
      "date": {
        "$date": "2024-01-21T17:00:00.000Z"
      },
      "diagnoses": "hàm giả gây đau",
      "cures": "chỉnh đau + chỉnh khớp cắn PHTLHT",
      "bill": 0,
      "_id": {
        "$oid": "65fa558242e66b9f8224f5ba"
      }
    },
    {
      "date": {
        "$date": "2024-03-19T17:00:00.000Z"
      },
      "diagnoses": "PHTL dẻo gây đau",
      "cures": "chỉnh đau PHTLHT dẻo, lấy dấu HT có luôn hàm giả cũ để thêm răng",
      "bill": 0,
      "_id": {
        "$oid": "65fa5b5142e66b9f8224f5c1"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "659c925a42e66b9f8224f486"
  },
  "fullname": "HỒ VŨ XUÂN PHƯƠNG",
  "birthyear": 1982,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-07T17:00:00.000Z"
      },
      "diagnoses": "R chốt sứ rớt (R21)",
      "cures": "gắn R chốt sứ 21 rớt.",
      "bill": 200000,
      "_id": {
        "$oid": "659c925a42e66b9f8224f487"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "659c92a642e66b9f8224f489"
  },
  "fullname": "LÔI KHẢI HÙNG",
  "birthyear": 1973,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-07T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "lấy dấu HT, HD để làm PHTL dẻo HT",
      "bill": 0,
      "_id": {
        "$oid": "659c92a642e66b9f8224f48a"
      }
    },
    {
      "date": {
        "$date": "2024-01-09T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT dẻo R Mỹ Justi",
      "cures": "cắn sáp HT, chọn màu răng Justi màu 65.",
      "bill": 0,
      "_id": {
        "$oid": "659f1d7a42e66b9f8224f4f2"
      }
    },
    {
      "date": {
        "$date": "2024-01-14T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT nhựa dẻo 4R Mỹ Justi màu 65",
      "cures": "thử hàm sáp 4R Mỹ",
      "bill": 0,
      "_id": {
        "$oid": "65a50b5a42e66b9f8224f505"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "659d03d542e66b9f8224f491"
  },
  "fullname": "TRẦN TUYẾT HÀ",
  "birthyear": 1956,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-08T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "khám tư vấn",
      "bill": 0,
      "_id": {
        "$oid": "659d03d542e66b9f8224f492"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "659e51ea42e66b9f8224f4c3"
  },
  "fullname": "PHẠM KIM LOAN",
  "birthyear": 1977,
  "phone": "0909297030",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-09T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT gãy",
      "cures": "lấy dấu hàm trên để vá hàm, chi phí 350000.",
      "bill": 0,
      "_id": {
        "$oid": "659e51ea42e66b9f8224f4c4"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "659e57db42e66b9f8224f4d1"
  },
  "fullname": "VÕ THỊ SẬY",
  "birthyear": 1944,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-09T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn bộ HD",
      "cures": "lấy dấu HD, lấy dấu hàm giả HT.",
      "bill": 0,
      "_id": {
        "$oid": "659e57db42e66b9f8224f4d2"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65a0bc7342e66b9f8224f4f8"
  },
  "fullname": "LÊ LINH",
  "birthyear": 1952,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-11T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD lỏng",
      "cures": "đệm hàm",
      "bill": 250000,
      "_id": {
        "$oid": "65a0bc7342e66b9f8224f4f9"
      }
    },
    {
      "date": {
        "$date": "2024-06-02T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "lấy dấu HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "6660f62e42e66b9f8224fadf"
      }
    },
    {
      "date": {
        "$date": "2024-06-04T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD",
      "cures": "cắn sáp HD, so màu răng R VN màu A2.",
      "bill": 0,
      "_id": {
        "$oid": "6660f67442e66b9f8224fae4"
      }
    },
    {
      "date": {
        "$date": "2024-06-06T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD RVN",
      "cures": "thử phục hình sáp HD 12R, RVN, A2.",
      "bill": 0,
      "_id": {
        "$oid": "66681b6242e66b9f8224fb19"
      }
    },
    {
      "date": {
        "$date": "2024-06-10T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD 12RVN",
      "cures": "giao hàm PHTLHD 12R RVN, màu A2.",
      "bill": 1800000,
      "_id": {
        "$oid": "66681ba742e66b9f8224fb1e"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "65a50b9842e66b9f8224f507"
  },
  "fullname": "TRẦN TÚ PHÂN",
  "birthyear": 1964,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-14T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn R38",
      "cures": "trám GIC R38 vỡ lớn",
      "bill": 300000,
      "_id": {
        "$oid": "65a50b9842e66b9f8224f508"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65a8ef4842e66b9f8224f50c"
  },
  "fullname": "HOÀNG PHẠM MINH VŨ",
  "birthyear": 2002,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-17T17:00:00.000Z"
      },
      "diagnoses": "VIÊM NƯỚU",
      "cures": "CẠO VÔI RĂNG",
      "bill": 0,
      "_id": {
        "$oid": "65a8ef4842e66b9f8224f50d"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65aa06bd42e66b9f8224f510"
  },
  "fullname": "PHẠM THỊ HỒNG THANH",
  "birthyear": 1981,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-18T17:00:00.000Z"
      },
      "diagnoses": "R26 đã endo từ lâu bị tét phần thân răng trong xa,",
      "cures": "",
      "bill": 600000,
      "_id": {
        "$oid": "65aa06bd42e66b9f8224f511"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65ab40b142e66b9f8224f518"
  },
  "fullname": "LÝ THANH NHIÊN",
  "birthyear": 2015,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-19T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R85",
      "cures": "trám GIC R85",
      "bill": 100000,
      "_id": {
        "$oid": "65ab40b142e66b9f8224f519"
      }
    },
    {
      "date": {
        "$date": "2024-04-19T17:00:00.000Z"
      },
      "diagnoses": "vết dính, vôi ít",
      "cures": "cạo vôi răng, đánh bóng răng",
      "bill": 300000,
      "_id": {
        "$oid": "662371cb42e66b9f8224f813"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65ab9f1942e66b9f8224f51b"
  },
  "fullname": "LƯU ĐẠT THÂM",
  "birthyear": 1990,
  "phone": "0938008428",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-19T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R24",
      "cures": "trám răng GIC R24 (X), trám thẩm mỹ LC R22 (G) A1.",
      "bill": 500000,
      "_id": {
        "$oid": "65ab9f1942e66b9f8224f51c"
      }
    },
    {
      "date": {
        "$date": "2024-02-23T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R36",
      "cures": "gây tê, mở buồng tuỷ, đặt As R36, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "65d95dc742e66b9f8224f53f"
      }
    },
    {
      "date": {
        "$date": "2024-02-26T17:00:00.000Z"
      },
      "diagnoses": "endo R36",
      "cures": "mở tuỷ buồng R36, đặt lại As, trám tạm Eu.",
      "bill": 0,
      "_id": {
        "$oid": "65f7070242e66b9f8224f570"
      }
    },
    {
      "date": {
        "$date": "2024-02-28T17:00:00.000Z"
      },
      "diagnoses": "endo R36",
      "cures": "mở tuỷ R36, SSOT, bơm rửa ống tuỷ",
      "bill": 0,
      "_id": {
        "$oid": "65f7074b42e66b9f8224f576"
      }
    },
    {
      "date": {
        "$date": "2024-03-10T17:00:00.000Z"
      },
      "diagnoses": "endo R36",
      "cures": "bơm rửa ống tuỷ, SSOT R36",
      "bill": 0,
      "_id": {
        "$oid": "65f707a242e66b9f8224f57b"
      }
    },
    {
      "date": {
        "$date": "2024-03-15T17:00:00.000Z"
      },
      "diagnoses": "endo R36",
      "cures": "bơm rửa ống tuỷ SSOT R36",
      "bill": 0,
      "_id": {
        "$oid": "65f707f942e66b9f8224f581"
      }
    },
    {
      "date": {
        "$date": "2024-03-22T17:00:00.000Z"
      },
      "diagnoses": "endo R 36",
      "cures": "SSOT bơm rửa ống tuỷ R36",
      "bill": 0,
      "_id": {
        "$oid": "661a52c642e66b9f8224f72d"
      }
    },
    {
      "date": {
        "$date": "2024-04-05T17:00:00.000Z"
      },
      "diagnoses": "endo R36",
      "cures": "trám bít ống tuỷ R36.",
      "bill": 0,
      "_id": {
        "$oid": "661a53ab42e66b9f8224f732"
      }
    },
    {
      "date": {
        "$date": "2024-04-12T17:00:00.000Z"
      },
      "diagnoses": "endo R36",
      "cures": "trám kết thúc R36 endo GIC.",
      "bill": 800000,
      "_id": {
        "$oid": "661a53e442e66b9f8224f737"
      }
    },
    {
      "date": {
        "$date": "2024-04-19T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "662370a642e66b9f8224f805"
      }
    }
  ],
  "__v": 9
},
{
  "_id": {
    "$oid": "65bc58dc42e66b9f8224f522"
  },
  "fullname": "LÂM MỸ LỆ",
  "birthyear": 1961,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-01T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "65bc58dc42e66b9f8224f523"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65bc58f342e66b9f8224f525"
  },
  "fullname": "LÂM XƯƠNG CHÍ",
  "birthyear": 1958,
  "phone": "0793068221",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-01T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "65bc58f342e66b9f8224f526"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65bdc28642e66b9f8224f52e"
  },
  "fullname": "PHAN ANH THƯ",
  "birthyear": 2003,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-02T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "65bdc28642e66b9f8224f52f"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65bdc29e42e66b9f8224f531"
  },
  "fullname": "LÂM VIỄN DƯƠNG",
  "birthyear": 1993,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-02T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "65bdc29e42e66b9f8224f532"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65d5798842e66b9f8224f534"
  },
  "fullname": "TRẦN NGỌC AN",
  "birthyear": 1962,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-20T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 300000,
      "_id": {
        "$oid": "65d5798842e66b9f8224f535"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65d95e2e42e66b9f8224f542"
  },
  "fullname": "TRƯƠNG KHẢI DINH",
  "birthyear": 2005,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-21T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng, đánh bóng răng 2 hàm.",
      "bill": 300000,
      "_id": {
        "$oid": "65d95e2e42e66b9f8224f543"
      }
    },
    {
      "date": {
        "$date": "2024-04-03T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R15 (X)",
      "cures": "trám răng R15 (X) GIC",
      "bill": 100000,
      "_id": {
        "$oid": "660e8efa42e66b9f8224f60f"
      }
    },
    {
      "date": {
        "$date": "2024-07-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R25 (X)",
      "cures": "trám răng R25 (X) GIC",
      "bill": 200000,
      "_id": {
        "$oid": "6690a27a42e66b9f8224fc4f"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "65dc578f42e66b9f8224f545"
  },
  "fullname": "THÁI PHONG",
  "birthyear": 1972,
  "phone": "0903730168",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-25T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "65dc578f42e66b9f8224f546"
      }
    },
    {
      "date": {
        "$date": "2024-02-25T17:00:00.000Z"
      },
      "diagnoses": "cầu răng sứ rớt",
      "cures": "gắn lại cầu răng sứ 3 đơn vị ( 13-11 )",
      "bill": 200000,
      "_id": {
        "$oid": "65dc57fc42e66b9f8224f54b"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65dd5bc542e66b9f8224f551"
  },
  "fullname": "HỒ HOÀNG VŨ",
  "birthyear": 1978,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-26T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng R46",
      "cures": "trám răng R46 GIC (nhai), caọ vôi răng + đánh bóng răng (300k + 500k).",
      "bill": 800000,
      "_id": {
        "$oid": "65dd5bc542e66b9f8224f552"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65f2cd8f42e66b9f8224f55b"
  },
  "fullname": "NGUYỄN THỊ HỒNG VÂN",
  "birthyear": 1980,
  "phone": "0974881556",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-11T17:00:00.000Z"
      },
      "diagnoses": "kẽ răng giữa R31 và R41 rộng, viêm nướu, mòn ngót cổ răng.",
      "cures": "lấy dấu HD, đặt cọc 1,2 triệu.",
      "bill": 1200000,
      "_id": {
        "$oid": "65f2cd8f42e66b9f8224f55c"
      }
    },
    {
      "date": {
        "$date": "2024-03-14T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, răng mòn cổ răng.",
      "cures": "cạo vôi răng đánh bóng răng.\r\nthử răng sáp kẽ giữa R31, R41. R Justi 67.\r\ntrám cổ răng mòn ngót R16, R31, R32, R41, R42. LC A1.",
      "bill": 0,
      "_id": {
        "$oid": "65f2d0b342e66b9f8224f561"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65f2d1cf42e66b9f8224f564"
  },
  "fullname": "LÊ THUỴ THỜI TRÂN",
  "birthyear": 1979,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-12T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R36 xa",
      "cures": "trám răng R46 xa GIC.",
      "bill": 200000,
      "_id": {
        "$oid": "65f2d1cf42e66b9f8224f565"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65f2d2e642e66b9f8224f567"
  },
  "fullname": "NGÔ LỆ CHI",
  "birthyear": 1971,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-12T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "trám răng R37 xa lớn GIC \r\ngắn lại răng chốt sứ R 25 free.",
      "bill": 300000,
      "_id": {
        "$oid": "65f2d2e642e66b9f8224f568"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65f2d3eb42e66b9f8224f56a"
  },
  "fullname": "NGUYỄN THỊ MỸ LIÊN",
  "birthyear": 1978,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-11T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, răng mòn ê đau R45",
      "cures": "cạo vôi răng đánh bóng răng free.\r\nlấy dấu nửa hàm dưới phần hàm 4 làm khay toothmousse",
      "bill": 0,
      "_id": {
        "$oid": "65f2d3eb42e66b9f8224f56b"
      }
    },
    {
      "date": {
        "$date": "2024-03-14T17:00:00.000Z"
      },
      "diagnoses": "R45 ê buốt",
      "cures": "giao 1 máng tẩy + 1 tube toothmousse điều trị ê răng",
      "bill": 0,
      "_id": {
        "$oid": "65f70ae242e66b9f8224f592"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65f7085e42e66b9f8224f583"
  },
  "fullname": "TRẦN LỆ OANH",
  "birthyear": 1977,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-14T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R17",
      "cures": "trám răng R17 (XT) GIC",
      "bill": 200000,
      "_id": {
        "$oid": "65f7085e42e66b9f8224f584"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "65f708f942e66b9f8224f587"
  },
  "fullname": "PHAN THỊ KIỀU",
  "birthyear": 1980,
  "phone": "0772067223",
  "treatments": [
    {
      "date": {
        "$date": "2024-02-26T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R24",
      "cures": "trám tạm R24 (X)\r\ntheo dõi viêm tuỷ có khả năng hồi phục",
      "bill": 0,
      "_id": {
        "$oid": "65f708f942e66b9f8224f588"
      }
    },
    {
      "date": {
        "$date": "2024-03-15T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R24",
      "cures": "trám răng R24 (X) GIC, có lót Eugenate.\r\nđã theo dõi trám tạm eugenate trên 2 tuần.",
      "bill": 200000,
      "_id": {
        "$oid": "65f70a8842e66b9f8224f58d"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "65f976cd42e66b9f8224f595"
  },
  "fullname": "LÂM VĨ HÀO",
  "birthyear": 1986,
  "phone": "0337733883",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-15T17:00:00.000Z"
      },
      "diagnoses": "theo dõi viêm tuỷ mãn R47",
      "cures": "gửi chụp XQ R47",
      "bill": 0,
      "_id": {
        "$oid": "65f976cd42e66b9f8224f596"
      }
    },
    {
      "date": {
        "$date": "2024-03-18T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R47, có tiêu xương ổ phía xa R47",
      "cures": "gây tê R47, đặt As R47, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "65f9788742e66b9f8224f5a5"
      }
    },
    {
      "date": {
        "$date": "2024-03-21T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "mở tuỷ R47, bơm rửa, SSOT.",
      "bill": 0,
      "_id": {
        "$oid": "65fd4d5442e66b9f8224f5ce"
      }
    },
    {
      "date": {
        "$date": "2024-03-31T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "SSOT bơm rửa ống tuỷ R47",
      "bill": 0,
      "_id": {
        "$oid": "660be95542e66b9f8224f5f7"
      }
    },
    {
      "date": {
        "$date": "2024-04-07T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "bơm rửa ống tuỷ SSOT R47, trám bít ống tuỷ R47, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "661366b542e66b9f8224f663"
      }
    },
    {
      "date": {
        "$date": "2024-04-14T17:00:00.000Z"
      },
      "diagnoses": "endo R47",
      "cures": "trám kết thúc GIC R47.",
      "bill": 800000,
      "_id": {
        "$oid": "661cfb2042e66b9f8224f779"
      }
    },
    {
      "date": {
        "$date": "2024-04-15T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "661e631d42e66b9f8224f7a9"
      }
    }
  ],
  "__v": 6
},
{
  "_id": {
    "$oid": "65f9777a42e66b9f8224f59a"
  },
  "fullname": "NGUYỄN THỊ NGỌC LIÊNG",
  "birthyear": 1961,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-14T17:00:00.000Z"
      },
      "diagnoses": "endo R43",
      "cures": "gây tê đặt As R43",
      "bill": 0,
      "_id": {
        "$oid": "65f9777a42e66b9f8224f59b"
      }
    },
    {
      "date": {
        "$date": "2024-03-17T17:00:00.000Z"
      },
      "diagnoses": "endo R43",
      "cures": "mở tuỷ SSOT, bơm rửa ống tuỷ R43",
      "bill": 0,
      "_id": {
        "$oid": "65f977d342e66b9f8224f5a0"
      }
    },
    {
      "date": {
        "$date": "2024-03-24T17:00:00.000Z"
      },
      "diagnoses": "endo R43",
      "cures": "bơm rửa ống tuỷ R43",
      "bill": 0,
      "_id": {
        "$oid": "6601537e42e66b9f8224f5e0"
      }
    },
    {
      "date": {
        "$date": "2024-03-31T17:00:00.000Z"
      },
      "diagnoses": "endo R43",
      "cures": "SSOT bơm rửa ống tuỷ R43",
      "bill": 0,
      "_id": {
        "$oid": "660be98842e66b9f8224f5fc"
      }
    },
    {
      "date": {
        "$date": "2024-04-07T17:00:00.000Z"
      },
      "diagnoses": "endo R43",
      "cures": "bơm rửa ống tuỷ SSOT R43.",
      "bill": 0,
      "_id": {
        "$oid": "6613ce5e42e66b9f8224f668"
      }
    },
    {
      "date": {
        "$date": "2024-04-14T17:00:00.000Z"
      },
      "diagnoses": "endo R43",
      "cures": "bơm rửa ống tuỷ, SSOT R43.",
      "bill": 0,
      "_id": {
        "$oid": "661cfb5142e66b9f8224f77e"
      }
    },
    {
      "date": {
        "$date": "2024-04-22T17:00:00.000Z"
      },
      "diagnoses": "endo R43",
      "cures": "bơm rửa ống tuỷ, trám bít ống tuỷ R43.\r\nhẹn 15/5/2024 làm tiếp.",
      "bill": 0,
      "_id": {
        "$oid": "6627c2b042e66b9f8224f836"
      }
    }
  ],
  "__v": 6
},
{
  "_id": {
    "$oid": "65fa548a42e66b9f8224f5aa"
  },
  "fullname": "HUỲNH PHỤNG",
  "birthyear": 1960,
  "phone": "0775754961",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-18T17:00:00.000Z"
      },
      "diagnoses": "mất răng, răng sâu, vỡ lớn",
      "cures": "khám tư vấn, hẹn nhổ răng",
      "bill": 0,
      "_id": {
        "$oid": "65fa548a42e66b9f8224f5ab"
      }
    },
    {
      "date": {
        "$date": "2024-03-19T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "nhổ răng R13\r\nHA=125/77. M=77",
      "bill": 200000,
      "_id": {
        "$oid": "65fa54bf42e66b9f8224f5b0"
      }
    },
    {
      "date": {
        "$date": "2024-04-01T17:00:00.000Z"
      },
      "diagnoses": "chân răng",
      "cures": "nhổ chân răng 15, 17\r\nHA= 123/79, M=83",
      "bill": 400000,
      "_id": {
        "$oid": "660beab642e66b9f8224f603"
      }
    },
    {
      "date": {
        "$date": "2024-04-12T17:00:00.000Z"
      },
      "diagnoses": "chân răng 28 vỡ lớn",
      "cures": "nhổ chân răng 28 ( miễn phí ), \r\nlấy dấu sơ khởi HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "661a430442e66b9f8224f715"
      }
    },
    {
      "date": {
        "$date": "2024-06-04T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm hàm trên",
      "cures": "lấy dấu sơ khởi HT, HD.\r\nđặt cọc 2 triệu.",
      "bill": 2000000,
      "_id": {
        "$oid": "667101ba42e66b9f8224fb49"
      }
    },
    {
      "date": {
        "$date": "2024-06-07T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm HT",
      "cures": "lấy dấu sau cùng HT.\r\ncắn sáp HT, so màu răng, chọn màu răng Mỹ Justi màu 66.",
      "bill": 0,
      "_id": {
        "$oid": "6671026342e66b9f8224fb4e"
      }
    },
    {
      "date": {
        "$date": "2024-06-10T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn bộ HT",
      "cures": "thử phục hình sáp HT ( 14R Justi màu 66 ).\r\ngửi ép nhựa cứng loại khó gãy.",
      "bill": 0,
      "_id": {
        "$oid": "6671038e42e66b9f8224fb53"
      }
    },
    {
      "date": {
        "$date": "2024-06-17T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm HT",
      "cures": "giao hàm PHTL TH HT 14R Justi màu 66.\r\nép loại nhựa cứng khó gãy.\r\ntrả thêm 1,5 triệu.",
      "bill": 1500000,
      "_id": {
        "$oid": "667103e642e66b9f8224fb58"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "65fd4dc842e66b9f8224f5d0"
  },
  "fullname": "LÊ ĐÌNH CHƯƠNG",
  "birthyear": 1982,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-21T17:00:00.000Z"
      },
      "diagnoses": "R16 lấy tuỷ từ hồi nhỏ, gãy ngang.",
      "cures": "trám mặt chân răng R16 GIC.",
      "bill": 150000,
      "_id": {
        "$oid": "65fd4dc842e66b9f8224f5d1"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6601504a42e66b9f8224f5d3"
  },
  "fullname": "TRIỆU MUỘI",
  "birthyear": 1959,
  "phone": "0772073965",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-19T17:00:00.000Z"
      },
      "diagnoses": "nha chu viêm răng lung lay",
      "cures": "khám tư vấn, hẹn nhổ răng lung lay",
      "bill": 0,
      "_id": {
        "$oid": "6601504a42e66b9f8224f5d4"
      }
    },
    {
      "date": {
        "$date": "2024-03-24T17:00:00.000Z"
      },
      "diagnoses": "răng lung lay",
      "cures": "nhổ răng R43 lung lay độ 3.\r\nHA=107/75, M=95.",
      "bill": 200000,
      "_id": {
        "$oid": "660150a542e66b9f8224f5d9"
      }
    },
    {
      "date": {
        "$date": "2024-03-31T17:00:00.000Z"
      },
      "diagnoses": "viêm nha chu R44, R lung lay độ 3.\r\n(HA=130/75) (M=101)",
      "cures": "nhổ răng R44 lung lay",
      "bill": 200000,
      "_id": {
        "$oid": "660be01042e66b9f8224f5f2"
      }
    },
    {
      "date": {
        "$date": "2024-05-14T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn bộ HT\r\nmât răng bán phần HD.",
      "cures": "lấy dấu sơ khởi HT, HD.",
      "bill": 0,
      "_id": {
        "$oid": "6644832542e66b9f8224f97a"
      }
    },
    {
      "date": {
        "$date": "2024-05-17T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "lấy dấu sau cùng HT, HD",
      "bill": 0,
      "_id": {
        "$oid": "664d72d042e66b9f8224f9d6"
      }
    },
    {
      "date": {
        "$date": "2024-05-21T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD",
      "cures": "cắn sáp HT, HD, so màu răng RVN màu A1.\r\nđặt cọc 2 triệu.",
      "bill": 2000000,
      "_id": {
        "$oid": "664d731b42e66b9f8224f9db"
      }
    },
    {
      "date": {
        "$date": "2024-05-24T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "thử răng HT, HD.\r\nrăng hàm 2 bị xéo đi xuống, gửi labo lên răng lại.",
      "bill": 0,
      "_id": {
        "$oid": "665835cb42e66b9f8224faaf"
      }
    },
    {
      "date": {
        "$date": "2024-05-27T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "thử lại hàm sáp HT, HD\r\nR VN, A1.",
      "bill": 0,
      "_id": {
        "$oid": "6658383042e66b9f8224fab4"
      }
    },
    {
      "date": {
        "$date": "2024-05-29T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "giao hàm PHTL HT, HD.\r\nHT 13R + HD 10R. ( R VN, A1 )\r\nTặng 1 tube Fixodent + 4 viên ngâm hàm giả.",
      "bill": 1450000,
      "_id": {
        "$oid": "665838b942e66b9f8224fab9"
      }
    }
  ],
  "__v": 8
},
{
  "_id": {
    "$oid": "660bdf1242e66b9f8224f5ec"
  },
  "fullname": "TRƯƠNG THỊ THẾ THANH",
  "birthyear": 1946,
  "phone": "0976002064",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-31T17:00:00.000Z"
      },
      "diagnoses": "viêm quanh chóp cấp R 34",
      "cures": "gây tê mở tuỷ R34, SSOT bơm rửa ống tuỷ,\r\nmở tuỷ để trống, tặng chai nước muối sinh lý.",
      "bill": 0,
      "_id": {
        "$oid": "660bdf1242e66b9f8224f5ed"
      }
    },
    {
      "date": {
        "$date": "2024-04-03T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34, quay Ca (OH)2, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "660e908d42e66b9f8224f614"
      }
    },
    {
      "date": {
        "$date": "2024-04-10T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "66179bef42e66b9f8224f6b7"
      }
    },
    {
      "date": {
        "$date": "2024-04-17T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "bơm rửa ống tuỷ, SSOT R34.",
      "bill": 0,
      "_id": {
        "$oid": "6620a82342e66b9f8224f7ea"
      }
    },
    {
      "date": {
        "$date": "2024-04-24T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "SSOT bơm rửa ống tuỷ R34, trám tạm eugenate.\r\nHẹn thứ 5 lúc 9g (16/5/24) làm tiếp.",
      "bill": 0,
      "_id": {
        "$oid": "663cae1342e66b9f8224f871"
      }
    },
    {
      "date": {
        "$date": "2024-05-13T17:00:00.000Z"
      },
      "diagnoses": "endo R35\r\nBN đau nhói vùng chóp chân răng, lan dọc bờ xương hàm dưới bên trái.",
      "cures": "đưa BN đi chụp phim toàn cảnh, có phản ứng tụ cốt quanh chóp chân răng.\r\nTheo dõi đau dây thần kinh số 5 ( nhánh 53 ), điều trị vitamin 3B 1 tuần.\r\nUống mỗi ngày 2 lần, mỗi lần 1v.",
      "bill": 0,
      "_id": {
        "$oid": "66432dc642e66b9f8224f8e1"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "660beb0042e66b9f8224f605"
  },
  "fullname": "LÝ THANH TÂM",
  "birthyear": 1972,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-01T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, vết dính nhiều",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "660beb0042e66b9f8224f606"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "660bedaf42e66b9f8224f609"
  },
  "fullname": "NGUYỄN THỊ THUÝ",
  "birthyear": 1978,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-01T17:00:00.000Z"
      },
      "diagnoses": "endo R11, R11 có miếng trám Co lớn",
      "cures": "gây tê mở tuỷ R11, SSOT bơm rửa ống tuỷ R11.",
      "bill": 0,
      "_id": {
        "$oid": "660bedaf42e66b9f8224f60a"
      }
    },
    {
      "date": {
        "$date": "2024-04-08T17:00:00.000Z"
      },
      "diagnoses": "endo R11",
      "cures": "bơm rửa ống tuỷ SSOT, quay Ca (OH)2, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6614c35f42e66b9f8224f687"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "66111ece42e66b9f8224f64a"
  },
  "fullname": "VÕ THỊ BÍCH DUYÊN",
  "birthyear": 1993,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-03T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "CVR + ĐBR, lấy dấu HT, HD làm máng tẩy",
      "bill": 400000,
      "_id": {
        "$oid": "66111ece42e66b9f8224f64b"
      }
    },
    {
      "date": {
        "$date": "2023-02-07T17:00:00.000Z"
      },
      "diagnoses": "tẩy trắng răng",
      "cures": "giao cặp máng tẩy + 2 ống thuốc tẩy opalescence 15%",
      "bill": 1000000,
      "_id": {
        "$oid": "66111f4142e66b9f8224f650"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6611201242e66b9f8224f658"
  },
  "fullname": "NGÔ HUỆ NGA",
  "birthyear": 1968,
  "phone": "0777058318",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-08T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD.",
      "cures": "khám tư vấn",
      "bill": 0,
      "_id": {
        "$oid": "6611201242e66b9f8224f659"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6613cee842e66b9f8224f66b"
  },
  "fullname": "LÊ MINH TÂM",
  "birthyear": 1954,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-01T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "lấy dấu sơ khởi HT, HD, gửi labo làm khay cá nhân HT, so màu răng A4 Dentsply.",
      "bill": 0,
      "_id": {
        "$oid": "6613cee842e66b9f8224f66c"
      }
    },
    {
      "date": {
        "$date": "2024-04-05T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "lấy dấu sau cùng HT, cắn sáp HT, so màu răng Excellence A4, đặt cọc 2 triệu.",
      "bill": 2000000,
      "_id": {
        "$oid": "6613cf9742e66b9f8224f671"
      }
    },
    {
      "date": {
        "$date": "2024-04-07T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT 4R nhựa dẻo",
      "cures": "thử hàm sáp HT, 4R A4 Excellence.\r\nlấy dấu lại HD để làm hàm tháo lắp 1R cửa nhựa cứng.",
      "bill": 0,
      "_id": {
        "$oid": "6613d09642e66b9f8224f67b"
      }
    },
    {
      "date": {
        "$date": "2024-04-10T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "giao hàm PHTL HT dẻo 4R cửa (Dentsply Excellence A4)\r\ngiao hàm PHTL HD 1R, R31, RVN, hàm cứng (miễn phí).\r\nChi phí= HT 3tr + HD miễn phí.",
      "bill": 1000000,
      "_id": {
        "$oid": "6617b2fc42e66b9f8224f6e5"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "6616135242e66b9f8224f6ab"
  },
  "fullname": "VƯƠNG DÂN HÀO",
  "birthyear": 1994,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-09T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 500000,
      "_id": {
        "$oid": "6616135242e66b9f8224f6ac"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6616790842e66b9f8224f6ae"
  },
  "fullname": "MẠNH BỘI VÂN",
  "birthyear": 1992,
  "phone": "0903756863",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-09T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng, nhổ mảnh răng sữa sót (chân răng 85),\r\ntrám lại Co LC miếng trám kẽ giữa vùng R cửa HD.\r\n400k + 100k + 200k.",
      "bill": 700000,
      "_id": {
        "$oid": "6616790842e66b9f8224f6af"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "661762ec42e66b9f8224f6b1"
  },
  "fullname": "LÝ PHỤNG HOA",
  "birthyear": 1987,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-10T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu nhẹ",
      "cures": "đánh bóng răng",
      "bill": 100000,
      "_id": {
        "$oid": "661762ec42e66b9f8224f6b2"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66179ef842e66b9f8224f6ce"
  },
  "fullname": "HỒ NGUYỆT KHAI",
  "birthyear": 1963,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-06-18T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "lấy dấu HT, HD, so màu răng R Justi màu 66.",
      "bill": 0,
      "_id": {
        "$oid": "66179ef842e66b9f8224f6cf"
      }
    },
    {
      "date": {
        "$date": "2023-06-20T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "thử hàm sáp HT 6R Justi màu 66, gửi labo ép dẻo.",
      "bill": 0,
      "_id": {
        "$oid": "66179f7e42e66b9f8224f6d4"
      }
    },
    {
      "date": {
        "$date": "2023-06-22T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "giao PHTLHT dẻo 6R Justi màu 66",
      "bill": 3500000,
      "_id": {
        "$oid": "66179ffb42e66b9f8224f6db"
      }
    },
    {
      "date": {
        "$date": "2024-08-07T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng,\r\ntặng 1 vỉ = 6 viên ngâm tẩy hàm giả",
      "bill": 400000,
      "_id": {
        "$oid": "66b484cb42e66b9f8224ff03"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "6617b64b42e66b9f8224f6f1"
  },
  "fullname": "CHÂU HUỆ PHẤN",
  "birthyear": 1974,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-01-31T17:00:00.000Z"
      },
      "diagnoses": "R pivot sứ R21 rớt",
      "cures": "gắn lại răng sứ pivot R21 rớt",
      "bill": 100000,
      "_id": {
        "$oid": "6617b64b42e66b9f8224f6f2"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6617bc7442e66b9f8224f6fb"
  },
  "fullname": "ÔNG THỊ HOA",
  "birthyear": 1960,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-13T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD gãy 2 móc",
      "cures": "lấy dấu HD ( có hàm giả trong đó ) để thêm 2 móc.",
      "bill": 0,
      "_id": {
        "$oid": "6617bc7442e66b9f8224f6fc"
      }
    },
    {
      "date": {
        "$date": "2023-02-15T17:00:00.000Z"
      },
      "diagnoses": "hàm giả HD thiếu 2 móc",
      "cures": "giao lại hàm giả HD thêm 2 móc",
      "bill": 200000,
      "_id": {
        "$oid": "6617bd6d42e66b9f8224f701"
      }
    },
    {
      "date": {
        "$date": "2024-04-09T17:00:00.000Z"
      },
      "diagnoses": "PHTLHD gãy móc R43",
      "cures": "lấy dấu hàm dưới có luôn hàm giả, gửi labo thêm móc.",
      "bill": 0,
      "_id": {
        "$oid": "6617c36242e66b9f8224f709"
      }
    },
    {
      "date": {
        "$date": "2024-04-10T17:00:00.000Z"
      },
      "diagnoses": "hàm giả HD gãy móc",
      "cures": "giao lại hàm giả HD thêm móc R43 cho bệnh nhân.",
      "bill": 100000,
      "_id": {
        "$oid": "6617c39842e66b9f8224f70e"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "661a445842e66b9f8224f721"
  },
  "fullname": "NGUYỄN MINH ĐỨC",
  "birthyear": 1981,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-12T17:00:00.000Z"
      },
      "diagnoses": "R36 sâu răng vỡ lớn",
      "cures": "trám răng GIC, trám vát R36 vỡ lớn mặt trong.",
      "bill": 300000,
      "_id": {
        "$oid": "661a445842e66b9f8224f722"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "661a460542e66b9f8224f726"
  },
  "fullname": "TRẦN THỊ THANH",
  "birthyear": 1963,
  "phone": "0906265920",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-08T17:00:00.000Z"
      },
      "diagnoses": "R34,35 bọc mão sứ gãy cùi răng,\r\nhẹn nhổ chân răng 35,\r\nlấy tuỷ chân răng 34",
      "cures": "mở thông ống tuỷ chân răng 34, SSOT bơm rửa ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "661a460542e66b9f8224f727"
      }
    },
    {
      "date": {
        "$date": "2024-04-16T17:00:00.000Z"
      },
      "diagnoses": "endo R34",
      "cures": "bơm rửa ống tuỷ SSOT R34.",
      "bill": 0,
      "_id": {
        "$oid": "661f541742e66b9f8224f7ba"
      }
    },
    {
      "date": {
        "$date": "2024-04-22T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 34",
      "cures": "SSOT bơm rửa ống tuỷ chân răng 34, trám bít ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "66447fe542e66b9f8224f958"
      }
    },
    {
      "date": {
        "$date": "2024-05-14T17:00:00.000Z"
      },
      "diagnoses": "chân răng 34",
      "cures": "lấy dấu ống mang chốt chân răng 34.",
      "bill": 0,
      "_id": {
        "$oid": "6644803c42e66b9f8224f95d"
      }
    },
    {
      "date": {
        "$date": "2024-05-16T17:00:00.000Z"
      },
      "diagnoses": "R sứ 33",
      "cures": "gắn cùi giả R33, mài cùi giả, mài chỉnh hàm dẻo HD\r\nlấy dấu hàm giả HT, lấy dấu cùi giả R33",
      "bill": 0,
      "_id": {
        "$oid": "664d74d542e66b9f8224f9e0"
      }
    },
    {
      "date": {
        "$date": "2024-05-21T17:00:00.000Z"
      },
      "diagnoses": "mất răng",
      "cures": "gắn mão sứ R33 (A2)\r\nlấy dấu HT, HD ( có hàm giả )",
      "bill": 0,
      "_id": {
        "$oid": "664d755a42e66b9f8224f9e5"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "661a5e4d42e66b9f8224f742"
  },
  "fullname": "ĐẶNG KHÁNH GIAI",
  "birthyear": 1996,
  "phone": "0777732136",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-06T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R26 mặt nhai",
      "cures": "trám răng GIC R26 mặt nhai",
      "bill": 200000,
      "_id": {
        "$oid": "661a5e4d42e66b9f8224f743"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "661a5ede42e66b9f8224f746"
  },
  "fullname": "LƯ HUY",
  "birthyear": 1965,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-05T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm HT, HD",
      "cures": "lấy dấu sơ khởi HT, HD.\r\nViệt kiều Mỹ, bà con anh Dao Đạo Minh.",
      "bill": 0,
      "_id": {
        "$oid": "661a5ede42e66b9f8224f747"
      }
    },
    {
      "date": {
        "$date": "2023-10-08T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm HT, HD.",
      "cures": "cắn sáp HT, HD, so màu răng giả R Justi màu 65.",
      "bill": 0,
      "_id": {
        "$oid": "661a5f6c42e66b9f8224f74e"
      }
    },
    {
      "date": {
        "$date": "2023-10-09T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm HT, HD.",
      "cures": "thử hàm răng sáp toàn hàm HT, HD.\r\ngửi labo ép trước hàm sáp HT.\r\nlấy dấu sau cùng HT.",
      "bill": 0,
      "_id": {
        "$oid": "661a5fe442e66b9f8224f753"
      }
    },
    {
      "date": {
        "$date": "2023-10-11T17:00:00.000Z"
      },
      "diagnoses": "mất răng toàn hàm HT, HD.",
      "cures": "thử hàm răng toàn hàm",
      "bill": 0,
      "_id": {
        "$oid": "661b3fea42e66b9f8224f76a"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "661a60a542e66b9f8224f756"
  },
  "fullname": "THIỀU THỊ LỆ THUỶ",
  "birthyear": 1969,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-10-03T17:00:00.000Z"
      },
      "diagnoses": "endo R33, 42",
      "cures": "gây tê endo R33, 42, SSOT bơm rửa ống tuỷ 2R.\r\nquay Ca (OH)2, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "661a60a542e66b9f8224f757"
      }
    },
    {
      "date": {
        "$date": "2023-10-10T17:00:00.000Z"
      },
      "diagnoses": "endo R33, 42.",
      "cures": "SSOT bơm rửa ống tuỷ R33, 42.",
      "bill": 0,
      "_id": {
        "$oid": "661a610142e66b9f8224f75c"
      }
    },
    {
      "date": {
        "$date": "2023-10-17T17:00:00.000Z"
      },
      "diagnoses": "endo R33, 42",
      "cures": "bơm rửa ống tuỷ SSOT R33, 42.",
      "bill": 0,
      "_id": {
        "$oid": "661a615942e66b9f8224f761"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "661c942b42e66b9f8224f76f"
  },
  "fullname": "QUÁCH KIM MỸ",
  "birthyear": 1965,
  "phone": "0707853333",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-14T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "nhổ răng R15 vỡ lớn",
      "bill": 200000,
      "_id": {
        "$oid": "661c942b42e66b9f8224f770"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "661df77f42e66b9f8224f78d"
  },
  "fullname": "NGUYỄN THANH TOÀN",
  "birthyear": 1981,
  "phone": "0903315892",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-15T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R38 (R trụ của cầu sứ 5 đơn vị ).",
      "cures": "dặt thuốc diệt tuỷ As R38, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "661df77f42e66b9f8224f78e"
      }
    },
    {
      "date": {
        "$date": "2024-04-28T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 38",
      "cures": "SSOT bơm rửa ông tuỷ chân răng 38.",
      "bill": 0,
      "_id": {
        "$oid": "66432bfe42e66b9f8224f8d7"
      }
    },
    {
      "date": {
        "$date": "2024-05-12T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 38",
      "cures": "SSOT bơm rửa ông tuỷ chân răng 38.",
      "bill": 0,
      "_id": {
        "$oid": "66432c4642e66b9f8224f8dc"
      }
    },
    {
      "date": {
        "$date": "2024-05-19T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 38, viêm nướu",
      "cures": "trám kết thúc R endo ( chân răng 38 ) GIC ( 500k )\r\ncạo vôi răng + đánh bóng răng ( 300k )",
      "bill": 800000,
      "_id": {
        "$oid": "664be61b42e66b9f8224f999"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "661dfba042e66b9f8224f795"
  },
  "fullname": "LƯ PHỤNG",
  "birthyear": 1969,
  "phone": "0793407489",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-14T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "trám răng GIC hai răng: R 24(X) + R 46 (X).",
      "bill": 500000,
      "_id": {
        "$oid": "661dfba042e66b9f8224f796"
      }
    },
    {
      "date": {
        "$date": "2024-04-17T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "6620a85542e66b9f8224f7ef"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "661e30c242e66b9f8224f798"
  },
  "fullname": "NGUYỄN TẤN THANH",
  "birthyear": 1971,
  "phone": "0901831080",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-15T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R15",
      "cures": "trám răng R15 (X) GIC\r\nlấy dấu HT, HD làm hàm dẻo R21 (giá 1,8tr) R Justi",
      "bill": 300000,
      "_id": {
        "$oid": "661e30c242e66b9f8224f799"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "661f351342e66b9f8224f7af"
  },
  "fullname": "NGÔ THỤC TRINH",
  "birthyear": 1967,
  "phone": "0896318951",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-16T17:00:00.000Z"
      },
      "diagnoses": "khám răng \r\nsâu răng R16, 17, theo dõi viêm tuỷ mãn.\r\nviêm nướu kẽ giữa R46, 47.",
      "cures": "gửi chụp XQ R16,17, R46, 47.\r\nTư vấn bệnh nhân quay về điều trị răng tại phòng nha khoa trước đây hay đến.",
      "bill": 0,
      "_id": {
        "$oid": "661f351342e66b9f8224f7b0"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "661f8aaa42e66b9f8224f7be"
  },
  "fullname": "NGUYỄN THỊ TƯỜNG VÂN",
  "birthyear": 1962,
  "phone": "0909831869",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-16T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "gây tê, trám răng GIC cổ răng R35.\r\ntrám tạm eugenate R 37 (X)",
      "bill": 300000,
      "_id": {
        "$oid": "661f8aaa42e66b9f8224f7bf"
      }
    },
    {
      "date": {
        "$date": "2024-04-26T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ cấp R35",
      "cures": "gây tê lấy tuỷ R35, SSOT bơm rửa ống tuỷ R35, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "662d08fb42e66b9f8224f85f"
      }
    },
    {
      "date": {
        "$date": "2024-04-28T17:00:00.000Z"
      },
      "diagnoses": "endo R35",
      "cures": "bơm rửa ống tuỷ, SSOT R 35.",
      "bill": 0,
      "_id": {
        "$oid": "663d88d242e66b9f8224f887"
      }
    },
    {
      "date": {
        "$date": "2024-05-09T17:00:00.000Z"
      },
      "diagnoses": "endo R35",
      "cures": "bơm rửa ống tuỷ SSOT R35",
      "bill": 0,
      "_id": {
        "$oid": "6643297442e66b9f8224f8be"
      }
    },
    {
      "date": {
        "$date": "2024-05-13T17:00:00.000Z"
      },
      "diagnoses": "endo R35",
      "cures": "SSOT bơm rửa ống tuỷ, trám bít ống tuỷ R35.",
      "bill": 0,
      "_id": {
        "$oid": "664329d742e66b9f8224f8c3"
      }
    },
    {
      "date": {
        "$date": "2024-05-20T17:00:00.000Z"
      },
      "diagnoses": "endo R35",
      "cures": "trám kết thúc răng endo R35 GIC",
      "bill": 800000,
      "_id": {
        "$oid": "664c170a42e66b9f8224f9b2"
      }
    },
    {
      "date": {
        "$date": "2024-07-03T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ cấp R37",
      "cures": "mở tuỷ buồng, đặt As R 37, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66a06a3942e66b9f8224fdc1"
      }
    },
    {
      "date": {
        "$date": "2024-07-03T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ cấp R37",
      "cures": "mở tuỷ buồng, đặt As R 37, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66a06a3f42e66b9f8224fdc4"
      }
    },
    {
      "date": {
        "$date": "2024-07-04T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ cấp R37",
      "cures": "mở tuỷ R37, SSOT bơm rửa ống tuỷ, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66a06aa742e66b9f8224fdc9"
      }
    },
    {
      "date": {
        "$date": "2024-07-08T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "SSOT bơm rửa ống tuỷ R37, gửi XQ R37, trám Eu.\r\n( chỉ mới thông được ống tuỷ xa R37 ).",
      "bill": 0,
      "_id": {
        "$oid": "66a074b742e66b9f8224fdd5"
      }
    },
    {
      "date": {
        "$date": "2024-07-15T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "SSOT bơm rửa ống tuỷ R37 (2 ống tuỷ X,G), trám tạm Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66a0751842e66b9f8224fdda"
      }
    },
    {
      "date": {
        "$date": "2024-07-22T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "SSOT ( số 30 ), bơm rửa ống tuỷ, trám tạm Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66a0759242e66b9f8224fddf"
      }
    },
    {
      "date": {
        "$date": "2024-07-29T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "bơm rửa ống tuỷ SSOT R37 ( 2 ống tuỷ ), trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "66a8a51242e66b9f8224fe57"
      }
    }
  ],
  "__v": 12
},
{
  "_id": {
    "$oid": "661f951942e66b9f8224f7d5"
  },
  "fullname": "LÂM THUÝ QUỲNH",
  "birthyear": 1984,
  "phone": "0906368821",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-16T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng",
      "cures": "khám răng tư vấn",
      "bill": 0,
      "_id": {
        "$oid": "661f951942e66b9f8224f7d6"
      }
    },
    {
      "date": {
        "$date": "2024-04-21T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "đặt As R37, trám eugenate.\r\ncạo vôi răng lần 1.",
      "bill": 400000,
      "_id": {
        "$oid": "664c2baa42e66b9f8224f9bd"
      }
    },
    {
      "date": {
        "$date": "2024-04-24T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "mở tuỷ R37, SSOT, bơm rửa ống tuỷ, trám eugenate.\r\ncạo vôi răng lần 2 + đánh bóng răng.",
      "bill": 0,
      "_id": {
        "$oid": "664c2c4842e66b9f8224f9c2"
      }
    },
    {
      "date": {
        "$date": "2024-05-09T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "bơm rửa ống tuỷ, SSOT R37, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "664c2cab42e66b9f8224f9c7"
      }
    },
    {
      "date": {
        "$date": "2024-05-13T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "SSOT, bơm rửa ống tuỷ R37, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "664c2cf642e66b9f8224f9cc"
      }
    },
    {
      "date": {
        "$date": "2024-05-20T17:00:00.000Z"
      },
      "diagnoses": "endo R37, viêm quanh chóp cấp R37.",
      "cures": "SSOT, bơm rửa ống tuỷ R37, để trống.",
      "bill": 0,
      "_id": {
        "$oid": "664c2d6242e66b9f8224f9d1"
      }
    },
    {
      "date": {
        "$date": "2024-05-23T17:00:00.000Z"
      },
      "diagnoses": "endo R37",
      "cures": "SSOT bơm rửa ống tuỷ R37, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6651203642e66b9f8224fa1d"
      }
    },
    {
      "date": {
        "$date": "2024-05-26T17:00:00.000Z"
      },
      "diagnoses": "endo R 37",
      "cures": "SSOT bơm rửa ống tuỷ R37, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66555a1d42e66b9f8224fa51"
      }
    }
  ],
  "__v": 7
},
{
  "_id": {
    "$oid": "6621e80042e66b9f8224f7ff"
  },
  "fullname": "TRIỆU TRÍ MINH",
  "birthyear": 1900,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-15T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "khám tư vấn, hẹn cạo vôi răng",
      "bill": 0,
      "_id": {
        "$oid": "6621e80042e66b9f8224f800"
      }
    },
    {
      "date": {
        "$date": "2024-04-18T17:00:00.000Z"
      },
      "diagnoses": "mòn cổ răng, viêm nướu",
      "cures": "trám LC cổ răng R34 màu A2, cạo vôi răng + đánh bóng răng.\r\n(300k + 400k)",
      "bill": 700000,
      "_id": {
        "$oid": "6623a35742e66b9f8224f831"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6623712742e66b9f8224f808"
  },
  "fullname": "NGUYỄN THANH TUẤN",
  "birthyear": 1986,
  "phone": "0939471479",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-12T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu sâu răng",
      "cures": "khám tư vấn, hẹn cạo vôi răng, trám răng.",
      "bill": 0,
      "_id": {
        "$oid": "6623712742e66b9f8224f809"
      }
    },
    {
      "date": {
        "$date": "2024-04-19T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng, trám răng GIC R18 nhai\r\n(400k + 300k = 700k )",
      "bill": 700000,
      "_id": {
        "$oid": "6623718942e66b9f8224f80e"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6623723f42e66b9f8224f815"
  },
  "fullname": "NGUYỄN VĂN LIỄN",
  "birthyear": 1965,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-18T17:00:00.000Z"
      },
      "diagnoses": "R11 gãy ngang",
      "cures": "gây tê mở tuỷ, SSOT bơm rửa ống tuỷ R 11.",
      "bill": 0,
      "_id": {
        "$oid": "6623723f42e66b9f8224f816"
      }
    },
    {
      "date": {
        "$date": "2024-04-21T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng R11",
      "cures": "SSOT bơm rửa ông tuỷ R11.",
      "bill": 0,
      "_id": {
        "$oid": "66432a9342e66b9f8224f8c8"
      }
    },
    {
      "date": {
        "$date": "2024-04-28T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 11",
      "cures": "SSOT bơm rửa ống tuỷ chân răng 11, quay Ca(OH)2.",
      "bill": 0,
      "_id": {
        "$oid": "66432b3d42e66b9f8224f8cd"
      }
    },
    {
      "date": {
        "$date": "2024-05-12T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 11",
      "cures": "trám bít ống tuỷ chân răng 11, lấy dấu ống mang chốt làm cùi giả chân răng 11.",
      "bill": 0,
      "_id": {
        "$oid": "66432b9042e66b9f8224f8d2"
      }
    },
    {
      "date": {
        "$date": "2024-05-15T17:00:00.000Z"
      },
      "diagnoses": "PHCĐ R sứ R21\r\nviêm nướu, vết dính nhiều do hút thuốc.",
      "cures": "cạo vôi răng + đánh bóng răng ( free )\r\ngắn cùi giả R21, mài cùi, lấy dấu HT.",
      "bill": 0,
      "_id": {
        "$oid": "664be78042e66b9f8224f9a9"
      }
    },
    {
      "date": {
        "$date": "2024-05-19T17:00:00.000Z"
      },
      "diagnoses": "R sứ 21",
      "cures": "thử sườn R sứ 21, cắn sáp, so màu răng, màu A3.5",
      "bill": 0,
      "_id": {
        "$oid": "664f2f5e42e66b9f8224fa02"
      }
    },
    {
      "date": {
        "$date": "2024-05-22T17:00:00.000Z"
      },
      "diagnoses": "R sứ 21",
      "cures": "gắn R sứ 21, màu A3.5.",
      "bill": 1500000,
      "_id": {
        "$oid": "664f304442e66b9f8224fa07"
      }
    }
  ],
  "__v": 6
},
{
  "_id": {
    "$oid": "6623967142e66b9f8224f822"
  },
  "fullname": "LƯU DUNG",
  "birthyear": 1965,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-18T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ cấp R11",
      "cures": "gây tê endo R11, SSOT bơm rửa ống tuỷ, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6623967142e66b9f8224f823"
      }
    },
    {
      "date": {
        "$date": "2024-04-26T17:00:00.000Z"
      },
      "diagnoses": "endo R11",
      "cures": "bơm rửa ống tuỷ R 11, để trống, không trám tạm.",
      "bill": 0,
      "_id": {
        "$oid": "663f5e0342e66b9f8224f8a4"
      }
    },
    {
      "date": {
        "$date": "2024-05-10T17:00:00.000Z"
      },
      "diagnoses": "endo R 11",
      "cures": "bơm rửa ống tuỷ, SSOT R11, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "664191c042e66b9f8224f8b4"
      }
    },
    {
      "date": {
        "$date": "2024-05-17T17:00:00.000Z"
      },
      "diagnoses": "endo R11",
      "cures": "bơm rửa ống tuỷ R11, SSOT, quay Ca(OH)2, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "665d494b42e66b9f8224facf"
      }
    },
    {
      "date": {
        "$date": "2024-05-31T17:00:00.000Z"
      },
      "diagnoses": "endo R11",
      "cures": "SSOT bơm rửa ống tuỷ R11, quay Ca(OH)2, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "665d49e842e66b9f8224fad4"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "6623a1d242e66b9f8224f825"
  },
  "fullname": "PHẠM THỤC NHÀN",
  "birthyear": 1986,
  "phone": "0906651328",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-19T17:00:00.000Z"
      },
      "diagnoses": "mẻ rìa cắn R42",
      "cures": "trám LC rìa cắn mẻ R42 màu A2, mài láng rìa cắn R41, 31, 32.",
      "bill": 200000,
      "_id": {
        "$oid": "6623a1d242e66b9f8224f826"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "662b2fbe42e66b9f8224f83a"
  },
  "fullname": "LIEN ON",
  "birthyear": 1949,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-25T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, vết dính nhiều.",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 500000,
      "_id": {
        "$oid": "662b2fbe42e66b9f8224f83b"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "662d07cc42e66b9f8224f843"
  },
  "fullname": "LÂM KIM ANH",
  "birthyear": 1973,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-26T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng 26.",
      "cures": "cạo vôi răng vùng răng 26,27, HDVSRM vùng răng này.\r\ntrám GIC mặt gần R28.\r\nđặt As R26 tại lỗ sâu cổ răng trong.",
      "bill": 200000,
      "_id": {
        "$oid": "662d07cc42e66b9f8224f844"
      }
    },
    {
      "date": {
        "$date": "2024-05-10T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "SSOT bơm rửa ống tuỷ R26, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "664f2e2d42e66b9f8224f9f1"
      }
    },
    {
      "date": {
        "$date": "2024-05-17T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "SSOT bơm rửa ống tuỷ R26, 2 ống tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "664f2e7b42e66b9f8224f9f6"
      }
    },
    {
      "date": {
        "$date": "2024-05-22T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "SSOT, bơm rửa ống tuỷ R26, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "664f2eca42e66b9f8224f9fb"
      }
    },
    {
      "date": {
        "$date": "2024-06-10T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "trám bít ống tuỷ R26, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "669ba9ad42e66b9f8224fd65"
      }
    },
    {
      "date": {
        "$date": "2024-07-19T17:00:00.000Z"
      },
      "diagnoses": "endo R26",
      "cures": "trám kết thúc R26 ( mặt nhai + cổ răng trong ) GIC.",
      "bill": 800000,
      "_id": {
        "$oid": "669ba9e442e66b9f8224fd6a"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "662f2cf042e66b9f8224f862"
  },
  "fullname": "TRẦN THANH THẢO TRẦM",
  "birthyear": 1984,
  "phone": "0907229609",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-28T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 500000,
      "_id": {
        "$oid": "662f2cf042e66b9f8224f863"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "662f939042e66b9f8224f86a"
  },
  "fullname": "NGUYỄN NGỌC HUỲNH NHUNG",
  "birthyear": 1997,
  "phone": "0779697811",
  "treatments": [
    {
      "date": {
        "$date": "2024-04-28T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "662f939042e66b9f8224f86b"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "663cb93b42e66b9f8224f87d"
  },
  "fullname": "TRẦN THỊ TUYẾT XUÂN",
  "birthyear": 1967,
  "phone": "0764804020",
  "treatments": [
    {
      "date": {
        "$date": "2024-03-31T17:00:00.000Z"
      },
      "diagnoses": "mất răng, sâu răng",
      "cures": "khám tư vấn, nhổ chân răng 14.",
      "bill": 200000,
      "_id": {
        "$oid": "663cb93b42e66b9f8224f87e"
      }
    },
    {
      "date": {
        "$date": "2024-05-19T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "lấy dấu HT, HD",
      "bill": 0,
      "_id": {
        "$oid": "664ac33142e66b9f8224f994"
      }
    },
    {
      "date": {
        "$date": "2024-06-04T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT, HD",
      "cures": "cắn sáp HT, HD\r\nso màu răng Excellence C2, shop hết răng màu C2 nên thay bằng màu A3.5",
      "bill": 0,
      "_id": {
        "$oid": "6660f70042e66b9f8224fae9"
      }
    },
    {
      "date": {
        "$date": "2024-06-09T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT, HD R Mỹ",
      "cures": "thử hàm sáp HT, HD.\r\ngửi labo ép nhựa dẻo HT trước (5R).",
      "bill": 0,
      "_id": {
        "$oid": "6666bff642e66b9f8224fb07"
      }
    },
    {
      "date": {
        "$date": "2024-06-12T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT dẻo R Mỹ",
      "cures": "giao hàm PHTLHT 5R Excellence, hàm nhựa dẻo, màu A3.5.",
      "bill": 0,
      "_id": {
        "$oid": "6673aee042e66b9f8224fb74"
      }
    },
    {
      "date": {
        "$date": "2024-06-18T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT gây đau",
      "cures": "chỉnh đau hàm giả dẻo HT\r\nBN trả hết số tiền còn lại 750000",
      "bill": 750000,
      "_id": {
        "$oid": "6673af5642e66b9f8224fb79"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "663eeea342e66b9f8224f88f"
  },
  "fullname": "PHAN SIÊU TUẤN",
  "birthyear": 1983,
  "phone": "0903089753",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 26, 37,45,47.\r\nviêm nướu, vôi răng nhiều.",
      "cures": "trám răng GIC R 45 ( nhai ), cạo vôi răng + đánh bóng răng (600k).",
      "bill": 900000,
      "_id": {
        "$oid": "663eeea342e66b9f8224f890"
      }
    },
    {
      "date": {
        "$date": "2024-05-12T17:00:00.000Z"
      },
      "diagnoses": "phim XQ toàn cảnh: R37 viêm quanh chóp mãn, R38 mọc lệch nàm ngang.\r\nR47 sâu răng, mẻ góc xa.",
      "cures": "HDVSRM ( vì bệnh nhân phải về Mỹ, thời gian ngắn ko đủ thời gian điều trị ).",
      "bill": 0,
      "_id": {
        "$oid": "6641879e42e66b9f8224f8a9"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "663f31b042e66b9f8224f892"
  },
  "fullname": "TRẦN QUANG THANH",
  "birthyear": 1974,
  "phone": "0919589629",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 17, 37, vỡ lớn 27.",
      "cures": "trám răng 17, 37 GIC (nhai)",
      "bill": 500000,
      "_id": {
        "$oid": "663f31b042e66b9f8224f893"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6642ce4642e66b9f8224f8b6"
  },
  "fullname": "MAI THỊ ĐANG",
  "birthyear": 1973,
  "phone": "0937298251",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-13T17:00:00.000Z"
      },
      "diagnoses": "R cối lớn HT, HD sâu răng vỡ lớn.\r\nĐo HA = 180/100.",
      "cures": "khám tư vấn, chuyển viện điều trị cao HA.",
      "bill": 0,
      "_id": {
        "$oid": "6642ce4642e66b9f8224f8b7"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6643fe1742e66b9f8224f8e5"
  },
  "fullname": "LÝ THỤC TRINH",
  "birthyear": 1978,
  "phone": "0949419688",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-13T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R37",
      "cures": "trám răng 37 ( nhai ) GIC.",
      "bill": 200000,
      "_id": {
        "$oid": "6643fe1742e66b9f8224f8e6"
      }
    },
    {
      "date": {
        "$date": "2024-07-11T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng R16",
      "cures": "cạo vôi răng + đánh bóng răng ( 400k )\r\ntrám răng R16 (G) GIC ( 300k )",
      "bill": 700000,
      "_id": {
        "$oid": "6690eb3e42e66b9f8224fc59"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "664479f842e66b9f8224f91b"
  },
  "fullname": "CHÂU BỬU VÂN",
  "birthyear": 1987,
  "phone": "0901112145",
  "treatments": [
    {
      "date": {
        "$date": "2023-03-17T17:00:00.000Z"
      },
      "diagnoses": "R28 mọc lệch gây đau",
      "cures": "khám tư vấn, chuyển viện nhổ R28.",
      "bill": 0,
      "_id": {
        "$oid": "664479f842e66b9f8224f91c"
      }
    },
    {
      "date": {
        "$date": "2023-03-28T17:00:00.000Z"
      },
      "diagnoses": "mất răng, cần làm cầu răng sứ từ R45 -> R47.",
      "cures": "gây tê mài cùi R45, R47.\r\nlấy dấu HT, HD, cắn sáp.",
      "bill": 0,
      "_id": {
        "$oid": "66447a8d42e66b9f8224f925"
      }
    },
    {
      "date": {
        "$date": "2023-04-05T17:00:00.000Z"
      },
      "diagnoses": "R trụ 35, 37 đau.",
      "cures": "gây tê nội nha R35, mở tuỷ buồng đặt As R37.\r\nthử sườn cầu răng 3 đơn vị 35->37, cắn sáp.",
      "bill": 0,
      "_id": {
        "$oid": "66447b2f42e66b9f8224f92a"
      }
    },
    {
      "date": {
        "$date": "2023-04-09T17:00:00.000Z"
      },
      "diagnoses": "endo R35, 37",
      "cures": "SSOT bơm rửa ống tuỷ R35.\r\nmở tuỷ R37, SSOT bơm rửa ống tuỷ (3 ống tuỷ)\r\ngắn tạm cầu sứ 3 đơn vị 35-> 37 màu A3.",
      "bill": 0,
      "_id": {
        "$oid": "66447bb042e66b9f8224f92f"
      }
    },
    {
      "date": {
        "$date": "2023-04-17T17:00:00.000Z"
      },
      "diagnoses": "endo R35, 37",
      "cures": "bơm rửa ống tuỷ SSOT R35,37.\r\nmài lại 2 cùi răng cho gọn thấp lại, lấy dấu lại HD.\r\ngắn tạm lại cầu sứ.",
      "bill": 0,
      "_id": {
        "$oid": "66447f4142e66b9f8224f953"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "66447c1c42e66b9f8224f932"
  },
  "fullname": "ĐOÀN ĐẶNG MINH TUÂN",
  "birthyear": 1985,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-04-09T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "66447c1c42e66b9f8224f933"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66447c7542e66b9f8224f936"
  },
  "fullname": "LÝ LÊ QUỲNH HƯƠNG",
  "birthyear": 1997,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-04-10T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "66447c7542e66b9f8224f937"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66447d1d42e66b9f8224f93c"
  },
  "fullname": "TRẦN THỊ TÚ TRINH",
  "birthyear": 1997,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-04-10T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng",
      "cures": "cạo vôi răng + đánh bóng răng.\r\ntrám răng 11 (G) LC, A1.",
      "bill": 700000,
      "_id": {
        "$oid": "66447d1d42e66b9f8224f93d"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66447d8342e66b9f8224f940"
  },
  "fullname": "NGUYỄN THỊ TƯỜNG VÂN",
  "birthyear": 2002,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-04-11T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 300000,
      "_id": {
        "$oid": "66447d8342e66b9f8224f941"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66447de142e66b9f8224f944"
  },
  "fullname": "NGUYỄN HỮU THÀNH",
  "birthyear": 1970,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-04-11T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "caọ vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "66447de142e66b9f8224f945"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66447e7242e66b9f8224f948"
  },
  "fullname": "NGUYỄN ĐÌNH KIỂM",
  "birthyear": 1974,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2022-06-20T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "66447e7242e66b9f8224f949"
      }
    },
    {
      "date": {
        "$date": "2023-04-14T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "664481f042e66b9f8224f971"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "66447eac42e66b9f8224f94b"
  },
  "fullname": "NGUYỄN ĐÌNH QUÂN",
  "birthyear": 2007,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-04-14T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "66447eac42e66b9f8224f94c"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6644838942e66b9f8224f97c"
  },
  "fullname": "LÂM THIỆU TRÂN",
  "birthyear": 1959,
  "phone": "0964912322",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-14T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn răng cửa HT",
      "cures": "khám tư vấn, chuyển bệnh nhân sang BV nhổ răng tuyến bảo hiểm.",
      "bill": 0,
      "_id": {
        "$oid": "6644838942e66b9f8224f97d"
      }
    },
    {
      "date": {
        "$date": "2024-06-03T17:00:00.000Z"
      },
      "diagnoses": "mất răng hàm trên, còn duy nhất R27.\r\nHD còn từ R35 đến R45.",
      "cures": "lấy dấu HT có luôn hàm giả để thêm R13",
      "bill": 0,
      "_id": {
        "$oid": "666af75942e66b9f8224fb23"
      }
    },
    {
      "date": {
        "$date": "2024-06-06T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "giao lại hàm giả cũ HT, labo có thêm 1 răng R13 ( R VN ), giá 350k.\r\nHA= 70/44, M=65.",
      "bill": 350000,
      "_id": {
        "$oid": "666af8c142e66b9f8224fb2f"
      }
    },
    {
      "date": {
        "$date": "2024-06-12T17:00:00.000Z"
      },
      "diagnoses": "R35 sâu răng vỡ lớn",
      "cures": "gây tê lấy tuỷ R35, SSOT bơm rửa ống tuỷ R35, trám eugenate.\r\nHA=98/51, M=72.",
      "bill": 0,
      "_id": {
        "$oid": "666af99f42e66b9f8224fb34"
      }
    },
    {
      "date": {
        "$date": "2024-06-19T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 35",
      "cures": "SSOT, bơm rửa ống tuỷ R35, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6673b21342e66b9f8224fb9c"
      }
    },
    {
      "date": {
        "$date": "2024-06-26T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 35",
      "cures": "SSOT bơm rửa ống tuỷ R35, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6696438142e66b9f8224fcb4"
      }
    },
    {
      "date": {
        "$date": "2024-07-14T17:00:00.000Z"
      },
      "diagnoses": "endo R35",
      "cures": "SSOT bơm rửa ống tuỷ, trám bít ống tuỷ R35 cortisomol, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "669789fc42e66b9f8224fcf4"
      }
    },
    {
      "date": {
        "$date": "2024-07-21T17:00:00.000Z"
      },
      "diagnoses": "endo R35 vỡ lớn, kế hoạch làm cùi giả + R sứ",
      "cures": "khoan ống mang chốt chân răng 35, lấy dấu ống mang chốt HD.",
      "bill": 0,
      "_id": {
        "$oid": "669dd34442e66b9f8224fd71"
      }
    },
    {
      "date": {
        "$date": "2024-07-23T17:00:00.000Z"
      },
      "diagnoses": "R sứ 35",
      "cures": "lấy dấu lại ống mang chốt chân răng R35.",
      "bill": 0,
      "_id": {
        "$oid": "66a0737742e66b9f8224fdce"
      }
    },
    {
      "date": {
        "$date": "2024-07-23T17:00:00.000Z"
      },
      "diagnoses": "R sứ 35",
      "cures": "lấy dấu lại ống mang chốt R35.",
      "bill": 0,
      "_id": {
        "$oid": "66a1a52642e66b9f8224fe0b"
      }
    },
    {
      "date": {
        "$date": "2024-07-25T17:00:00.000Z"
      },
      "diagnoses": "R sứ 35",
      "cures": "gắn cùi giả chân răng 35, mài cùi giả, lấy dấu HD, chọn màu răng A2.",
      "bill": 0,
      "_id": {
        "$oid": "66a3279942e66b9f8224fe17"
      }
    },
    {
      "date": {
        "$date": "2024-07-31T17:00:00.000Z"
      },
      "diagnoses": "mão sứ R35",
      "cures": "gắn mão sứ R35, màu A2+.\r\nlấy dấu sơ khởi HT, gửi labo làm khay cá nhân HT.\r\nhẹn 15/8/2024 làm hàm giả tháo lắp HT.",
      "bill": 1500000,
      "_id": {
        "$oid": "66ab56b942e66b9f8224fe9b"
      }
    }
  ],
  "__v": 11
},
{
  "_id": {
    "$oid": "6648292d42e66b9f8224f985"
  },
  "fullname": "TRẦN LAN",
  "birthyear": 1967,
  "phone": "0935154264",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-17T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD.\r\ncầu răng pivot nhựa cũ, bể.",
      "cures": "khám tư vấn, đo HA = 115/77, M=78.\r\nhẹn nhổ răng.",
      "bill": 0,
      "_id": {
        "$oid": "6648292d42e66b9f8224f986"
      }
    },
    {
      "date": {
        "$date": "2024-05-20T17:00:00.000Z"
      },
      "diagnoses": "răng sâu vỡ lớn R22",
      "cures": "nhổ chân răng R22\r\nđo HA trước nhổ R= 110/75, M=95\r\nđo HA sau nhổ R=113/69, M=89.",
      "bill": 200000,
      "_id": {
        "$oid": "664c179042e66b9f8224f9b8"
      }
    },
    {
      "date": {
        "$date": "2024-05-24T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn",
      "cures": "nhổ chân răng R14",
      "bill": 200000,
      "_id": {
        "$oid": "6657ee8c42e66b9f8224faa3"
      }
    },
    {
      "date": {
        "$date": "2024-05-29T17:00:00.000Z"
      },
      "diagnoses": "R pivot nhựa cũ mẻ",
      "cures": "nhổ 3 chân răng 11,12, 21 ( răng pivot nhựa cũ ).\r\nHA 120/70, M=76.",
      "bill": 600000,
      "_id": {
        "$oid": "6657eefe42e66b9f8224faa8"
      }
    },
    {
      "date": {
        "$date": "2024-08-02T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT",
      "cures": "lấy dấu HT, HD",
      "bill": 0,
      "_id": {
        "$oid": "66adb62042e66b9f8224feb7"
      }
    },
    {
      "date": {
        "$date": "2024-08-04T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT",
      "cures": "cắn sáp HT, chọn màu răng R Justi màu 69 ( 7M )\r\ngửi labo lên răng HT",
      "bill": 0,
      "_id": {
        "$oid": "66b04d7842e66b9f8224fec8"
      }
    },
    {
      "date": {
        "$date": "2024-08-06T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "thử răng sáp HT R Justi màu 69 8R\r\n( labo lên 9R, bnhân yêu cầu làm 8R thôi )\r\ngửi labo ép nhựa cường lực\r\ncọc 2 triệu",
      "bill": 2000000,
      "_id": {
        "$oid": "66b3496d42e66b9f8224feea"
      }
    }
  ],
  "__v": 6
},
{
  "_id": {
    "$oid": "664be68e42e66b9f8224f99c"
  },
  "fullname": "LÊ THỊ TƯỜNG VI",
  "birthyear": 1984,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-16T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R15",
      "cures": "đặt As R15, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "664be68e42e66b9f8224f99d"
      }
    },
    {
      "date": {
        "$date": "2024-05-19T17:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "mở tuỷ R14, bơm rửa tuỷ buồng, đặt lại chút xíu As, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "664be6d142e66b9f8224f9a2"
      }
    },
    {
      "date": {
        "$date": "2024-05-20T17:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "SSOT bơm rửa ống tuỷ R14, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6650864242e66b9f8224fa18"
      }
    },
    {
      "date": {
        "$date": "2024-05-23T17:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "SSOT bơm rửa ống tuỷ R14, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6651207642e66b9f8224fa22"
      }
    },
    {
      "date": {
        "$date": "2024-05-29T17:00:00.000Z"
      },
      "diagnoses": "endo R14",
      "cures": "SSOT bơm rửa ống tuỷ R14, quay Ca(OH)2, trám tạm Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6658641042e66b9f8224fac0"
      }
    },
    {
      "date": {
        "$date": "2024-06-05T17:00:00.000Z"
      },
      "diagnoses": "endo R15",
      "cures": "bơm rửa ống tuỷ R15, điều trị thuốc 5 ngày.",
      "bill": 0,
      "_id": {
        "$oid": "6662d76142e66b9f8224faf2"
      }
    },
    {
      "date": {
        "$date": "2024-06-12T17:00:00.000Z"
      },
      "diagnoses": "gửi XQ R36, 37 ( chú ý mặt xa R37 )\r\nendo R15",
      "cures": "bơm rửa ống tuỷ SSOT R15, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66978b8f42e66b9f8224fcfe"
      }
    },
    {
      "date": {
        "$date": "2024-06-19T17:00:00.000Z"
      },
      "diagnoses": "endo R15\r\nrăng cối HD mòn mặt nhai nhiều, gây ê buốt.",
      "cures": "SSOT bơm rửa ống tuỷ R15, quay Ca(OH)2, trám Eu.\r\nLấy dấu làm máng tẩy HD ( máng toothmousse ).",
      "bill": 0,
      "_id": {
        "$oid": "66978c5242e66b9f8224fd03"
      }
    },
    {
      "date": {
        "$date": "2024-07-01T17:00:00.000Z"
      },
      "diagnoses": "endo R15",
      "cures": "trám bít ống tuỷ R15\r\ngiao máng tẩy + 1 tube toothmousse.",
      "bill": 0,
      "_id": {
        "$oid": "66978cbe42e66b9f8224fd08"
      }
    },
    {
      "date": {
        "$date": "2024-07-15T17:00:00.000Z"
      },
      "diagnoses": "endo R15",
      "cures": "trám kết thúc R15 GIC, miếng trám lớn xa trong.",
      "bill": 800000,
      "_id": {
        "$oid": "66978cfd42e66b9f8224fd0d"
      }
    }
  ],
  "__v": 9
},
{
  "_id": {
    "$oid": "664be7bc42e66b9f8224f9ac"
  },
  "fullname": "ĐẶNG TUYẾT HẰNG",
  "birthyear": 1955,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-20T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "664be7bc42e66b9f8224f9ad"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "664f2dcc42e66b9f8224f9eb"
  },
  "fullname": "ĐỖ THỊ THU HÀ",
  "birthyear": 1957,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-22T17:00:00.000Z"
      },
      "diagnoses": "R pivot sứ 13 sút",
      "cures": "gắn lại răng sứ pivot 13",
      "bill": 200000,
      "_id": {
        "$oid": "664f2dcc42e66b9f8224f9ec"
      }
    },
    {
      "date": {
        "$date": "2024-07-30T17:00:00.000Z"
      },
      "diagnoses": "PHTL HD bán hàm",
      "cures": "lấy dấu HT, HD để làm hàm giả dẻo HD 3R Mỹ.",
      "bill": 0,
      "_id": {
        "$oid": "66aa1de242e66b9f8224fe6f"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "665120dd42e66b9f8224fa25"
  },
  "fullname": "CHUNG PHƯƠNG THUỶ",
  "birthyear": 1983,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-23T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, cầu sứ 2 dơn vị 21+22 sút.",
      "cures": "gắn lại cầu sứ 21,22 ( 100k )\r\ncạo vôi răng + đánh bóng răng ( 400k )",
      "bill": 500000,
      "_id": {
        "$oid": "665120dd42e66b9f8224fa26"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6654008942e66b9f8224fa33"
  },
  "fullname": "PHAN ANH THƯ",
  "birthyear": 2003,
  "phone": "0855413140",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-26T17:00:00.000Z"
      },
      "diagnoses": "R37 đã endo từ lâu bị vỡ miếng trám.",
      "cures": "trám răng GIC R37",
      "bill": 300000,
      "_id": {
        "$oid": "6654008942e66b9f8224fa34"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66540cd842e66b9f8224fa36"
  },
  "fullname": "TĂNG PÍ",
  "birthyear": 1965,
  "phone": "0984066684",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-26T17:00:00.000Z"
      },
      "diagnoses": "R44 đang điều trị tuỷ ở Sóc trăng 3 tháng trước, abces quanh chóp R44, sưng nướu.",
      "cures": "mở tuỷ bơm rửa ống tuỷ, để trống, miễn phí.",
      "bill": 0,
      "_id": {
        "$oid": "66540cd842e66b9f8224fa37"
      }
    },
    {
      "date": {
        "$date": "2024-05-28T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, vôi răng vết dính răng cửa dưới nhiều.\r\nMất răng toàn bộ HT ( còn R17,18 sâu cổ răng trong lớn ), có hàm tháo lắp HT.",
      "cures": "bơm rửa ống tuỷ R44 ( miễn phí )\r\ncạo vôi răng + đanh bóng răng HD.",
      "bill": 400000,
      "_id": {
        "$oid": "6657b8d042e66b9f8224fa9e"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "665445c642e66b9f8224fa39"
  },
  "fullname": "ĐỖ THỊ KIM YẾN",
  "birthyear": 1980,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-26T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 36",
      "cures": "trám răng R36 vỡ lớn GIC (xa )",
      "bill": 300000,
      "_id": {
        "$oid": "665445c642e66b9f8224fa3a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66555b1242e66b9f8224fa5f"
  },
  "fullname": "VÕ THỊ YẾN",
  "birthyear": 1953,
  "phone": "0903939312",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-26T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 300000,
      "_id": {
        "$oid": "66555b1242e66b9f8224fa60"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6656fa6542e66b9f8224fa7d"
  },
  "fullname": "VÕ TRÚC VÂN QUỲNH",
  "birthyear": 2006,
  "phone": "0398262115",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-28T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, mẻ rìa cắn răng 31 năm 2023, đã trám và sút miếng trám.",
      "cures": "cạo vôi răng + đánh bóng răng ( 400k )\r\ntrám rìa cắn R31 LC, Co A1 ( 300k )",
      "bill": 700000,
      "_id": {
        "$oid": "6656fa6542e66b9f8224fa7e"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6656fa7b42e66b9f8224fa80"
  },
  "fullname": "VÕ VƯƠNG VŨ",
  "birthyear": 1972,
  "phone": "0908163666",
  "treatments": [
    {
      "date": {
        "$date": "2024-05-28T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, mòn răng",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "6656fa7b42e66b9f8224fa81"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "665ef92242e66b9f8224fad6"
  },
  "fullname": "BÙI THỊ VIỆT",
  "birthyear": 1956,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-03T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R17 (XT)",
      "cures": "trám răng R17 (XT) GIC.",
      "bill": 300000,
      "_id": {
        "$oid": "665ef92242e66b9f8224fad7"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6660f5f142e66b9f8224fad9"
  },
  "fullname": "TRẦN HUỆ MINH",
  "birthyear": 1959,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-04T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "lấy dấu HT, HD.\r\nso màu răng : R Excellence A3.5, gửi labo lên 4 răng cửa dưới.",
      "bill": 0,
      "_id": {
        "$oid": "6660f5f142e66b9f8224fada"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66681a7942e66b9f8224fb0e"
  },
  "fullname": "LÊ MẠNH",
  "birthyear": 1954,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R33 cổ răng trong",
      "cures": "trám răng 33 ( cổ răng trong ) GIC",
      "bill": 150000,
      "_id": {
        "$oid": "66681a7942e66b9f8224fb0f"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66681ae242e66b9f8224fb11"
  },
  "fullname": "NGUYỄN THỊ KIM THOA",
  "birthyear": 1960,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R13 cổ răng trong",
      "cures": "trám răng R13 cổ răng trong GIC",
      "bill": 300000,
      "_id": {
        "$oid": "66681ae242e66b9f8224fb12"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "666d16dc42e66b9f8224fb39"
  },
  "fullname": "TRẦN THỊ HẢI YẾN",
  "birthyear": 1966,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-14T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "666d16dc42e66b9f8224fb3a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6670117f42e66b9f8224fb3c"
  },
  "fullname": "HỒ VŨ XUÂN PHƯƠNG",
  "birthyear": 1982,
  "phone": "0909729335",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-16T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R26 (X), R11(G), R chốt sứ 21 sút.",
      "cures": "trám răng LC R11 (G) A3 (200k)\r\ntrám răng GIC R26 (X) (200K)\r\ngắn lại răng chốt sứ 21 (150k)",
      "bill": 550000,
      "_id": {
        "$oid": "6670117f42e66b9f8224fb3d"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6671526c42e66b9f8224fb61"
  },
  "fullname": "PHÙNG MINH TRÍ",
  "birthyear": 1994,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-17T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng R12 ( mặt trong ), theo dõi viêm tuỷ R12",
      "cures": "cạo vôi răng + đánh bóng răng.\r\ntrám tạm R12 eugenate ( mặt trong ) free.\r\ngửi chụp XQ R12.",
      "bill": 400000,
      "_id": {
        "$oid": "6671526c42e66b9f8224fb62"
      }
    },
    {
      "date": {
        "$date": "2024-06-30T17:00:00.000Z"
      },
      "diagnoses": "viêm mô tế bào vùng má trên bên phải do răng 12",
      "cures": "điều trị thuốc + mở tuỷ để trống R 12, bơm rửa ông tuỷ.",
      "bill": 0,
      "_id": {
        "$oid": "6684b00d42e66b9f8224fc03"
      }
    },
    {
      "date": {
        "$date": "2024-07-03T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "bơm rửa ống tuỷ, SSOT R12, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "668f936c42e66b9f8224fc38"
      }
    },
    {
      "date": {
        "$date": "2024-07-07T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "bơm rửa ống tuỷ R12, SSOT, trám eugenate R12.",
      "bill": 0,
      "_id": {
        "$oid": "668f939e42e66b9f8224fc3d"
      }
    },
    {
      "date": {
        "$date": "2024-07-14T17:00:00.000Z"
      },
      "diagnoses": "endo R 12",
      "cures": "băng thuốc lần trước còn dơ, màu xám.\r\nbơm rửa ống tuỷ SSOT R12, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6696400542e66b9f8224fca0"
      }
    },
    {
      "date": {
        "$date": "2024-07-21T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "bơm rửa ống tuỷ SSOT R12, băng thuốc sạch nhưng còn mùi hôi.\r\ntrám eugenate, hẹn 2 tuần ( 5/8 ) bơm rửa tiếp.",
      "bill": 0,
      "_id": {
        "$oid": "669e42ec42e66b9f8224fd91"
      }
    },
    {
      "date": {
        "$date": "2024-08-04T17:00:00.000Z"
      },
      "diagnoses": "endo R12",
      "cures": "bơm rửa ống tuỷ, quay Ca(OH)2, trám eugenate.\r\nhẹn 2 tuần (19/8/2024)",
      "bill": 0,
      "_id": {
        "$oid": "66b0c22242e66b9f8224fedd"
      }
    }
  ],
  "__v": 6
},
{
  "_id": {
    "$oid": "6673b05542e66b9f8224fb87"
  },
  "fullname": "MÃ GIA VINH",
  "birthyear": 1973,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-06T17:00:00.000Z"
      },
      "diagnoses": "R 32 lung lay, đau.\r\nBN ăn càng cua cứng, cảm giác răng bị lệch hẳn ra cung hàm.",
      "cures": "khám, gửi chụp XQ R32, mài rìa cắn cho răng không chạm với răng hàm trên",
      "bill": 0,
      "_id": {
        "$oid": "6673b05542e66b9f8224fb88"
      }
    },
    {
      "date": {
        "$date": "2024-06-09T17:00:00.000Z"
      },
      "diagnoses": "XQ cho thấy vùng tiêu xương lớn quanh chóp chân răng 32.\r\nChẩn đoán: R32 chấn thương khớp cắn mãn tính, gây tiêu xương nhiều, tuỷ răng vẫn còn sống.",
      "cures": "Gây tê lấy tuỷ R32, bơm rửa ống tuỷ, SSOT, để trống 3 ngày.",
      "bill": 0,
      "_id": {
        "$oid": "6673b13a42e66b9f8224fb8d"
      }
    },
    {
      "date": {
        "$date": "2024-06-11T17:00:00.000Z"
      },
      "diagnoses": "endo R32",
      "cures": "SSOT, bơm rửa ống tuỷ R32, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6673b17b42e66b9f8224fb92"
      }
    },
    {
      "date": {
        "$date": "2024-06-18T17:00:00.000Z"
      },
      "diagnoses": "endo R32",
      "cures": "SSOT bơm rửa ống tuỷ R 32, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6673b1ce42e66b9f8224fb97"
      }
    },
    {
      "date": {
        "$date": "2024-06-25T17:00:00.000Z"
      },
      "diagnoses": "endo R32",
      "cures": "bơm rửa ống tuỷ R32, SSOT, quay Ca(OH)2, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "668f9e3b42e66b9f8224fc48"
      }
    },
    {
      "date": {
        "$date": "2024-07-04T17:00:00.000Z"
      },
      "diagnoses": "endo R32",
      "cures": "SSOT bơm rửa ống tuỷ R32, Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6697891842e66b9f8224fcea"
      }
    },
    {
      "date": {
        "$date": "2024-07-11T17:00:00.000Z"
      },
      "diagnoses": "endo R32",
      "cures": "miếng trám tạm Eu bị sút, trám lại Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6697897342e66b9f8224fcef"
      }
    },
    {
      "date": {
        "$date": "2024-07-17T17:00:00.000Z"
      },
      "diagnoses": "endo R32",
      "cures": "SSOT bơm rửa ống tuỷ, quay Ca(OH)2, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "6699da7742e66b9f8224fd43"
      }
    },
    {
      "date": {
        "$date": "2024-07-25T17:00:00.000Z"
      },
      "diagnoses": "endo R32",
      "cures": "bơm rửa ống tuỷ, trám bít ống tuỷ R32, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66a3819e42e66b9f8224fe21"
      }
    },
    {
      "date": {
        "$date": "2024-07-31T17:00:00.000Z"
      },
      "diagnoses": "endo R 32\r\nviêm nướu",
      "cures": "trám kết thúc R 32 GIC\r\ncạo vôi răng + đánh bóng răng\r\ntrám răng R11, R21 (X) lỗ sâu nhỏ GIC ( free )",
      "bill": 1200000,
      "_id": {
        "$oid": "66ab777f42e66b9f8224fea5"
      }
    }
  ],
  "__v": 9
},
{
  "_id": {
    "$oid": "6673b25342e66b9f8224fb9f"
  },
  "fullname": "TỪ HOÀ",
  "birthyear": 1952,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-18T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "6673b25342e66b9f8224fba0"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6673b29d42e66b9f8224fba3"
  },
  "fullname": "HOÀNG NGỌC LAN",
  "birthyear": 1957,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-18T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, vết dính nhiều.",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "6673b29d42e66b9f8224fba4"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6674e3c742e66b9f8224fba8"
  },
  "fullname": "LÊ THỊ NGỌC NGA",
  "birthyear": 1982,
  "phone": "0905298577",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-20T17:00:00.000Z"
      },
      "diagnoses": "răng trám bị mẻ gờ men",
      "cures": "khám tư vấn, mài gờ răng bén R36 ( X ), R45 ( T ), đánh bóng bo tròn.",
      "bill": 0,
      "_id": {
        "$oid": "6674e3c742e66b9f8224fba9"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6674fb9442e66b9f8224fbb2"
  },
  "fullname": "LƯƠNG THỤC LINH",
  "birthyear": 1993,
  "phone": "0943828219",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-20T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng ( 400k )\r\nlấy dấu hàm trên làm máng tẩy để tẩy trắng cho vùng răng cửa trên ( chủ yếu 2 răng cửa ).\r\n1 máng tẩy + 1 tube opalescence 20% ( 500k ).",
      "bill": 900000,
      "_id": {
        "$oid": "6674fb9442e66b9f8224fbb3"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "667b90a442e66b9f8224fbb8"
  },
  "fullname": "KHA BỬU CẦM",
  "birthyear": 1965,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-25T17:00:00.000Z"
      },
      "diagnoses": "sâu răng",
      "cures": "trám răng LC Composite\r\nR11 (X) , R21 (G)",
      "bill": 800000,
      "_id": {
        "$oid": "667b90a442e66b9f8224fbb9"
      }
    },
    {
      "date": {
        "$date": "2024-07-05T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "669782da42e66b9f8224fccf"
      }
    },
    {
      "date": {
        "$date": "2024-07-09T17:00:00.000Z"
      },
      "diagnoses": "R17 mão kim loại full bị tụt nướu, hở đường hoàn tất ngoài 2cm.\r\nBệnh nhân nói R17 đã lấy tuỷ.",
      "cures": "tháo mão full kim loại R17, mài chỉnh cùi lại, trám mặt nhai GIC lại.",
      "bill": 0,
      "_id": {
        "$oid": "6697860442e66b9f8224fcd4"
      }
    },
    {
      "date": {
        "$date": "2024-07-12T17:00:00.000Z"
      },
      "diagnoses": "R16 mòn ngót cổ răng",
      "cures": "trám cổ răng R16 LC Composite màu A1(300k)\r\nkhoan tuỷ buồng để làm chỗ lưu cho sườn, lấy dấu.\r\nkhông có răng HD đối diện.",
      "bill": 300000,
      "_id": {
        "$oid": "6697868e42e66b9f8224fcd9"
      }
    },
    {
      "date": {
        "$date": "2024-07-16T17:00:00.000Z"
      },
      "diagnoses": "mão sứ R17",
      "cures": "gắn mão sứ R17 ( màu A2 )\r\ntuỷ buồng khoan lưu, lấy dấu cho chất lấy dấu in sâu xuống 1 chút để sườn có phần nhô ra lưu vào sâu 1 chút.",
      "bill": 1000000,
      "_id": {
        "$oid": "669787a342e66b9f8224fce3"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "667be53842e66b9f8224fbbb"
  },
  "fullname": "KHA TRÍ HÙNG",
  "birthyear": 2001,
  "phone": "0356065109",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-25T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "667be53842e66b9f8224fbbc"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6682180742e66b9f8224fbc0"
  },
  "fullname": "NGUYỄN TRỌNG NHÂN",
  "birthyear": 1979,
  "phone": "0909691979",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-30T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 300000,
      "_id": {
        "$oid": "6682180742e66b9f8224fbc1"
      }
    },
    {
      "date": {
        "$date": "2024-06-30T17:00:00.000Z"
      },
      "diagnoses": "sâu răng 22",
      "cures": "trám răng 22 (G) LC, Co A1",
      "bill": 300000,
      "_id": {
        "$oid": "6684b0a842e66b9f8224fc09"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "668224cc42e66b9f8224fbc5"
  },
  "fullname": "TỪ HUỆ PHƯƠNG",
  "birthyear": 1960,
  "phone": "0789279511",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-30T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ mãn R23",
      "cures": "đặt As R23, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "668224cc42e66b9f8224fbc6"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66828ab542e66b9f8224fbc8"
  },
  "fullname": "NGUYỄN MINH NHỰT",
  "birthyear": 2001,
  "phone": "0901196967",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-30T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "66828ab542e66b9f8224fbc9"
      }
    },
    {
      "date": {
        "$date": "2024-06-30T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "6684ae2242e66b9f8224fbef"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "66837edc42e66b9f8224fbcb"
  },
  "fullname": "LÊ MINH THƯ",
  "birthyear": 2002,
  "phone": "0909362220",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-01T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu HT, HD",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 500000,
      "_id": {
        "$oid": "66837edc42e66b9f8224fbcc"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66837ef942e66b9f8224fbce"
  },
  "fullname": "LÊ MINH KHOA",
  "birthyear": 2008,
  "phone": "0938359803",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-01T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu HT, HD",
      "cures": "cạo vôi răng + đánh bóng răng.",
      "bill": 400000,
      "_id": {
        "$oid": "66837ef942e66b9f8224fbcf"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6683c48e42e66b9f8224fbd1"
  },
  "fullname": "NGUYỄN THỊ CẨM VÂN",
  "birthyear": 1959,
  "phone": "0907707150",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-01T17:00:00.000Z"
      },
      "diagnoses": "mòn cổ răng ngoài xa R45",
      "cures": "trám LC cổ răng ngoài xa R45 Co A1.",
      "bill": 150000,
      "_id": {
        "$oid": "6683c48e42e66b9f8224fbd2"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6684abe442e66b9f8224fbd5"
  },
  "fullname": "ONG PHI LONG",
  "birthyear": 1997,
  "phone": "0388672735",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-01T17:00:00.000Z"
      },
      "diagnoses": "sâu răng vỡ lớn R48, R 48 mọc lệch nằm ngang.",
      "cures": "khám tư vấn, chuyển viện nhổ răng tiểu phẫu R48.",
      "bill": 0,
      "_id": {
        "$oid": "6684abe442e66b9f8224fbd6"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6684af8142e66b9f8224fbfd"
  },
  "fullname": "PHÙNG VĂN MỚI",
  "birthyear": 1953,
  "phone": "0913919712",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-30T17:00:00.000Z"
      },
      "diagnoses": "mất răng cửa HD, viêm nướu",
      "cures": "khám tư vấn, hẹn CVR, endo 2R cửa HD.",
      "bill": 0,
      "_id": {
        "$oid": "6684af8142e66b9f8224fbfe"
      }
    },
    {
      "date": {
        "$date": "2024-07-05T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng HD, gây tê endo R42, SSOT bơm rửa ống tuỷ, trám eugenate.\r\nHA= 117/67, M=74.",
      "bill": 0,
      "_id": {
        "$oid": "66974b4242e66b9f8224fcc0"
      }
    },
    {
      "date": {
        "$date": "2024-07-08T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, endo R 32, 42.",
      "cures": "cạo vôi răng HD + ĐBR.\r\ngây tê endo R32, cắt ngang thân răng 32, bơm rửa ống tuỷ, SSOT ( reamer số 35 ) 2R 32,42, Eu.\r\nR32 calci hoá ống tuỷ nhiều, ngay lỗ vào ống tuỷ và 1/2 trên.",
      "bill": 0,
      "_id": {
        "$oid": "66974db742e66b9f8224fcc5"
      }
    },
    {
      "date": {
        "$date": "2024-07-15T17:00:00.000Z"
      },
      "diagnoses": "endo R 32, 42.",
      "cures": "bơm rửa ống tuỷ 2R 32, 42. SSOT, quay Ca(OH)2 cho ống tuỷ R42, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "66974ebe42e66b9f8224fcca"
      }
    },
    {
      "date": {
        "$date": "2024-07-22T17:00:00.000Z"
      },
      "diagnoses": "endo chân răng 32, R42",
      "cures": "bơm rửa ống tuỷ chân răng 32, R42, trám bít ống tuỷ 2R 32,42, \r\nlấy dấu ống mang chốt chân răng 32, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "66a067d642e66b9f8224fda3"
      }
    },
    {
      "date": {
        "$date": "2024-07-29T17:00:00.000Z"
      },
      "diagnoses": "cầu sứ 32-42",
      "cures": "trám kết thúc R42 endo GIC.\r\ngắn cùi giả R32.\r\nmài cùi giả R32, cùi răng thật R43.\r\nlấy dấu HT, HD.\r\nđổ mẫu gửi labo đúc sườn cầu răng.",
      "bill": 0,
      "_id": {
        "$oid": "66a86e0e42e66b9f8224fe4f"
      }
    },
    {
      "date": {
        "$date": "2024-08-01T17:00:00.000Z"
      },
      "diagnoses": "cầu sứ R32-42 ( 3 dơn vị ).",
      "cures": "thử sườn cầu sứ 3 đơn vị ( R32-42 ), cắn sáp.\r\nchọn màu A3+",
      "bill": 0,
      "_id": {
        "$oid": "66ac9c7942e66b9f8224feac"
      }
    }
  ],
  "__v": 6
},
{
  "_id": {
    "$oid": "6686691b42e66b9f8224fc0e"
  },
  "fullname": "LÂM PHƯỚC",
  "birthyear": 1965,
  "phone": "0966246937",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-03T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R35 (G)",
      "cures": "trám răng R35 (G) GIC",
      "bill": 200000,
      "_id": {
        "$oid": "6686691b42e66b9f8224fc0f"
      }
    },
    {
      "date": {
        "$date": "2024-08-01T17:00:00.000Z"
      },
      "diagnoses": "miếng trám cũ R35 sút (GIC)",
      "cures": "trám lại R35 (G) GIC, miễn phí.",
      "bill": 0,
      "_id": {
        "$oid": "66acac0e42e66b9f8224feb1"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "6687d36542e66b9f8224fc19"
  },
  "fullname": "HUỲNH HUÊ",
  "birthyear": 1953,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-04T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "6687d36542e66b9f8224fc1a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "668b9c7e42e66b9f8224fc1f"
  },
  "fullname": "LINH KIM MAI",
  "birthyear": 1965,
  "phone": "0764048372",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-07T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R45",
      "cures": "trám răng R45 (G) vỡ lớn",
      "bill": 100000,
      "_id": {
        "$oid": "668b9c7e42e66b9f8224fc20"
      }
    },
    {
      "date": {
        "$date": "2024-07-08T17:00:00.000Z"
      },
      "diagnoses": "viêm tuỷ cấp R45",
      "cures": "gây tê endo R45, SSOT, bơm rửa ống tuỷ, trám tạm eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "6690f39d42e66b9f8224fc67"
      }
    },
    {
      "date": {
        "$date": "2024-07-10T17:00:00.000Z"
      },
      "diagnoses": "endo R45",
      "cures": "SSOT bơm rửa ống tuỷ R45, trám eugentae.",
      "bill": 0,
      "_id": {
        "$oid": "6690f3eb42e66b9f8224fc6c"
      }
    },
    {
      "date": {
        "$date": "2024-07-17T17:00:00.000Z"
      },
      "diagnoses": "endo R 45",
      "cures": "SSOT bơm rửa ống tuỷ, quay Ca(OH)2, trám Eu R45.",
      "bill": 0,
      "_id": {
        "$oid": "6699da2a42e66b9f8224fd3d"
      }
    },
    {
      "date": {
        "$date": "2024-07-23T17:00:00.000Z"
      },
      "diagnoses": "endo R45",
      "cures": "SSOT bơm rửa ống tuỷ R45, trám bít ống tuỷ R45.",
      "bill": 0,
      "_id": {
        "$oid": "66a1a4c142e66b9f8224fe06"
      }
    },
    {
      "date": {
        "$date": "2024-07-28T17:00:00.000Z"
      },
      "diagnoses": "endo R45",
      "cures": "trám kết thúc GIC R45.",
      "bill": 700000,
      "_id": {
        "$oid": "66a75acc42e66b9f8224fe4a"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "668e5d8e42e66b9f8224fc25"
  },
  "fullname": "MAI THỊ THANH THẢO",
  "birthyear": 1975,
  "phone": "0908888639",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-09T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "668e5d8e42e66b9f8224fc26"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "668f45fd42e66b9f8224fc31"
  },
  "fullname": "LÝ XƯỞNG LONG",
  "birthyear": 2000,
  "phone": "0702700278",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-10T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R16",
      "cures": "trám răng R16 ( xa trong ) (1/4 răng )\r\ntheo dõi viêm tuỷ do kích thích.",
      "bill": 300000,
      "_id": {
        "$oid": "668f45fd42e66b9f8224fc32"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6690f7f542e66b9f8224fc8c"
  },
  "fullname": "TRẦN THỊ ĐẠT",
  "birthyear": 1966,
  "phone": "0703917662",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-19T17:00:00.000Z"
      },
      "diagnoses": "R sứ 41 gãy cùi răng",
      "cures": "gây tê cắt nướu triển dưỡng chân răng 41, răng trụ 41 thuộc cầu răng 3 đơn vị 41-> 43.",
      "bill": 0,
      "_id": {
        "$oid": "6690f7f542e66b9f8224fc8d"
      }
    },
    {
      "date": {
        "$date": "2024-07-07T17:00:00.000Z"
      },
      "diagnoses": "làm R sứ 41",
      "cures": "lấy dấu lại ống tuỷ chân 41.",
      "bill": 0,
      "_id": {
        "$oid": "669792b642e66b9f8224fd1e"
      }
    },
    {
      "date": {
        "$date": "2024-07-09T17:00:00.000Z"
      },
      "diagnoses": "làm răng sứ R31",
      "cures": "gắn cùi giả R41, mài cùi giả R41, lấy dấu HD, gửi labo đúc mão sứ R41, màu A2.",
      "bill": 0,
      "_id": {
        "$oid": "6697934942e66b9f8224fd23"
      }
    },
    {
      "date": {
        "$date": "2024-07-14T17:00:00.000Z"
      },
      "diagnoses": "mão sứ R41",
      "cures": "gắn mão sứ R41, màu A2.",
      "bill": 1000000,
      "_id": {
        "$oid": "6697942342e66b9f8224fd28"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "6691123242e66b9f8224fc8f"
  },
  "fullname": "LỮ MỸ SÂM",
  "birthyear": 2002,
  "phone": "0778638135",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-11T17:00:00.000Z"
      },
      "diagnoses": "R11 mẻ góc gần",
      "cures": "trám răng thẩm mỹ R11 góc gần composite A1\r\n( bảo hành 1 năm )",
      "bill": 350000,
      "_id": {
        "$oid": "6691123242e66b9f8224fc90"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "669640a742e66b9f8224fca3"
  },
  "fullname": "QUÁCH TÚ LOAN",
  "birthyear": 1982,
  "phone": "0908998918",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-11T17:00:00.000Z"
      },
      "diagnoses": "R11 lung lay độ 2",
      "cures": "khám tư vấn, gửi chụp XQ R11.",
      "bill": 0,
      "_id": {
        "$oid": "669640a742e66b9f8224fca4"
      }
    },
    {
      "date": {
        "$date": "2024-07-14T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu\r\nphim XQ cho thấy gờ đỉnh xương ổ răng cửa giữa R11 tiêu xương nhiều.",
      "cures": "CVR + ĐBR lần 1.\r\nHDVSRM súc miệng hàng ngày bằng chlorhexidine, nước muối sinh lý.\r\nhẹn CVR lần 2.",
      "bill": 500000,
      "_id": {
        "$oid": "6696413a42e66b9f8224fca9"
      }
    },
    {
      "date": {
        "$date": "2024-07-21T17:00:00.000Z"
      },
      "diagnoses": "viêm nha chu răng cửa HD",
      "cures": "cạo vôi răng lần 2 + đánh bóng răng\r\nHDVSRM, súc miệng NaCl 0,9%.",
      "bill": 0,
      "_id": {
        "$oid": "66a0682c42e66b9f8224fdaa"
      }
    }
  ],
  "__v": 2
},
{
  "_id": {
    "$oid": "6699e40e42e66b9f8224fd48"
  },
  "fullname": "ONG KIM ÁNH",
  "birthyear": 1999,
  "phone": "0933622261",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-28T17:00:00.000Z"
      },
      "diagnoses": "R21 mẻ rìa cắn",
      "cures": "trám R21 LC Composite màu A2",
      "bill": 250000,
      "_id": {
        "$oid": "6699e40e42e66b9f8224fd49"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "6699e4c442e66b9f8224fd4c"
  },
  "fullname": "LONG CẨM QUYỀN",
  "birthyear": 2002,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-01-28T17:00:00.000Z"
      },
      "diagnoses": "R nanh đỉnh quá nhọn",
      "cures": "mài bo tròn đỉnh nhọn của 4 răng nanh.",
      "bill": 50000,
      "_id": {
        "$oid": "6699e4c442e66b9f8224fd4d"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "669b3b6242e66b9f8224fd51"
  },
  "fullname": "TRẦN LÊ HOÀNG TRÂN",
  "birthyear": 1987,
  "phone": "0916903009",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-19T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, sâu răng",
      "cures": "CVR + ĐBR ( 400K )\r\ntrám răng LC A1 R21 (rìa cắn) (400k), LC A1 cổ răng mòn R12 (200k)\r\ntrám răng GIC, lót eugenate, mặt nhai R37(300k)",
      "bill": 1300000,
      "_id": {
        "$oid": "669b3b6242e66b9f8224fd52"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "669b847a42e66b9f8224fd59"
  },
  "fullname": "HOÀNG PHẠM MINH TÂM",
  "birthyear": 1998,
  "phone": "0776969058",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-19T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, mòn ngót cổ răng R11,21 (tróc men).\r\ncổ răng xa R21 tróc men nhiều.\r\ncổ răng R11 tróc men chớm phát.",
      "cures": "CVR+ĐBR (400k)\r\ntrám LC Co A1 cổ răng R21 (200k)\r\ntrám chút xíu chỗ khuyết cổ răng R11.",
      "bill": 600000,
      "_id": {
        "$oid": "669b847a42e66b9f8224fd5a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "669e10c042e66b9f8224fd77"
  },
  "fullname": "HUỲNH THANH TUYỀN",
  "birthyear": 1967,
  "phone": "0903846299",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-06T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "tháo mão full kim loại R36, mài chỉnh lại cùi răng, lấy dấu HT, HD.\r\ntrám răng 37 GIC (G)",
      "bill": 0,
      "_id": {
        "$oid": "669e10c042e66b9f8224fd78"
      }
    },
    {
      "date": {
        "$date": "2023-02-08T17:00:00.000Z"
      },
      "diagnoses": "mão sứ R36",
      "cures": "thử sườn mão sứ R36",
      "bill": 0,
      "_id": {
        "$oid": "669e117642e66b9f8224fd7d"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "669e122642e66b9f8224fd80"
  },
  "fullname": "NGUYỄN THỊ BÔNG",
  "birthyear": 1900,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2023-02-12T17:00:00.000Z"
      },
      "diagnoses": "gắn lại mão sứ R22",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "669e122642e66b9f8224fd81"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66a0689342e66b9f8224fdb4"
  },
  "fullname": "TRẦN QUANG MINH",
  "birthyear": 1977,
  "phone": "0905241816",
  "treatments": [
    {
      "date": {
        "$date": "2024-06-25T17:00:00.000Z"
      },
      "diagnoses": "mất răng HT, HD",
      "cures": "khám hẹn lại.",
      "bill": 0,
      "_id": {
        "$oid": "66a0689342e66b9f8224fdb5"
      }
    },
    {
      "date": {
        "$date": "2024-07-01T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "lấy dấu HT ( hàm giả toàn hàm ), HD ( còn 4 răng cửa HD ).",
      "bill": 0,
      "_id": {
        "$oid": "66a07a9142e66b9f8224fde9"
      }
    },
    {
      "date": {
        "$date": "2024-07-08T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "cắn sáp HD, lấy dấu sau cùng HD, so màu răng A3 ( R Mỹ ).\r\nđặt cọc 2 triệu.",
      "bill": 2000000,
      "_id": {
        "$oid": "66a07b0342e66b9f8224fdee"
      }
    },
    {
      "date": {
        "$date": "2024-07-14T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD",
      "cures": "thử hàm sáp HD 6 R Excellence màu A3",
      "bill": 0,
      "_id": {
        "$oid": "66a07b8042e66b9f8224fdf3"
      }
    },
    {
      "date": {
        "$date": "2024-07-18T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD, làm PHTL dẻo HD 6R.",
      "cures": "giao hàm giả dẻo HD 6R Excellence, trong lúc đang mài chỉnh thì sút R43 khỏi hàm,\r\nlấy dấu gửi lại labo gắn lại răng.",
      "bill": 0,
      "_id": {
        "$oid": "66a07c2f42e66b9f8224fdfc"
      }
    },
    {
      "date": {
        "$date": "2024-07-21T17:00:00.000Z"
      },
      "diagnoses": "mất răng HD, làm hàm dẻo 6R HD.",
      "cures": "giao hàm dẻo 6R HD.",
      "bill": 1800000,
      "_id": {
        "$oid": "66a07c7642e66b9f8224fe01"
      }
    }
  ],
  "__v": 5
},
{
  "_id": {
    "$oid": "66a1a55842e66b9f8224fe0e"
  },
  "fullname": "ĐỖ THỊ HOÀNG ANH",
  "birthyear": 1900,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-07T17:00:00.000Z"
      },
      "diagnoses": "endo R21, răng lệch ngoài",
      "cures": "gây tê endo R21, bơm rửa SSOT, Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66a1a55842e66b9f8224fe0f"
      }
    },
    {
      "date": {
        "$date": "2024-07-23T17:00:00.000Z"
      },
      "diagnoses": "endo R21",
      "cures": "SSOT bơm rửa ống tuỷ R21, trám Eu.",
      "bill": 0,
      "_id": {
        "$oid": "66aa1f5142e66b9f8224fe82"
      }
    },
    {
      "date": {
        "$date": "2024-07-29T17:00:00.000Z"
      },
      "diagnoses": "endo R21",
      "cures": "SSOT bơm rửa ống tuỷ R21, quay Ca(OH)2, trám eugenate",
      "bill": 0,
      "_id": {
        "$oid": "66aa1f9442e66b9f8224fe87"
      }
    },
    {
      "date": {
        "$date": "2024-08-04T17:00:00.000Z"
      },
      "diagnoses": "endo R21",
      "cures": "bơm rửa ống tuỷ, trám bít ống tuỷ R21, trám eugenate.",
      "bill": 0,
      "_id": {
        "$oid": "66b0c2b142e66b9f8224fee2"
      }
    }
  ],
  "__v": 3
},
{
  "_id": {
    "$oid": "66a2155942e66b9f8224fe11"
  },
  "fullname": "HUỲNH KIỆT KHÔN",
  "birthyear": 1952,
  "phone": "0906671156",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-24T17:00:00.000Z"
      },
      "diagnoses": "mất răng hàm trên",
      "cures": "lấy dấu HT, HD, gửi labo làm khay cá nhân HT.",
      "bill": 0,
      "_id": {
        "$oid": "66a2155942e66b9f8224fe12"
      }
    },
    {
      "date": {
        "$date": "2024-07-26T17:00:00.000Z"
      },
      "diagnoses": "PHTL HT",
      "cures": "lấy dấu sau cùng HT",
      "bill": 0,
      "_id": {
        "$oid": "66a463a442e66b9f8224fe26"
      }
    },
    {
      "date": {
        "$date": "2024-07-28T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "cắn sáp hàm trên, R Mỹ",
      "bill": 0,
      "_id": {
        "$oid": "66a717af42e66b9f8224fe45"
      }
    },
    {
      "date": {
        "$date": "2024-07-30T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "thử hàm sáp HT 7R Justi ( màu 66 ).\r\n( bỏ R14 ra không làm, labo đã mài thành R13, do R43 cắn quá sát lên nướu HT ).",
      "bill": 0,
      "_id": {
        "$oid": "66aa1c7d42e66b9f8224fe5f"
      }
    },
    {
      "date": {
        "$date": "2024-08-02T17:00:00.000Z"
      },
      "diagnoses": "PHTLHT",
      "cures": "giao hàm PHTL HT ép nhựa cường lực 7R Justi màu 66.\r\n( 7R * 250K + nền cường lực 1,5 triệu )",
      "bill": 3200000,
      "_id": {
        "$oid": "66adb6bd42e66b9f8224febc"
      }
    }
  ],
  "__v": 4
},
{
  "_id": {
    "$oid": "66a4b3d742e66b9f8224fe28"
  },
  "fullname": "MÃ TUYẾT NHI",
  "birthyear": 2000,
  "phone": "0938387673",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-26T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 400000,
      "_id": {
        "$oid": "66a4b3d742e66b9f8224fe29"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66a4cda242e66b9f8224fe2b"
  },
  "fullname": "HUỲNH PHAN THẢO NHI",
  "birthyear": 2016,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-26T17:00:00.000Z"
      },
      "diagnoses": "RTE lung lay",
      "cures": "nhổ răng 52, 62",
      "bill": 0,
      "_id": {
        "$oid": "66a4cda242e66b9f8224fe2c"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66a4cdf742e66b9f8224fe2e"
  },
  "fullname": "HUỲNH PHAN THẢO NGUYÊN",
  "birthyear": 2015,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-26T17:00:00.000Z"
      },
      "diagnoses": "khám RTE",
      "cures": "khám RTE",
      "bill": 0,
      "_id": {
        "$oid": "66a4cdf742e66b9f8224fe2f"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66a8a4c342e66b9f8224fe51"
  },
  "fullname": "VÂN",
  "birthyear": 1900,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-29T17:00:00.000Z"
      },
      "diagnoses": "",
      "cures": "",
      "bill": 0,
      "_id": {
        "$oid": "66a8a4c342e66b9f8224fe52"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66a8b28042e66b9f8224fe59"
  },
  "fullname": "TÔ MỸ LINH",
  "birthyear": 2009,
  "phone": "0855407933",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-29T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R47 (G)",
      "cures": "trám răng R47 (G) GIC, đánh bóng mặt ngoài vùng răng cửa trên, dưới.",
      "bill": 300000,
      "_id": {
        "$oid": "66a8b28042e66b9f8224fe5a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66aa1d6d42e66b9f8224fe64"
  },
  "fullname": "TRIỆU LỆ ANH",
  "birthyear": 1956,
  "phone": "0392795569",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-30T17:00:00.000Z"
      },
      "diagnoses": "mất răng THHT, sâu răng vỡ lớn R34.",
      "cures": "lấy dấu sơ khởi HT, gây tê lấy tuỷ R34, bơm rửa SSOT, trám Eu.\r\nđo HA= 116/69, M=85.",
      "bill": 0,
      "_id": {
        "$oid": "66aa1d6d42e66b9f8224fe65"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66aaf11042e66b9f8224fe8f"
  },
  "fullname": "TRƯƠNG QUỐC CƯỜNG",
  "birthyear": 2006,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-07-31T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng",
      "bill": 300000,
      "_id": {
        "$oid": "66aaf11042e66b9f8224fe90"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66b09fa742e66b9f8224fecb"
  },
  "fullname": "MÃ GIA HÂN",
  "birthyear": 1970,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-08-04T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu, mẻ răng R26 (T)",
      "cures": "cạo vôi răng + đánh bóng răng (400K)\r\ntrám răng R26 (T) GIC (300K)",
      "bill": 700000,
      "_id": {
        "$oid": "66b09fa742e66b9f8224fecc"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66b3442942e66b9f8224fee4"
  },
  "fullname": "LÊ QUÁN NGHI",
  "birthyear": 1971,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-08-06T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "khám tư vấn, hẹn ngày cạo vôi răng.",
      "bill": 0,
      "_id": {
        "$oid": "66b3442942e66b9f8224fee5"
      }
    },
    {
      "date": {
        "$date": "2024-08-07T17:00:00.000Z"
      },
      "diagnoses": "viêm nướu",
      "cures": "cạo vôi răng + đánh bóng răng, HDVSRM",
      "bill": 500000,
      "_id": {
        "$oid": "66b4857442e66b9f8224ff12"
      }
    }
  ],
  "__v": 1
},
{
  "_id": {
    "$oid": "66b34adf42e66b9f8224feed"
  },
  "fullname": "ĐẶNG THỊ HỒNG NGA",
  "birthyear": 1961,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-08-06T17:00:00.000Z"
      },
      "diagnoses": "PHTL TH HT",
      "cures": "lấy dấu sơ khởi HT\r\nlấy dấu HD",
      "bill": 0,
      "_id": {
        "$oid": "66b34adf42e66b9f8224feee"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66b34c4f42e66b9f8224fef1"
  },
  "fullname": "NGUYỄN THỊ NGỌC NGÀ",
  "birthyear": 1953,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-08-05T17:00:00.000Z"
      },
      "diagnoses": "hàm giả dẻo HT bị sút R12",
      "cures": "bnhân để lại hàm để phòng nha gửi labo thêm R12, \r\nchọn R Justi màu 62 gửi labo.",
      "bill": 0,
      "_id": {
        "$oid": "66b34c4f42e66b9f8224fef2"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66b3511d42e66b9f8224fef5"
  },
  "fullname": "DIỆP QUẾ PHƯƠNG",
  "birthyear": 1953,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-08-05T17:00:00.000Z"
      },
      "diagnoses": "R chốt sứ 13 bị sút, HT chỉ còn chân răng R13, còn lại là hàm giả tháo lắp.",
      "cures": "gắn lại R chốt sứ R13",
      "bill": 150000,
      "_id": {
        "$oid": "66b3511d42e66b9f8224fef6"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "66b43c4e42e66b9f8224fef9"
  },
  "fullname": "MAI THỊ HOÀNG OANH",
  "birthyear": 1963,
  "phone": "",
  "treatments": [
    {
      "date": {
        "$date": "2024-08-07T17:00:00.000Z"
      },
      "diagnoses": "sâu răng R26, R46",
      "cures": "trám răng GIC R26 (T, G ) cổ răng trong,\r\ntrám răng GIC R46 (X,N )",
      "bill": 600000,
      "_id": {
        "$oid": "66b43c4e42e66b9f8224fefa"
      }
    }
  ],
  "__v": 0
}];

module.exports = {
    oldpatients
};