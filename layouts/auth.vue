<template>
  <div class="container relative h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <!-- <NuxtImg src="/auth.svg" class="absolute inset-0"/> -->
      <NuxtLink to="/" class="relative z-20 flex items-center text-lg font-medium">
        <NuxtImg src="/icon.svg" width="30" height="30"/>
        <p class="ml-1">
          Sarpras Team
        </p>
      </NuxtLink>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
         <p class="text-lg">
            &ldquo;Aplikasi ini sangat memudahkan saya dalam mengelola data sarana
            dan prasarana di Sekolah saya.&rdquo;
          </p>
          <footer class="text-sm">
            Anonim
          </footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = "dark"
</script>