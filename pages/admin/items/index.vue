<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import { items } from '@/data/items'
import { 
  itemListColumns, 
  incomingItemColumns, 
  outgoingItemColumns 
} from './column'
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
    <LazyTabsContent value="daftar-barang">
      <ItemTable :data="items" :columns="itemListColumns" class="mt-4"/>
    </LazyTabsContent>
    <LazyTabsContent value="barang-masuk">
      <ItemTable :data="items" :columns="incomingItemColumns" class="mt-4"/>
    </LazyTabsContent>
    <LazyTabsContent value="barang-keluar">
      <ItemTable :data="items" :columns="outgoingItemColumns" class="mt-4"/>
    </LazyTabsContent>
  </Tabs>
</template>