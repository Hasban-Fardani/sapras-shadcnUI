<template>
    <!-- Harga -->
    <section class="mx-auto flex flex-col gap-2 justify-center items-center py-10 w-full" id="harga">
        <h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight" data-aos="fade-up">
            Daftar Harga
        </h2>
        <span class="text-center text-lg text-wrap text-muted-foreground sm:text-xl px-10" data-aos="fade-up">
            Harga terjangkau dan bayar sesuai kebutuhan saja
        </span>
        <div class="mt-8 container flex flex-wrap justify-center items-center gap-8">
            <Card class="w-[300px] h-[350px] text-center flex flex-col bg-secondary border-t-8 border-t-yellow-400 hover:border-t-0 hover:border-b-8  hover:border-b-yellow-400" data-aos="fade-up">
                <CardHeader class="">
                    <h2 class="font-semibold text-2xl">
                        Reguler
                    </h2>
                    Rp 59.000 / bulan   
                </CardHeader>
                <CardContent class="text-start px-10 flex-grow flex justify-center items-center">
                    <ul class="flex-grow flex flex-col justify-center gap-2">
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Dashboard
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Kelola Barang
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Kelola Akun
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Kelola Pengajuan
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <NuxtLink to="#" class="w-full text-center">
                      <Button class="w-full">
                          Pesan
                      </Button>
                    </NuxtLink>
                </CardFooter>
            </Card>
            <Card class="w-[300px] h-[350px] lg:w-[310px] lg:h-[370px] text-center flex flex-col lg:bg-secondary border-t-8 border-t-green-400 hover:border-t-0 hover:border-b-8  hover:border-b-green-400" data-aos="fade-up">
                <CardHeader class="">
                    <h2 class="font-semibold text-2xl">
                        Premium
                    </h2>
                    Rp 99.000 / bulan
                </CardHeader>
                <CardContent class="text-start px-10 flex-grow flex justify-center items-center">
                    <ul class="flex-grow flex flex-col justify-center gap-2">
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Semua fitur reguler
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Kelola asset
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Laporan transaksi
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Download Laporan
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Domain kostum
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <NuxtLink to="#" class="w-full text-center">
                      <Button class="w-full">
                          Pesan
                      </Button>
                    </NuxtLink>
                </CardFooter>
            </Card>
            <Card class="w-[300px] h-[350px] text-center flex flex-col bg-secondary border-t-8 border-t-red-400 hover:border-t-0 h hover:border-b-8 hover:border-b-red-400" data-aos="fade-up">
                <CardHeader class="">
                    <h2 class="font-semibold text-2xl">
                        Instansi
                    </h2>
                    Rp 200.000 / bulan
                </CardHeader>
                <CardContent class="text-start px-10 flex-grow flex justify-center items-center">
                    <ul class="flex-grow flex flex-col justify-center gap-2">
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Semua fitur premium
                        </li>
                        <li>
                            <Icon name="material-symbols:check-small"/>
                            Kostum fitur
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <NuxtLink to="#" class="w-full text-center">
                      <Button class="w-full">
                          Pesan
                      </Button>
                    </NuxtLink>
                </CardFooter>
            </Card>
        </div>
    </section>
</template>