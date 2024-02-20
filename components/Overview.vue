<script setup lang="ts">
import { VisAxis, VisStackedBar, VisXYContainer } from '@unovis/vue'

type Data = typeof data[number]
const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Feb', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Mar', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Apr', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'May', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Jun', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Jul', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Aug', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Sep', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Oct', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Nov', total: Math.floor(Math.random() * 10) + 20 },
  { name: 'Dec', total: Math.floor(Math.random() * 10) + 20 },
]
</script>

<template>
  <VisXYContainer height="350px" :margin="{ left: 20, right: 20 }" :data="data">
    <VisStackedBar
      :x="(d: Data, i: number) => i"
      :y="(d: Data) => d.total"
      color="#41b883"
      :rounded-corners="4"
      :bar-padding="0.15"
    />
    <VisAxis
      type="x"
      :num-ticks="data.length"
      :tick-format="(index: number) => data[index]?.name"
      :grid-line="false"
      :tick-line="false" color="#888888"
    />
    <VisAxis
      type="y"
      :num-ticks="data.length"
      :tick-format="(index: number) => data[index]?.name"
      :grid-line="false"
      :tick-line="false"
      :domain-line="false" color="#888888"
    />
  </VisXYContainer>
</template>
