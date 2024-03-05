<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import {submissions as data} from '@/data/submission'
import { columns } from './column'

</script>
<template>
  <div class="w-full">
    <SubmissionTable :data="data" :columns="columns"/>
  </div>
</template>