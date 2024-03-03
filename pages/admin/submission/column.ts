import { h } from 'vue';
import { Button } from '@/components/ui/button'
import { ArrowUpDown, ChevronDown, Eye } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table';
import type { Transaction } from '@/types/transaction';

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
    header: 'Name',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('user'))
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
  {
    id: 'detail',
    cell: ({ row }) => h(
      'div',
      {class: 'flex gap-2'},
      h(Button, {onClick: () => navigateTo('/admin/submission/' + row.original.id), size: null, class: 'p-1.5'}, () => [h(Eye, {class: 'h-5 w-5'})]),
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
