<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import type { Item } from '../pages/admin/items/data'

import { categories, fundingSource } from '../pages/admin/items/option'
import ItemTableFacetedFilter from './ItemTableFacetedFilter.vue'
import ItemTableViewOptions from './ItemTableViewOptions.vue'
import { Cross2Icon } from '@radix-icons/vue'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface DataTableToolbarProps {
  table: Table<Item>
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filter Items..."
        :model-value="(table.getColumn('title')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn('title')?.setFilterValue($event.target.value)"
      />
      <ItemTableFacetedFilter
        v-if="table.getColumn('category')"
        :column="table.getColumn('category')"
        title="Kategori"
        :options="categories"
      />
      <ItemTableFacetedFilter
        v-if="table.getColumn('funding_source')"
        :column="table.getColumn('funding_source')"
        title="Funding Source"
        :options="fundingSource"
      />

      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Reset
        <Cross2Icon class="ml-2 h-4 w-4" />
      </Button>
    </div>
    <div class="flex items-center gap-2">
      <NuxtLink to="/admin/items/add">
        <Button class="flex items-center gap-1 " size="sm" variant="outline">
          <Icon name="material-symbols:add-circle-outline"/>
          <span>Tambah</span>
        </Button>
      </NuxtLink>
      <ItemTableViewOptions :table="table" />
    </div>
  </div>
</template>