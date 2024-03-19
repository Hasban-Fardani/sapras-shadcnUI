<template>
    <div>
        <Label for="jumlah" class="mb-4">
            <span>Jumlah</span>
            <Input type="number" name="jumlah" v-model="jumlah" class="mt-4" min="0" />
        </Label>

        <Label class="mt-8">
            <span>Detail</span>
            <form action="" class="mt-4">
                <div class="flex gap-2 mt-2" v-for="i in jumlah" :key="i">
                    <Input type="text" placeholder="Kode Barang" />
                    <Input type="number" placeholder="jumlah barang" max="100" />
                    <Input type="number" placeholder="sumber dana" max="100" />
                </div>
            </form>
        </Label>
    </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'

let jumlah = ref(0)

</script>