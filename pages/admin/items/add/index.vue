<script setup>
definePageMeta({
  layout: 'admin'
})

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  category: z.string(),
  supplier: z.string(),
  unit: z.string(),
  funding_resource: z.enum(['BOS', 'APB']),
  merk: z.string(),
  stok: z.number(),
  min_stok: z.number(),
}))

const { handleSubmit, handleReset } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((v) => {
  console.log(v)
})
</script>
<template>
  <form @submit="onSubmit" class="flex flex-col gap-3">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Nama</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Spidol" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="category">
        <FormItem>
          <div class="flex items-center gap-2">
            <FormLabel>Kategori</FormLabel>
            <NuxtLink to="/admin/items/add/category" class="text-sm text-primary">
              <Button variant="outline" size="xs">
                <Icon name="material-symbols:add" class="w-4 h-4"/>
              </Button>
            </NuxtLink>
          </div>
          <FormControl>
            <Input type="text" placeholder="ATK" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    <FormField v-slot="{ componentField }" name="supplier">
      <FormItem>
        <FormLabel>Suplier</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Toko Sejahtera" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="unit">
      <FormItem>
        <FormLabel>Satuan</FormLabel>
        <FormControl>
          <Input type="text" placeholder="unit, rim, lusin" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="funding_resource">
      <FormItem>
        <FormLabel>Sumber Dana</FormLabel>
        <FormControl>
          <Input type="text" placeholder="BOS, APB" v-bind="componentField"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="merk">
      <FormItem>
        <FormLabel>Merk</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Sinar Dunia" v-bind="componentField"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="stok">
      <FormItem>
        <FormLabel>Stok</FormLabel>
        <FormControl>
          <Input type="number" placeholder="200" v-bind="componentField" min="0"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="min_stok">
      <FormItem>
        <FormLabel>Stok Minimum</FormLabel>
        <FormControl>
          <Input type="number" placeholder="200" v-bind="componentField" min="0"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-fit">
      Submit
    </Button>
  </form>
</template>
<style scoped>
form {
  @apply grid grid-cols-1 lg:grid-cols-2;
}
input {
  @apply min-w-[200px] w-full;
}
</style>