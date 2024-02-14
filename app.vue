<template>
  <NuxtPwaManifest/>
  <div class="flex min-h-screen flex-col bg-background overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  title: "Sarpas Sekolah",
  htmlAttrs: {
    lang: "id"
  },
  meta: [
    {
      name: "description",
      content: "Aplikasi Manajemen Sarana Prasarana Sekolah"
    }
  ]
})
</script>