<template>
    <!-- Header -->
    <header class="container flex justify-between h-14 max-w-screen-2xl items-center fixed" data-aos="fade-in">
        <NuxtLink to="/" class="flex gap-2 items-center">
            <NuxtImg src="/icon.svg" alt="icon sarpras" width="30" height="30"/>
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
        </div>
    </header>
    <!-- End Header -->
    <slot/>
</template>