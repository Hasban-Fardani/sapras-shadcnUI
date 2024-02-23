<script setup>
import { items } from "./data";

definePageMeta({
    layout: 'admin'
})

const id = useRoute().params.id;
let item = items.find(i => i.id == id);
console.log(item);
</script>
<template>

</template>