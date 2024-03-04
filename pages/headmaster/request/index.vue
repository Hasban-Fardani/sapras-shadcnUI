<script setup lang="ts">
definePageMeta({
  layout: 'headmaster'
})

import {requests as data} from '@/data/request'
import { columns } from './column'

</script>
<template>
  <div class="w-full">
    <RequestTable :data="data" :columns="columns"/>
  </div>
</template>