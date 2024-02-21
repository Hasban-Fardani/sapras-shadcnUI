<script setup>
const colorMode = useColorMode()
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
    if (size.width.value > 768){
        isOpen.value = true
    }
    console.log(colorMode.preference, colorMode.preference != 'dark')
})
</script>
<template>
    <!-- Header -->
    <header class="container flex justify-between h-14 max-w-screen-2xl items-center fixed" data-aos="fade-in">
        <NuxtLink to="/" class="flex gap-2 items-center">
            <NuxtImg src="/icon.svg" alt="icon sarpras" width="30" height="30" />
            <span class="text-lg font-semibold">Sarpras</span>
        </NuxtLink>
        <div class="hidden md:flex gap-4">
            <NuxtLink to="#fitur">
                <Button variant="ghost">
                    Dashboard
                </Button>
            </NuxtLink>
            <NuxtLink to="#harga">
                <Button variant="ghost">
                    Daftar Barang
                </Button>
            </NuxtLink>
            <NuxtLink to="#tentang">
                <Button variant="ghost">
                    Form Transaksi
                </Button>
            </NuxtLink>
        </div>
        <div>
            <div class="hidden md:flex items-center space-x-2">
                <ClientOnly>
                <Label for="color-mode">Dark</Label>
                    <Switch id="color-mode" @update:checked="toggleColorMode()" :checked="colorMode.preference != 'dark'"/>
                <Label for="color-mode">Light</Label>
                </ClientOnly>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger class="md:hidden">
                    <Icon name="material-symbols:menu-rounded" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    <DropdownMenuItem>Daftar Barang</DropdownMenuItem>
                    <DropdownMenuItem>Form Pengajuan</DropdownMenuItem>
                    <DropdownMenuItem>
                        <div class="flex items-center space-x-2">
                            <ClientOnly>
                                <Label for="color-mode">Dark</Label>
                                    <Switch id="color-mode" @update:checked="toggleColorMode()" :checked="colorMode.preference != 'dark'"/>
                                <Label for="color-mode">Light</Label>
                            </ClientOnly>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
    <!-- End Header -->
    <slot />
</template>