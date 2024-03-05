<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import type { Submission } from '@/types/submission'

import { status } from '@/data/submission_options'
import { Cross2Icon } from '@radix-icons/vue'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface DataTableToolbarProps {
  table: Table<Submission>
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input placeholder="Filter unit..." :model-value="(table.getColumn('unit')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]" @input="table.getColumn('unit')?.setFilterValue($event.target.value)" />
      <SubmissionTableFacetedFilter v-if="table.getColumn('status')" :column="table.getColumn('status')" title="Status"
        :options="status" />
      <SubmissionTableViewOptions :table="table"/>
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