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
    type: 'alat/bahan' | 'asset';
  }