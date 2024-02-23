<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import { items } from './data'
import { columns } from './column'
</script>
<template>
  <ItemTable :data="items" :columns="columns"/>
</template>