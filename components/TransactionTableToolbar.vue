<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import type { Transaction } from '@/types/transaction'

import { categories, fundingSource } from '@/data/item_options'
import { Cross2Icon } from '@radix-icons/vue'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface DataTableToolbarProps {
  table: Table<Transaction>
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input placeholder="Filter unit..." :model-value="(table.getColumn('unit')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]" @input="table.getColumn('unit')?.setFilterValue($event.target.value)" />
      <TransactionTableFacetedFilter v-if="table.getColumn('unit')" :column="table.getColumn('category')" title="Kategori"
        :options="categories" />
      <TransactionTableFacetedFilter v-if="table.getColumn('funding_source')" :column="table.getColumn('funding_source')"
        title="Sumber Dana" :options="fundingSource" />
      <TransactionTableViewOptions :table="table"/>
      <Button v-if="isFiltered" variant="ghost" class="h-8 px-2 lg:px-3" @click="table.resetColumnFilters()">
        Reset
        <Cross2Icon class="ml-2 h-4 w-4" />
      </Button>
    </div>
    <div class="flex items-center gap-2">
      <NuxtLink to="/admin/items/add">
        <Button variant="outline" size="sm" class="ml-auto hidden h-8 lg:flex">
          <Icon name="material-symbols:add-circle-outline" class="mr-2 h-4 w-4" />
          Tambah
        </Button>
      </NuxtLink>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="sm" class="ml-auto hidden h-8 lg:flex">
            <Icon name="ph:download-simple" class="mr-2 h-4 w-4" />
            Download
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>PDF</DropdownMenuItem>
          <DropdownMenuItem>Excel</DropdownMenuItem> 
          <DropdownMenuItem>XLSX</DropdownMenuItem> 
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>