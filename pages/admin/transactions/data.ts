export interface Transaction {
  id: string;
  unit: string;
  user: string;
  date: string;
  type: 'pengadaan' | 'pengajuan';
  status: 'disetujui' | 'pending' | 'ditolak' | 'selesai';
}

export const transactions: Transaction[] = [
  { id: '1', unit: 'Unit A', user: 'User 1', date: '2024-02-23', type: 'pengadaan', status: 'disetujui' },
  { id: '2', unit: 'Unit B', user: 'User 2', date: '2024-02-22', type: 'pengajuan', status: 'pending' },
  { id: '3', unit: 'Unit C', user: 'User 3', date: '2024-02-21', type: 'pengadaan', status: 'ditolak' },
  { id: '4', unit: 'Unit D', user: 'User 4', date: '2024-02-20', type: 'pengajuan', status: 'selesai' },
  { id: '5', unit: 'Unit E', user: 'User 5', date: '2024-02-19', type: 'pengadaan', status: 'pending' },
  { id: '6', unit: 'Unit F', user: 'User 6', date: '2024-02-18', type: 'pengajuan', status: 'disetujui' },
  { id: '7', unit: 'Unit G', user: 'User 7', date: '2024-02-17', type: 'pengadaan', status: 'selesai' },
  { id: '8', unit: 'Unit H', user: 'User 8', date: '2024-02-16', type: 'pengajuan', status: 'pending' },
  { id: '9', unit: 'Unit I', user: 'User 9', date: '2024-02-15', type: 'pengadaan', status: 'disetujui' },
  { id: '10', unit: 'Unit J', user: 'User 10', date: '2024-02-14', type: 'pengajuan', status: 'ditolak' },
  { id: '11', unit: 'Unit K', user: 'User 11', date: '2024-02-13', type: 'pengadaan', status: 'pending' },
  { id: '12', unit: 'Unit L', user: 'User 12', date: '2024-02-12', type: 'pengajuan', status: 'selesai' },
  { id: '13', unit: 'Unit M', user: 'User 13', date: '2024-02-11', type: 'pengadaan', status: 'ditolak' },
  { id: '14', unit: 'Unit N', user: 'User 14', date: '2024-02-10', type: 'pengajuan', status: 'disetujui' },
  { id: '15', unit: 'Unit O', user: 'User 15', date: '2024-02-09', type: 'pengadaan', status: 'selesai' },
  { id: '16', unit: 'Unit P', user: 'User 16', date: '2024-02-08', type: 'pengajuan', status: 'pending' },
  { id: '17', unit: 'Unit Q', user: 'User 17', date: '2024-02-07', type: 'pengadaan', status: 'disetujui' },
  { id: '18', unit: 'Unit R', user: 'User 18', date: '2024-02-06', type: 'pengajuan', status: 'ditolak' },
  { id: '19', unit: 'Unit S', user: 'User 19', date: '2024-02-05', type: 'pengadaan', status: 'pending' },
  { id: '20', unit: 'Unit T', user: 'User 20', date: '2024-02-04', type: 'pengajuan', status: 'selesai' }
];
