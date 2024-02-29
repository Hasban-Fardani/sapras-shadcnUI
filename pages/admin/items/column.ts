import { h } from 'vue'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, Eye, History, Edit } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table';
import type { Item } from '~/types/item'

// item list columns
export const itemListColumns: ColumnDef<Item>[] = [
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
    cell: ({ row }) => h(
      'div',
      {class: 'flex gap-2'},
      h(Button, {onClick: () => navigateTo('/admin/items/' + row.original.id), size: null, class: 'p-1.5'}, () => [h(Eye, {class: 'h-5 w-5'})]),
      h(Button, {onClick: () => navigateTo('/admin/items/edit/' + row.original.id), size: null, class: 'p-1.5'}, () => [h(Edit, {class: 'h-5 w-5'})]),
      h(Button, {onClick: () => navigateTo('/admin/items/history/' + row.original.id), size: null, class: 'p-1.5'}, () => [h(History, {class: 'h-5 w-5'})])
    ),
    enableSorting: false,
    enableHiding: false,
  },
];

export const incomingItemColumns: ColumnDef<Item>[] = [
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
    id: 'stok',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Jumlah', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'stok',
    enableSorting: true,
    cell: ({ row }) => h('div', {class: 'text-center'}, row.getValue('stok'))
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
    id: 'supplier',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Suplier', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'supplier',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, row.getValue('supplier')),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'date',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Tanggal', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'date',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, Date(Date.now() + Math.random())),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]

export const outgoingItemColumns: ColumnDef<Item>[] = [
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
    id: 'stok',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Jumlah', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'stok',
    enableSorting: true,
    cell: ({ row }) => h('div', {class: 'text-center'}, row.getValue('stok'))
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
    id: 'unit',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Unit', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'unit',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, "Unit " + ["A", "B", "C", "D", "E"][Math.floor(Math.random() * 5)]),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'date',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Tanggal', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    accessorKey: 'date',
    enableSorting: true,
    cell: ({ row }) => h('div', {}, Date(Date.now() + Math.random())),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]