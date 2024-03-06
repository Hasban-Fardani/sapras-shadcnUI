import { h } from 'vue';
import { Button } from '@/components/ui/button'
import { ArrowUpDown, ChevronDown, Eye } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table';
import type { Transaction } from '@/types/transaction';

export const columns: ColumnDef<Submission>[] = [
  {
    id: 'code',
    accessorKey: 'code',
    header: 'Kode',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('code'))
  },
  {
    id: 'unit',
    accessorKey: 'unit',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Unit', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('unit'))
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: 'Status',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('status'))
  },
  {
    id: 'nature',
    accessorKey: 'nature',
    header: 'Sifat',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('nature'))
  },
  {
    id: 'date',
    accessorKey: 'date',
    header: 'Tanggal',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('date'))
  },
  {
    id: 'detail',
    cell: ({ row }) => h(
      'div',
      {class: 'flex gap-2'},
      h(Button, {onClick: () => navigateTo('/headmaster/submission/' + row.original.id), size: null, class: 'p-1.5'}, () => [h(Eye, {class: 'h-5 w-5'})]),
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
