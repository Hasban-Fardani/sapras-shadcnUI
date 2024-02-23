import { h } from 'vue'
import { Button } from '@/components/ui/button'
import type { ColumnDef } from '@tanstack/vue-table';
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import type { Account } from './data'

export const columns: ColumnDef<Account>[] = [
  {
    id: 'nomer_induk',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['No.Induk', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'nomer_induk',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('nomer_induk'))
  },
  {
    id: 'name',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Nama', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'name',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('name'))
  },
  {
    id: 'unit',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Unit', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'unit',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('unit'))
  },
  {
    id: 'role',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Role', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'role',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('role'))
  },
]