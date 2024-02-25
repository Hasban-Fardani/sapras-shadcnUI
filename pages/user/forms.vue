<script setup lang="ts">
definePageMeta({
  layout: 'user',
})

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { ComboboxAnchor, ComboboxInput, ComboboxPortal, ComboboxRoot } from 'radix-vue'
import { items } from '@/data/items'
import * as z from 'zod'


const data = items.map(i => { return { label: i.name, value: i.id } })
const modelValue = ref<string[]>([])
const open = ref(false)
const searchTerm = ref('')

const filteredData = computed(() => data.filter(i => !modelValue.value.includes(i.label)))

let count = [0, 0]
const onSubmit = (e : Event) => {
  e.preventDefault()
  console.log(modelValue.value.indexOf('Pensil'))
}
</script>
<template>
  <h2 class="text-2xl font-bold">Form Pengajuan Barang</h2>
  <!-- Start select items -->
  <div class="mt-6">
    <Label class="text-md">Pilih Barang</Label>
    <TagsInput class="px-0 gap-0 w-full mt-3" :model-value="modelValue">
      <div class="flex gap-2 flex-wrap items-center px-3">
        <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
          <TagsInputItemText />
          <TagsInputItemDelete />
        </TagsInputItem>
      </div>

      <ComboboxRoot v-model="modelValue" v-model:open="open" v-model:searchTerm="searchTerm" class="w-full">
        <ComboboxAnchor as-child>
          <ComboboxInput placeholder="nama barang" as-child>
            <TagsInputInput class="w-full px-3" :class="modelValue.length > 0 ? 'mt-2' : ''" @keydown.enter.prevent />
          </ComboboxInput>
        </ComboboxAnchor>

        <ComboboxPortal>
          <CommandList position="popper"
            class="w-[--radix-popper-anchor-width] rounded-md mt-2 border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
            <CommandEmpty />
            <CommandGroup>
              <CommandItem v-for="data in filteredData" :key="data.value" :value="data.label" @select.prevent="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  searchTerm = ''
                  modelValue.push(ev.detail.value)
                }

                if (filteredData.length === 0) {
                  open = false
                }
              }">
                {{ data.label }}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </ComboboxPortal>
      </ComboboxRoot>
    </TagsInput>
  </div>
  <!-- End select items -->

  <!-- Items count -->
  <div class="mt-6">
    <Label class="text-md">Jumlah Barang</Label>
    <form @submit="onSubmit" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border p-3 rounded-md mt-3" id="jumlah" name="jumlah">
      <div v-for="item in modelValue" class="flex items-center">
        <Label class="w-[100px]">{{ item }}</Label>
        <Input type="number" class="w-fit" placeholder="12" name="number"/>
      </div>
    </form>
    <Button type="submit" class="w-fit mt-6" form="jumlah">
      Submit
    </Button>
  </div>
  <!-- End Items count -->
</template>