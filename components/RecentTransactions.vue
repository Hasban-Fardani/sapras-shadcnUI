<script setup lang="ts">
const semua_transaksi = [
  {
    id: "T01",
    nama: "Unit BK",
    avatar_fallback: "BK",
    barang: "Spidol",
    jumlah: 50
  },
  {
    id: "T02",
    nama: "Unit Sarpras",
    avatar_fallback: "SP",
    barang: "Pulpen",
    jumlah: 40
  },
  {
    id: "T03",
    nama: "Unit IT",
    avatar_fallback: "IT",
    barang: "Penghapus",
    jumlah: 10
  },
  {
    id: "T04",
    nama: "Unit PJOK",
    avatar_fallback: "PJ",
    barang: "Kapur",
    jumlah: 12
  },
  {
    id: "T05",
    nama: "Unit DKV",
    avatar_fallback: "N",
    barang: "Kertas",
    jumlah: 100
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
