<script setup>
import { submissions } from '@/data/submission'
import { CardHeader } from '~/components/ui/card';
definePageMeta({
    layout: 'admin'
});

const id = useRoute().params.id;
let request = submissions.find(i => i.id == id);
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
            <p>: Pengajuan {{ request.categories.join("/").toString() }}</p>
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
        </CardContent>
    </Card>
  </div>
</template>