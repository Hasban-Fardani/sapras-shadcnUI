import { h } from 'vue';
import { Button } from '@/components/ui/button'
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Transaction } from '@/types/transaction'

export const columns: ColumnDef<Transaction>[] = [
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
    id: 'user',
    accessorKey: 'user',
    header: 'User',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('user'))
  },
  {
    id: 'type',
    accessorKey: 'type',
    header: 'Type',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('type'))
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: 'Status',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('status'))
  },
  {
    id: 'date',
    accessorKey: 'date',
    header: 'Date',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('date'))
  },
];
