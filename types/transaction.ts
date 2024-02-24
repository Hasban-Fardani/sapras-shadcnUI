export interface Transaction {
    id: string;
    unit: string;
    user: string;
    date: string;
    type: 'pengadaan' | 'pengajuan';
    status: 'disetujui' | 'pending' | 'ditolak' | 'selesai';
  }