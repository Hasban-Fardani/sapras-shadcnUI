<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import {transactions as data} from '@/data/transactions'
import { columns } from './column'

</script>
<template>
  <div class="w-full">
    <TransactionTable :data="data" :columns="columns"/>
  </div>
</template>