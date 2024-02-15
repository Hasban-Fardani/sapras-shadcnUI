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
<template>
  <NuxtPwaManifest/>
  <div class="flex min-h-screen flex-col bg-background overflow-hidden">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>