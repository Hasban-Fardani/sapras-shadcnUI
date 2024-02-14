<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <NuxtLink
      to="/"
      class="flex gap-2 items-center text-sm font-medium transition-colors hover:text-primary"
    >
      <NuxtImg src="/icon.svg" alt="icon sarpras" width="30" height="30" />
      <span class="text-lg font-semibold">Admin Dashboard</span>
    </NuxtLink>
    <NuxtLink
      to="/admin"
      class="text-sm font-medium transition-colors hover:text-primary"
    >
      Overview
    </NuxtLink>
    <NuxtLink
      to="/admin"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Customers
      </NuxtLink>
    <NuxtLink
      to="/admin"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Products
      </NuxtLink>
    <NuxtLink
      to="/admin"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Settings
      </NuxtLink>
    
  </nav>
</template>
