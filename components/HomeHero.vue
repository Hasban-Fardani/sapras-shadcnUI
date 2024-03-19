<template>
    <!-- Hero Section -->
    <section class="mx-auto flex flex-col gap-16 justify-center items-center pt-36 pb-10">
        <div class="flex flex-col gap-2 justify-center items-center">
            <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter lg:text-5xl lg:leading-[1.1]" data-aos="fade-up">
                Aplikasi Manajemen<br><span class="text-blue-500">Sarana Prasarana</span>  Sekolah
            </h1>
            <span class="text-center text-lg text-muted-foreground sm:text-xl max-w-[700px] px-10" data-aos="fade-up">
                Buatlah manajemen Sarana Prasarana di sekolah anda menjadi mudah dan efektif
            </span>
            <div class="flex gap-4 pt-4" data-aos="fade-up">
                <NuxtLink to="/redirect">
                    <Button class="bg-white bg-primary">
                        Buka Aplikasi
                    </Button>
                </NuxtLink>
                <NuxtLink to="#fitur">
                    <Button variant="outline">
                        Daftar Fitur
                    </Button>
                </NuxtLink>
            </div>
        </div>
        <NuxtImg src="/images/dashboard.png" alt="Dashboard Sarpras" width="972" height="558" class="drop-shadow-xl shadow-gray-100" format="webp" data-aos="fade-up"/>
    </section>
</template>