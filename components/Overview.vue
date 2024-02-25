<script setup lang="ts">
import { VisAxis, VisLine, VisStackedBar, VisXYContainer } from '@unovis/vue'

type Data = typeof data[number]
const data = [
  { name: 'Jan', total: 13 },
  { name: 'Feb', total: 15 },
  { name: 'Mar', total: 14 },
  { name: 'Apr', total: 13 },
  { name: 'May', total: 17 },
  { name: 'Jun', total: 16 },
  { name: 'Jul', total: 14 },
  { name: 'Aug', total: 13 },
  { name: 'Sep', total: 14 },
  { name: 'Oct', total: 15 },
  { name: 'Nov', total: 12 },
  { name: 'Dec', total: 14 },
]

</script>

<template>
  <VisXYContainer height="350px" :margin="{ left: 20, right: 20 }" :data="data">
    <VisLine
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
