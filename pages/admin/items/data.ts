import { v4 as uuidv4 } from 'uuid';


export interface Item {
  id: string;
  name: string;
  category: string;
  supplier: string;
  unit: string;
  funding_source: 'BOS' | 'APB';
  code: string;
  merk: string;
  stok: number;
  min_stok: number;
  count: number;
  type: 'alat/bahan' | 'asset';
}

export const items: Item[] = [
    {
      id: "1",
      name: "Pensil",
      category: "Alat Tulis Kantor",
      supplier: "Toko SerbaSerbi",
      unit: "Buah",
      funding_source: "BOS",
      code: "PEN12345",
      merk: "Faber-Castell",
      stok: 50,
      min_stok: 10,
      count: 1,
      type: "alat/bahan"
    },
    {
      id: "2",
      name: "Buku Tulis",
      category: "Alat Tulis Kantor",
      supplier: "Toko Sinar",
      unit: "Paket",
      funding_source: "APB",
      code: "BUK78901",
      merk: "Sinar Dunia",
      stok: 100,
      min_stok: 20,
      count: 2,
      type: "alat/bahan"
    },
    {
      id: "3",
      name: "Meja Kantor",
      category: "Perabot Kantor",
      supplier: "Toko Baru",
      unit: "Set",
      funding_source: "BOS",
      code: "MEJ67890",
      merk: "IKEA",
      stok: 10,
      min_stok: 5,
      count: 1,
      type: "asset"
    },
    {
      id: "4",
      name: "Printer",
      category: "Elektronik",
      supplier: "Toko Elektronik",
      unit: "Buah",
      funding_source: "APB",
      code: "PRN24680",
      merk: "HP",
      stok: 20,
      min_stok: 5,
      count: 1,
      type: "asset"
    },
    {
      id: "5",
      name: "Buku Panduan",
      category: "Referensi",
      supplier: "Toko Buku Maju",
      unit: "Buah",
      funding_source: "BOS",
      code: "BKP13579",
      merk: "Gramedia",
      stok: 30,
      min_stok: 10,
      count: 1,
      type: "alat/bahan"
    },
    {
      id: "6",
      name: "Keyboard",
      category: "Elektronik",
      supplier: "Toko Komputer Sentosa",
      unit: "Buah",
      funding_source: "BOS",
      code: "KBD97531",
      merk: "Logitech",
      stok: 15,
      min_stok: 5,
      count: 1,
      type: "asset"
    },
    {
      id: "7",
      name: "Mouse",
      category: "Elektronik",
      supplier: "Toko Komputer Sentosa",
      unit: "Buah",
      funding_source: "APB",
      code: "MS78910",
      merk: "Razer",
      stok: 25,
      min_stok: 5,
      count: 1,
      type: "asset"
    },
    {
      id: "8",
      name: "Kursi Kantor",
      category: "Perabot Kantor",
      supplier: "Toko Furniture Berkah",
      unit: "Buah",
      funding_source: "APB",
      code: "KRS24680",
      merk: "IKEA",
      stok: 10,
      min_stok: 3,
      count: 1,
      type: "asset"
    },
    {
      id: "9",
      name: "Laptop",
      category: "Elektronik",
      supplier: "Toko Elektronik Utama",
      unit: "Buah",
      funding_source: "BOS",
      code: "LPT13579",
      merk: "Dell",
      stok: 10,
      min_stok: 2,
      count: 1,
      type: "asset"
    },
    {
      id: "10",
      name: "Kertas HVS",
      category: "Alat Tulis Kantor",
      supplier: "Toko SerbaSerbi",
      unit: "Rim",
      funding_source: "APB",
      code: "KRT97531",
      merk: "PaperOne",
      stok: 40,
      min_stok: 10,
      count: 1,
      type: "alat/bahan"
    }
  ];