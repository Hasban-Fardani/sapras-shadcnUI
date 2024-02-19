<script setup lang="ts">
const semua_transaksi = [
  {
    id: "T01",
    nama: "Bu Hima",
    avatar_fallback: "HM",
    barang: "Spidol",
    jumlah: 1
  },
  {
    id: "T02",
    nama: "Bu Pemi",
    avatar_fallback: "P",
    barang: "Kapur",
    jumlah: 10
  },
  {
    id: "T03",
    nama: "Pak Engkus",
    avatar_fallback: "EK",
    barang: "Penghapus",
    jumlah: 1
  },
  {
    id: "T04",
    nama: "Bu Mudhita",
    avatar_fallback: "M",
    barang: "Kertas",
    jumlah: 24
  },
  {
    id: "T05",
    nama: "Bu Neneng",
    avatar_fallback: "N",
    barang: "Spidol",
    jumlah: 1
  },
  
]
</script>
<template>
  <div class="space-y-8">
    <div class="flex items-center" v-for="transaksi in semua_transaksi" :key="transaksi.id">
      <Avatar class="h-9 w-9">
        <AvatarImage src="" alt="Avatar" />
        <AvatarFallback>{{ transaksi.avatar_fallback }}</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          {{ transaksi.nama }}
        </p>
        <p class="text-sm text-muted-foreground">
          {{ transaksi.barang }}
        </p>
      </div>
      <div class="ml-auto font-medium">
        {{ transaksi.jumlah }}
      </div>
    </div>
  </div>
</template>
