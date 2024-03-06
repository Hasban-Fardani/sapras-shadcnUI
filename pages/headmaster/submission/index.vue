<script setup lang="ts">
definePageMeta({
  layout: 'headmaster'
})

import {submissions as data} from '@/data/submission'
import { columns } from './column'

</script>
<template>
  <div class="w-full">
    <SubmissionTable :data="data" :columns="columns"/>
  </div>
</template>