<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../../components/ui/button'
definePageMeta({
  layout: "auth"
})

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <NuxtLink href="/auth/register" :class="cn(
    buttonVariants({ variant: 'ghost' }),
    'absolute right-4 top-4 md:right-8 md:top-8',
  )">
    Register
  </NuxtLink>
  <div class="flex flex-col space-y-2 text-center">
    <h1 class="text-2xl font-semibold tracking-tight">
      Login Akun
    </h1>
    <p class="text-sm text-muted-foreground">
      Masukkan nomer induk dan password untuk login
    </p>
  </div>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="nomer_induk">
            Nomer Induk
          </Label>
          <Input id="nomer_induk" placeholder="221023201098" type="text" auto-capitalize="none"
            auto-complete="nomer induk" auto-correct="off" :disabled="isLoading" />
          <Label class="sr-only" for="password">
            Password
          </Label>
          <Input id="password" placeholder="password anda" type="password" auto-capitalize="none" auto-complete="password"
            auto-correct="off" :disabled="isLoading" />
        </div>
        <Button :disabled="isLoading">
          Login dengan Email
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Atau Lanjutkan Dengan
        </span>
      </div>
    </div>
    <Button variant="outline" type="button" :disabled="isLoading">
      <!-- todo: logo google -->
      Google
    </Button>
  </div>
</template>