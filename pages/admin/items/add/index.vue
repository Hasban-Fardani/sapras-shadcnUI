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
  <Tabs default-value="barang">
    <TabsList>
      <TabsTrigger value="barang">
        Barang
      </TabsTrigger>
      <TabsTrigger value="barang-masuk">
        Barang Masuk
      </TabsTrigger>
      <TabsTrigger value="barang-keluar">
        Barang Keluar
      </TabsTrigger>
    </TabsList>
    <LazyTabsContent value="barang">
      <LazyFormAddItem/>
    </LazyTabsContent>
    <LazyTabsContent value="barang-masuk">
      <LazyFormAddIncomingItem/>
    </LazyTabsContent>
    <LazyTabsContent value="barang-keluar">
      <LazyFormAddOutgoingItem/>
    </LazyTabsContent>
  </Tabs>
</template>
<style scoped>
form {
  @apply grid grid-cols-1 lg:grid-cols-2;
}
input {
  @apply min-w-[200px] w-full;
}
</style>