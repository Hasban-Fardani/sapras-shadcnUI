<script setup>
const colorMode = useColorMode()

let isOpen = ref(false)
let checked = ref(true)

const toggleColorMode = () => {
    checked.value = !checked.value
    if (checked.value) {
        colorMode.preference = "dark"
    } else {
        colorMode.preference = "light"
    }
}

onMounted(() => {
    const size = useWindowSize()
    if (size.width.value > 768) {
        isOpen.value = true
    }
    console.log(colorMode.preference, colorMode.preference != 'dark')
})

let paths = computed(() => useRouter().currentRoute.value.fullPath.split("/").filter(i => i !== ''))
</script>
<template>
    <div class="flex bg-gray-100/40 dark:bg-gray-800/40">
        <div class="w-[270px] border-r bg-card shadow md:block" v-show="isOpen">
            <NuxtLink to="/">
                <Button variant="ghost" class="w-full flex justify-start gap-2 rounded-none py-8">
                    <NuxtImg src="/icon.svg" width="30" height="30" />
                    <span class="font-medium">Sarpras</span>
                </Button>
            </NuxtLink>
            <nav class="flex flex-col h-full">
                <NuxtLink to="/admin">
                    <Button variant="ghost" class="w-full flex justify-start gap-2 rounded-none">
                        <Icon name="material-symbols-light:dashboard" />
                        Dashboard
                    </Button>
                </NuxtLink>
                <NuxtLink to="/admin/items">
                    <Button variant="ghost" class="w-full flex justify-start gap-2 rounded-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="h-4 w-4">
                            <path d="m7.5 4.27 9 5.15"></path>
                            <path
                                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z">
                            </path>
                            <path d="m3.3 7 8.7 5 8.7-5"></path>
                            <path d="M12 22V12"></path>
                        </svg>
                        Barang
                    </Button>
                </NuxtLink>
                <NuxtLink to="/admin/users">
                    <Button variant="ghost" class="w-full flex justify-start gap-2 rounded-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="h-4 w-4">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Akun
                    </Button>
                </NuxtLink>
                <NuxtLink to="/admin/transactions">
                    <Button variant="ghost" class="w-full flex justify-start gap-2 rounded-none">
                        <Icon name="material-symbols:request-page" />
                        Pengajuan
                    </Button>
                </NuxtLink>
                <NuxtLink to="/admin/transactions">
                    <Button variant="ghost" class="w-full flex justify-start gap-2 rounded-none">
                        <Icon name="carbon:request-quote" />
                        Permintaan
                    </Button>
                </NuxtLink>
                <NuxtLink to="/admin/setting">
                    <Button variant="ghost" class="w-full flex justify-start gap-2 rounded-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="h-4 w-4">
                            <path
                                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                            </path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Setting
                    </Button>
                </NuxtLink>
            </nav>
        </div>
        <div class="flex-1 grid gap-4 md:gap-8 px-6 py-3">
            <div class="flex flex-col">
                <div class="flex-1">
                    <div class="flex w-full items-center justify-between mb-4">
                        <div class="flex items-center gap-4">
                            <Button variant="outline" class="w-min flex items-center" @click="isOpen = !isOpen">
                                <Icon name="material-symbols:arrow-back-rounded" v-if="isOpen" />
                                <Icon name="material-symbols:arrow-forward-rounded" v-else />
                            </Button>
                            <div class="text-sm breadcrumbs">
                                <ul>
                                    <li v-for="path in paths">
                                        <NuxtLink :to="'/' + paths.slice(0, paths.indexOf(path)+1).toString().replaceAll(',', '/')">{{ path }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <ClientOnly>
                                <Label for="color-mode">Dark</Label>
                                <Switch id="color-mode" @update:checked="toggleColorMode()"
                                    :checked="colorMode.preference != 'dark'" />
                                <Label for="color-mode">Light</Label>
                            </ClientOnly>
                        </div>
                    </div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>