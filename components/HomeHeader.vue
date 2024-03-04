<template>
    <!-- Header -->
    <header class="container flex justify-between h-16 max-w-screen-2xl items-center fixed z-10 border-b backdrop-blur-md" data-aos="fade-in">
        <NuxtLink to="/" class="flex gap-2 items-center">
            <NuxtImg src="/icon.svg" alt="icon sarpras" width="30" height="30"/>
            <span class="text-lg font-semibold">Sarpras</span>
        </NuxtLink>
        <div class="hidden md:flex gap-8">
            <NuxtLink to="#fitur">
                <Button variant="ghost">
                    Fitur
                </Button>
            </NuxtLink>
            <NuxtLink to="#harga">
                <Button variant="ghost">
                    Harga
                </Button>
            </NuxtLink>
            <NuxtLink to="#tentang">
                <Button variant="ghost">
                    Tentang
                </Button>
            </NuxtLink>
            <NuxtLink to="#kontak">
                <Button variant="ghost">
                    Kontak
                </Button>
            </NuxtLink>
        </div>
        <div class="flex items-center gap-1">
            <DropdownMenu>
                <DropdownMenuTrigger class="md:hidden" aria-label="Open main menu">
                    <Icon name="material-symbols:menu-rounded"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="">
                    <NuxtLink to="#fitur">
                        <DropdownMenuItem>Fitur</DropdownMenuItem>
                    </NuxtLink>
                    <NuxtLink to="#harga">
                        <DropdownMenuItem>Harga</DropdownMenuItem>
                    </NuxtLink>
                    <NuxtLink to="#tentang">
                        <DropdownMenuItem>Tentang</DropdownMenuItem>
                    </NuxtLink>
                    <NuxtLink to="#kontak">
                        <DropdownMenuItem>Kontak</DropdownMenuItem>
                    </NuxtLink>
                </DropdownMenuContent>
            </DropdownMenu>
            <NuxtLink to="/auth/register">
                <Button variant="ghost">
                    Register
                </Button>
            </NuxtLink>
        </div>
    </header>
</template>