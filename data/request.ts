import type {Request} from '@/types/request'

export const requests: Request[] = [
    {
        id: "1",
        code: "REQ12345",
        unit: "Sarpras",
        date: new Date(),
        nature: "Biasa",
        status: "Pending",
        categories: ["Alat Tulis Kantor"],
        description: "Permintaan Alat Tulis Kantor",
        items: [
            {
                id: "1",
                code: "PEN12345",
                name: "Pensil",
                count: 10,
                unit: "Buah",
                description: "Pensil 2B",
                funding_source: "APB"
            },
            {
                id: "2",
                code: "BOL12345",
                name: "Bolpoin",
                count: 5,
                unit: "Buah",
                description: "Bolpoin Hitam",
                funding_source: "APBN"
            },
            {
                id: "3",
                code: "KRT12345",
                name: "Kertas Folio",
                count: 3,
                unit: "Rim",
                description: "Kertas Folio A4",
                funding_source: "Bantuan Daerah"
            },
            {
                id: "4",
                code: "PEN45678",
                name: "Pensil Warna",
                count: 20,
                unit: "Buah",
                description: "Pensil Warna 12 Warna",
                funding_source: "APB"
            }
        ]
    },
    {
        id: "2",
        code: "REQ67890",
        unit: "Keuangan",
        date: new Date(),
        nature: "Penting",
        status: "Disetujui",
        categories: ["Peralatan Kantor"],
        description: "Permintaan Peralatan Kantor",
        items: [
            {
                id: "5",
                code: "STA12345",
                name: "Stapler",
                count: 2,
                unit: "Buah",
                description: "Stapler Kecil",
                funding_source: "APBN"
            },
            {
                id: "6",
                code: "FOL12345",
                name: "Folder",
                count: 5,
                unit: "Buah",
                description: "Folder Warna-Warni",
                funding_source: "APB"
            },
            {
                id: "7",
                code: "PAP12345",
                name: "Papan Tulis",
                count: 1,
                unit: "Buah",
                description: "Papan Tulis Magnetik",
                funding_source: "APBN"
            },
            {
                id: "8",
                code: "HIG67890",
                name: "Highliter",
                count: 3,
                unit: "Buah",
                description: "Highliter Warna Warni",
                funding_source: "APB"
            }
        ]
    },
    {
        id: "3",
        code: "REQ13579",
        unit: "SDM",
        date: new Date(),
        nature: "Mendesak",
        status: "Pending",
        categories: ["Perlengkapan Komputer"],
        description: "Permintaan Perlengkapan Komputer",
        items: [
            {
                id: "9",
                code: "KEY12345",
                name: "Keyboard",
                count: 2,
                unit: "Buah",
                description: "Keyboard USB",
                funding_source: "APB"
            },
            {
                id: "10",
                code: "MON12345",
                name: "Monitor",
                count: 3,
                unit: "Buah",
                description: "Monitor LCD 24 inch",
                funding_source: "APBN"
            },
            {
                id: "11",
                code: "MOU12345",
                name: "Mouse",
                count: 2,
                unit: "Buah",
                description: "Mouse Wireless",
                funding_source: "APB"
            },
            {
                id: "12",
                code: "PRN67890",
                name: "Printer",
                count: 1,
                unit: "Buah",
                description: "Printer Inkjet",
                funding_source: "APB"
            }
        ]
    },
    {
        id: "4",
        code: "REQ24680",
        unit: "Teknologi Informasi",
        date: new Date(),
        nature: "Biasa",
        status: "Selesai",
        categories: ["Perangkat Komputer"],
        description: "Permintaan Perangkat Komputer",
        items: [
            {
                id: "13",
                code: "CPU12345",
                name: "CPU",
                count: 3,
                unit: "Unit",
                description: "CPU Core i7",
                funding_source: "APBN"
            },
            {
                id: "14",
                code: "RAM12345",
                name: "RAM",
                count: 10,
                unit: "Unit",
                description: "RAM DDR4 8GB",
                funding_source: "APB"
            },
            {
                id: "15",
                code: "HDD12345",
                name: "Hard Disk",
                count: 5,
                unit: "Unit",
                description: "Hard Disk 1TB",
                funding_source: "APBN"
            },
            {
                id: "16",
                code: "MON24680",
                name: "Monitor",
                count: 5,
                unit: "Unit",
                description: "Monitor LED 27 inch",
                funding_source: "APB"
            }
        ]
    },
    {
        id: "5",
        code: "REQ36912",
        unit: "Sarana Prasarana",
        date: new Date(),
        nature: "Penting",
        status: "Disetujui",
        categories: ["Perlengkapan Sekolah"],
        description: "Permintaan Perlengkapan Sekolah",
        items: [
            {
                id: "17",
                code: "BKP12345",
                name: "Buku Tulis",
                count: 50,
                unit: "Buah",
                description: "Buku Tulis Polos",
                funding_source: "APB"
            },
            {
                id: "18",
                code: "BKP67890",
                name: "Buku Gambar",
                count: 30,
                unit: "Buah",
                description: "Buku Gambar A4",
                funding_source: "APBN"
            },
            {
                id: "19",
                code: "BKP24680",
                name: "Buku Pelajaran",
                count: 40,
                unit: "Buah",
                description: "Buku Pelajaran SD",
                funding_source: "APB"
            },
            {
                id: "20",
                code: "ALP13579",
                name: "Alat Pemadam Api",
                count: 10,
                unit: "Unit",
                description: "APAR 3 Kg",
                funding_source: "APBN"
            }
        ]
    },
    {
        id: "6",
        code: "REQ48152",
        unit: "Kebersihan dan Lingkungan",
        date: new Date(),
        nature: "Biasa",
        status: "Ditolak",
        categories: ["Peralatan Kebersihan"],
        description: "Permintaan Peralatan Kebersihan",
        items: [
            {
                id: "21",
                code: "SAP12345",
                name: "Sapu",
                count: 5,
                unit: "Buah",
                description: "Sapu Plastik",
                funding_source: "APB"
            },
            {
                id: "22",
                code: "PEL12345",
                name: "Pel",
                count: 10,
                unit: "Buah",
                description: "Pel Plastik",
                funding_source: "APBN"
            },
            {
                id: "23",
                code: "SAB12345",
                name: "Sabun Cuci",
                count: 20,
                unit: "Botol",
                description: "Sabun Cuci Cair",
                funding_source: "APB"
            },
            {
                id: "24",
                code: "GLS24680",
                name: "Gloves",
                count: 100,
                unit: "Pasang",
                description: "Sarung Tangan Karet",
                funding_source: "APBN"
            }
        ]
    },
    {
        id: "7",
        code: "REQ50213",
        unit: "Sarpras",
        date: new Date(),
        nature: "Mendesak",
        status: "Selesai",
        categories: ["Peralatan Keamanan"],
        description: "Permintaan Peralatan Keamanan",
        items: [
            {
                id: "25",
                code: "CAM12345",
                name: "CCTV",
                count: 10,
                unit: "Unit",
                description: "CCTV Indoor",
                funding_source: "APB"
            },
            {
                id: "26",
                code: "LCK12345",
                name: "Gembok",
                count: 20,
                unit: "Buah",
                description: "Gembok Besi",
                funding_source: "APBN"
            },
            {
                id: "27",
                code: "BRS12345",
                name: "Bracelet",
                count: 50,
                unit: "Buah",
                description: "Gelang Identifikasi",
                funding_source: "APB"
            },
            {
                id: "28",
                code: "FNC24680",
                name: "Fencing",
                count: 100,
                unit: "Meter",
                description: "Pagar Baja",
                funding_source: "APBN"
            }
        ]
    },
    {
        id: "8",
        code: "REQ61524",
        unit: "Humas",
        date: new Date(),
        nature: "Biasa",
        status: "Pending",
        categories: ["Perlengkapan Presentasi"],
        description: "Permintaan Perlengkapan Presentasi",
        items: [
            {
                id: "29",
                code: "LPT12345",
                name: "Laptop",
                count: 2,
                unit: "Unit",
                description: "Laptop Core i5",
                funding_source: "APBN"
            },
            {
                id: "30",
                code: "PRJ12345",
                name: "Proyektor",
                count: 1,
                unit: "Unit",
                description: "Proyektor Full HD",
                funding_source: "APB"
            },
            {
                id: "31",
                code: "SCR12345",
                name: "Screen",
                count: 1,
                unit: "Unit",
                description: "Layar Proyektor",
                funding_source: "APBN"
            },
            {
                id: "32",
                code: "MCR24680",
                name: "Microphone",
                count: 2,
                unit: "Unit",
                description: "Microphone Wireless",
                funding_source: "APB"
            }
        ]
    },
    {
        id: "9",
        code: "REQ73836",
        unit: "Sarana Olahraga",
        date: new Date(),
        nature: "Penting",
        status: "Selesai",
        categories: ["Perlengkapan Olahraga"],
        description: "Permintaan Perlengkapan Olahraga",
        items: [
            {
                id: "33",
                code: "BSK12345",
                name: "Bola Sepak",
                count: 5,
                unit: "Buah",
                description: "Bola Sepak FIFA Approved",
                funding_source: "APB"
            },
            {
                id: "34",
                code: "BKT67890",
                name: "Baju Kiper",
                count: 10,
                unit: "Set",
                description: "Jersey Kiper",
                funding_source: "APBN"
            },
            {
                id: "35",
                code: "SHP12345",
                name: "Shoes",
                count: 20,
                unit: "Pasang",
                description: "Sepatu Olahraga",
                funding_source: "APB"
            },
            {
                id: "36",
                code: "GGL24680",
                name: "Goggles",
                count: 15,
                unit: "Pasang",
                description: "Kacamata Renang",
                funding_source: "APBN"
            }
        ]
    },
    {
        id: "10",
        code: "REQ84029",
        unit: "Keuangan",
        date: new Date(),
        nature: "Mendesak",
        status: "Ditolak",
        categories: ["Peralatan Kantor"],
        description: "Permintaan Peralatan Kantor",
        items: [
            {
                id: "37",
                code: "CPU67890",
                name: "CPU",
                count: 2,
                unit: "Unit",
                description: "CPU Core i9",
                funding_source: "APBN"
            },
            {
                id: "38",
                code: "SSD12345",
                name: "SSD",
                count: 5,
                unit: "Unit",
                description: "SSD 1TB",
                funding_source: "APB"
            },
            {
                id: "39",
                code: "PRN24680",
                name: "Printer",
                count: 1,
                unit: "Unit",
                description: "Printer Laser",
                funding_source: "APBN"
            },
            {
                id: "40",
                code: "SCP13579",
                name: "Scanner",
                count: 1,
                unit: "Unit",
                description: "Scanner A3",
                funding_source: "APB"
            }
        ]
    },        
]