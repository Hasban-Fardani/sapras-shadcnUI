<script setup>
let checked = ref(true)
const colorMode = useColorMode()

const toggleColorMode = () => {
    checked.value = !checked.value
    if (checked.value) {
        colorMode.preference = "dark"
    } else {
        colorMode.preference = "light"
    }
    console.log(checked.value, colorMode.preference)
}
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
                    Form Peminjaman
                </Button>
            </NuxtLink>
        </div>
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger class="md:hidden">
                    <Icon name="material-symbols:menu-rounded" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div class="flex items-center space-x-2">
                <Label for="color-mode">Dark</Label>
                <Switch id="color-mode" @click="toggleColorMode" />
                <Label for="color-mode">Light</Label>
            </div>
        </div>
    </header>
    <!-- End Header -->
    <slot />
</template>