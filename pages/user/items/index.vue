<script setup>
definePageMeta({
    layout: 'user',
})

import { items } from './data'
import { columns } from './column'
</script>
<template>
    <ItemTable :data="items" :columns="columns"/>
</template>