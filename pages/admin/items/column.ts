import { h } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import type { ColumnDef } from '@tanstack/vue-table';
import type { Item } from './data'

export const columns: ColumnDef<Item>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: 'ID',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('id'))
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('name'))
  },
  {
    id: 'category',
    accessorKey: 'category',
    header: 'Category',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('category'))
  },
  {
    id: 'supplier',
    header: 'Supplier',
    accessorKey: 'supplier',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('supplier'))
  },
  {
    id: 'unit',
    header: 'Unit',
    accessorKey: 'unit',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('unit'))
  },
  {
    id: 'funding_source',
    header: 'Funding Source',
    accessorKey: 'funding_source',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('funding_source'))
  },
  {
    id: 'code',
    header: 'Code',
    accessorKey: 'code',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('code'))
  },
  {
    id: 'merk',
    header: 'Merk',
    accessorKey: 'merk',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('merk'))
  },
  {
    id: 'stok',
    header: 'Stok',
    accessorKey: 'stok',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('stok'))
  },
  {
    id: 'min_stok',
    header: 'Min Stok',
    accessorKey: 'min_stok',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('min_stok'))
  },
  {
    id: 'count',
    header: 'Count',
    accessorKey: 'count',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('count'))
  },
  {
    id: 'type',
    header: 'Type',
    accessorKey: 'type',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('type'))
  }
]