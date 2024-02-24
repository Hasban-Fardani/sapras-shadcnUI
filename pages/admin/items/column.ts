import { h } from 'vue'
import { Button } from '@/components/ui/button'
import type { ColumnDef } from '@tanstack/vue-table';
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import type { Item } from './data'

export const columns: ColumnDef<Item>[] = [
  {
    id: 'code',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Kode', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'code',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('code'))
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Nama', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('name'))
  },
  {
    id: 'category',
    accessorKey: 'category',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Kategori', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('category')),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'merk',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Merk', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'merk',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('merk'))
  },
  {
    id: 'supplier',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Supplier', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'supplier',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('supplier'))
  },
  {
    id: 'unit',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Satuan', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'unit',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('unit'))
  },
  {
    id: 'funding_source',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Dana', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'funding_source',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('funding_source')),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'stok',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Stok', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'stok',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('stok'))
  },
  {
    id: 'detail',
    cell: ({ row }) => h(Button, {
      variant: 'outline',
      size: 'sm',
      onClick: () => navigateTo('/admin/items/' + row.original.id),
    }, 'detail'),
    enableSorting: false,
    enableHiding: false,
  },
]

/**
  '(list: { label: string; value: string; icon?: Component | undefined; }[], term: string) => { label: string; value: string; icon?: Component | undefined; }[]' 
  '(val: string[] | number[] | false[] | true[] | Record<string, any>[], term: string) => string[] | number[] | false[] | true[] | Record<string, any>[]'.
 */