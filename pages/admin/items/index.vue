<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import { items } from '@/data/items'
import { columns } from './column'
</script>
<template>
  <Tabs default-value="daftar-barang" >
    <TabsList>
      <TabsTrigger value="daftar-barang">
        Daftar Barang
      </TabsTrigger>
      <TabsTrigger value="barang-masuk">
        Barang Masuk
      </TabsTrigger>
      <TabsTrigger value="barang-keluar">
        Barang Keluar
      </TabsTrigger>
    </TabsList>
    <TabsContent value="daftar-barang">
      <ItemTable :data="items" :columns="columns" class="mt-4"/>
    </TabsContent>
    <TabsContent value="barang-masuk">
    </TabsContent>
  </Tabs>
</template>