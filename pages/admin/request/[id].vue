<script setup>
import { requests } from '@/data/request'
import { CardHeader } from '~/components/ui/card';
definePageMeta({
    layout: 'admin'
});

const id = useRoute().params.id;
let request = requests.find(i => i.id == id);
</script>
<template>
  <div> 
    <Card>
        <CardHeader>
            <h2 class="text-center text-xl font-semibold">
                Keterangan
            </h2>
        </CardHeader>
        <CardContent class="grid grid-cols-2 w-fit">
            <h3>Dari</h3>
            <p>: {{ request.unit }}</p>

            <h3>Tanggal</h3>
            <p>: {{ request.date }}</p>

            <h3>Sifat</h3>
            <p>: {{ request.nature }}</p>

            <h3>Perihal</h3>
            <p>: Permintaan {{ request.categories.join("/").toString() }}</p>
        </CardContent>
    </Card>
    <Card class="mt-4">
        <CardHeader>
            <h2 class="text-center text-xl font-semibold">
                Daftar Barang
            </h2>       
        </CardHeader>
        <CardContent>
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Jenis Barang</th>
                        <th>Jumlah</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in request.items" :key="item.code">
                        <th>{{ index+1 }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.count }} {{ item.unit }}</td>
                        <td>{{ item.description }}</td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="w-full flex justify-between">
                <span>No</span>
                <span>Jenis Barang</span>
                <span>Jumlah</span>
                <span>Keterangan</span>
            </div>
            <div>
                <div class="w-full flex justify-between" v-for="(item, index) in request.items">
                    <span>{{ index+1 }}</span>
                    <span>{{  item.name  }}</span>
                    <span>{{ item.count }} {{ item.unit }}</span>
                    <span>{{ item.description }}</span>
                </div>
            </div> -->
        </CardContent>
    </Card>
  </div>
</template>