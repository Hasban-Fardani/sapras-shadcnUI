import { h } from 'vue'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, Eye, History, Edit } from 'lucide-vue-next'
import type { ColumnDef } from '@tanstack/vue-table';
import type { Item } from '~/types/item'

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
]