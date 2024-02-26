<script setup>
import { items } from "@/data/items";

definePageMeta({
    layout: 'admin'
})

const id = useRoute().params.id;
let item = items.find(i => i.id == id);
</script>
<template>
    <div class="flex flex-wrap">
        <Card class="w-full lg:w-1/3 min-w-[300px]">
            <CardHeader>
                <h2 class="text-xl font-semibold">Gambar</h2>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
        <Card class="w-full lg:w-2/3 min-w-[600px]">
            <CardHeader>
                <h2 class="text-xl font-semibold">Info</h2>
            </CardHeader>
            <CardContent class="grid grid-cols-3 w-fit">

                    <h3>Nama</h3>
                    <span>:</span>
                    {{ item.name }}
                
                    <h3>Kode</h3>
                    <span>:</span>
                    {{ item.code }}
                
                    <h3>Kategori</h3>
                    <span>:</span>
                    {{ item.category }}
                
                
                    <h3>Supplier</h3>
                    <span>:</span>
                    {{ item.supplier }}
                
                
                    <h3>Satuan</h3>
                    <span>:</span>
                    {{ item.unit }}
                
                
                    <h3>Merk</h3>
                    <span>:</span>
                    {{ item.merk }}
                
                
                    <h3>Stok</h3>
                    <span>:</span>
                    {{ item.stok }}
                
                
                    <h3>Min. Stok</h3>
                    <span>:</span>
                    {{ item.min_stok }}
                
            </CardContent>
        </Card>
    </div>
</template>