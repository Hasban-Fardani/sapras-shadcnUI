<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import type { Request } from '@/types/request'
import { computed } from 'vue'

import { status } from '@/data/request_options'
import { Cross2Icon } from '@radix-icons/vue'
import { Button } from './ui/button'
import { Input } from './ui/input'

import RequestTableFacetedFilter from './RequestTableFacetedFilter.vue'
import RequestTableViewOptions from './RequestTableViewOptions.vue'

interface DataTableToolbarProps {
  table: Table<Request>
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input placeholder="Filter unit..." :model-value="(table.getColumn('unit')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]" @input="table.getColumn('unit')?.setFilterValue($event.target.value)" />
      <RequestTableFacetedFilter v-if="table.getColumn('status')" :column="table.getColumn('status')"
        title="Status" :options="status" />
      <RequestTableViewOptions :table="table"/>
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