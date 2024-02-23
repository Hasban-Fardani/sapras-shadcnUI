export interface Account {
  id: string;
  name: string;
  nomer_induk: string;
  role: 'admin' | 'user' | 'operator' | 'kepala sekolah';
  unit: string;
}

export const accounts: Account[] = [
  {
    id: '1',
    name: 'John Doe',
    nomer_induk: '001',
    role: 'admin',
    unit: 'Administration'
  },
  {
    id: '2',
    name: 'Jane Smith',
    nomer_induk: '002',
    role: 'user',
    unit: 'Finance'
  },
  {
    id: '3',
    name: 'Alice Johnson',
    nomer_induk: '003',
    role: 'operator',
    unit: 'Customer Support'
  },
  {
    id: '4',
    name: 'Bob Brown',
    nomer_induk: '004',
    role: 'kepala sekolah',
    unit: 'Education Department'
  },
  {
    id: '5',
    name: 'Michael Clark',
    nomer_induk: '005',
    role: 'admin',
    unit: 'Human Resources'
  },
  {
    id: '6',
    name: 'Sarah Lee',
    nomer_induk: '006',
    role: 'user',
    unit: 'Marketing'
  },
  {
    id: '7',
    name: 'David Wilson',
    nomer_induk: '007',
    role: 'operator',
    unit: 'Technical Support'
  },
  {
    id: '8',
    name: 'Emily Taylor',
    nomer_induk: '008',
    role: 'admin',
    unit: 'Legal Department'
  },
  {
    id: '9',
    name: 'James Anderson',
    nomer_induk: '009',
    role: 'user',
    unit: 'Research and Development'
  },
  {
    id: '10',
    name: 'Olivia Martinez',
    nomer_induk: '010',
    role: 'kepala sekolah',
    unit: 'School Administration'
  }
];

export const dataTableFormat = accounts.map(account => {
  return Object.values(account);
});