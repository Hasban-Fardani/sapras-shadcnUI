<template>
    <!-- Header -->
    <header class="container flex justify-between h-14 max-w-screen-2xl items-center fixed z-10 border-b backdrop-blur-md" data-aos="fade-in">
        <NuxtLink to="/" class="flex gap-2 items-center">
            <NuxtImg src="/icon.svg" alt="icon sarpras" width="30" height="30"/>
            <span class="text-lg font-semibold">Sarpras</span>
        </NuxtLink>
        <div class="hidden md:flex gap-4">
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
                <DropdownMenuTrigger class="md:hidden">
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
    <!-- Hero Section -->
    <section class="mx-auto flex flex-col gap-16 justify-center items-center pt-28 pb-10">
        <div class="flex flex-col gap-2 justify-center items-center">
            <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter lg:text-5xl lg:leading-[1.1]" data-aos="fade-up">
                Aplikas Manajemen<br>Sarana Prasarana Sekolah
            </h1>
            <span class="text-center text-lg text-muted-foreground sm:text-xl max-w-[700px] px-10" data-aos="fade-up">
                Buatlah manajemen Sarana Prasarana di sekolah anda menjadi mudah dan efektif
            </span>
            <div class="flex gap-4 pt-4" data-aos="fade-up">
                <NuxtLink to="/redirect">
                    <Button>
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
        <NuxtImg src="/images/dashboard.png" width="950px" class="drop-shadow-xl shadow-gray-100"/>
    </section>
    <!-- Fitur -->
    <section class="mx-auto flex flex-col gap-2 justify-center items-center py-10" id="fitur">
        <h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight" data-aos="fade-up">
            Daftar Fitur 
        </h2>
        <span class="text-center text-lg text-muted-foreground sm:text-xl" data-aos="fade-up">
            Fitur terlengkap untuk manajemen anda
        </span>
        <div class="mt-8 container grid grid-rows-6 grid-cols-1 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card class="w-full" data-aos="fade-up">
                <CardHeader class="font-semibold text-xl">
                    Dashboard
                </CardHeader>
                <CardContent>
                    dashboard interaktif untuk melihat data sarana prasarana
                </CardContent>
            </Card>
            <Card class="w-full" data-aos="fade-up">
                <CardHeader class="font-semibold text-xl">
                    Pendataan Sarana
                </CardHeader>
                <CardContent>
                    Mendata Sarana dengan nyaman dan mudah
                </CardContent>
            </Card>
            <Card class="w-full" data-aos="fade-up">
                <CardHeader class="font-semibold text-xl">
                    Pendataan Prasarana
                </CardHeader>
                <CardContent>
                    Mendata prasarana dengan nyaman dan mudah
                </CardContent>
            </Card>
            <Card class="w-full" data-aos="fade-up">
                <CardHeader class="font-semibold text-xl">
                    Export dan Import data
                </CardHeader>
                <CardContent>
                    Export dan import data dengan jumlah ribuan dalam waktu singkat
                </CardContent>
            </Card>
            <Card class="w-full" data-aos="fade-up">
                <CardHeader class="font-semibold text-xl">
                    Transaksi Barang
                </CardHeader>
                <CardContent>
                    Dapat membuat berita acara serah terima barang dan mencatatnya kedalam database
                </CardContent>
            </Card>
            <Card class="w-full" data-aos="fade-up">
                <CardHeader class="font-semibold text-xl">
                    Tracking data
                </CardHeader>
                <CardContent>
                    Semua perubahan dan aktifitas dapat dipantau oleh admin, jangan khawatir terdapat kekeliruan
                </CardContent>
            </Card>
        </div>
    </section>
    <!-- Harga -->
    <section class="mx-auto flex flex-col gap-2 justify-center items-center py-10" id="harga">
        <h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight" data-aos="fade-up">
            Daftar Harga
        </h2>
        <span class="text-center text-lg text-wrap text-muted-foreground sm:text-xl px-10" data-aos="fade-up">
            Harga terjangkau dan bayar sesuai kebutuhan saja
        </span>
        <div class="mt-8 container flex flex-wrap justify-center items-center gap-8">
            <Card class="w-[300px] h-[350px] text-center flex flex-col" data-aos="fade-up">
                <CardHeader class="">
                    <h2 class="font-semibold text-xl">
                        Reguler
                    </h2>
                </CardHeader>
                <CardContent class="text-center px-10 flex-grow flex justify-center items-center">
                    <ul class="flex-grow flex flex-col justify-center gap-2">
                        <li>Dashboard</li>
                        <li>Kelola Barang</li>
                        <li>Kelola Akun</li>
                        <li>Kelola Pengajuan</li>
                    </ul>
                </CardContent>
                <CardFooter class="flex flex-col justify-center items-center gap-4">
                    <h3 class="text-lg font-semibold">RP 59.000 / Bulan</h3>
                    <NuxtLink to="#">
                      <Button>
                          Pesan
                      </Button>
                    </NuxtLink>
                </CardFooter>
            </Card>
            <Card class="w-[300px] h-[350px] lg:w-[310px] lg:h-[370px] text-center flex flex-col lg:bg-secondary" data-aos="fade-up">
                <CardHeader class="">
                    <h2 class="font-semibold text-xl">
                        Premium
                    </h2>
                </CardHeader>
                <CardContent class="text-center px-10 flex-grow">
                    <ul class="flex-grow flex flex-col justify-center items-center gap-2">
                        <li>Semua fitur reguler</li>
                        <li>Kelola asset</li>
                        <li>Laporan transaksi</li>
                        <li>Download Laporan</li>
                        <li>Domain kostum</li>
                    </ul>
                </CardContent>
                <CardFooter class="flex flex-col justify-center items-center gap-4">
                    <h3 class="text-lg font-semibold">RP 99.000 / Bulan</h3>
                    <NuxtLink to="#">
                      <Button>
                          Pesan
                      </Button>
                    </NuxtLink>
                </CardFooter>
            </Card>
            <Card class="w-[300px] h-[350px] text-center flex flex-col" data-aos="fade-up">
                <CardHeader class="">
                    <h2 class="font-semibold text-xl">
                        Instansi
                    </h2>
                </CardHeader>
                <CardContent class="text-center px-10 flex-grow">
                    <ul class="flex-grow flex flex-col justify-center items-center gap-2">
                        <li>Semua fitur premium</li>
                        <li></li>
                        <li>Kostum fitur</li>
                        <li></li>
                    </ul>
                </CardContent>
                <CardFooter class="flex flex-col justify-center items-center gap-4">
                    <h3 class="text-lg font-semibold">Kontak harga</h3>
                    <NuxtLink to="#">
                      <Button>
                          Pesan
                      </Button>
                    </NuxtLink>
                </CardFooter>
            </Card>
        </div>
    </section>
    <!-- Tentang -->
    <section class="mx-auto flex flex-col gap-2 justify-center items-center py-10" id="tentang">
        <h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight" data-aos="fade-up">
            Tentang
        </h2>
        <span class="text-center text-lg text-muted-foreground sm:text-xl" data-aos="fade-up">
        </span>
        <p class="container text-center" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere pariatur dolorem libero necessitatibus animi earum, ex numquam reiciendis voluptatum sit laborum error! Sed cum facilis corporis libero impedit minima.
        </p>
    </section>
    <!-- Kontak -->
    <section class="mx-auto flex flex-col gap-2 justify-center items-center py-10" id="kontak">
        <h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight" data-aos="fade-up">
            Kontak Kami
        </h2>
        <span class="text-center text-lg text-muted-foreground sm:text-xl" data-aos="fade-up">
            Hubungi kami kapan saja
        </span>
        <form data-aos="fade-up">
            <Input type="text"></Input>
            <Input type="email"></Input>
            <Textarea rows="10" cols="20">

            </Textarea>
        </form>
    </section>
    <footer class="h-[50px] border-t flex flex-col justify-center items-center">
        @ copyright 2024 sarpras team
    </footer>
</template>