<template>
    <!-- Fitur -->
    <section class="mx-auto flex flex-col gap-2 justify-center items-center py-10 w-full" id="fitur">
        <h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight" data-aos="fade-up">
            Daftar Fitur 
        </h2>
        <span class="text-center text-lg text-muted-foreground sm:text-xl" data-aos="fade-up">
            Fitur terlengkap untuk manajemen anda
        </span>
        <div class="mt-8 container grid grid-rows-6 grid-cols-1 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card class="w-full bg-secondary border-l-8 border-l-primary" data-aos="fade-up">
                <CardHeader class="font-semibold text-2xl">
                    Dashboard
                </CardHeader>
                <CardContent>
                    dashboard interaktif untuk melihat data sarana prasarana
                </CardContent>
            </Card>
            <Card class="w-full bg-secondary border-l-8 border-l-green-400" data-aos="fade-up">
                <CardHeader class="font-semibold text-2xl">
                    Pendataan Sarana
                </CardHeader>
                <CardContent>
                    Mendata Sarana dengan nyaman dan mudah
                </CardContent>
            </Card>
            <Card class="w-full bg-secondary border-l-8 border-l-primary" data-aos="fade-up">
                <CardHeader class="font-semibold text-2xl">
                    Pendataan Prasarana
                </CardHeader>
                <CardContent>
                    Mendata prasarana dengan nyaman dan mudah
                </CardContent>
            </Card>
            <Card class="w-full bg-secondary border-l-8 border-l-green-400" data-aos="fade-up">
                <CardHeader class="font-semibold text-2xl">
                    Export dan Import data
                </CardHeader>
                <CardContent>
                    Export dan import data dengan jumlah ribuan dalam waktu singkat
                </CardContent>
            </Card>
            <Card class="w-full bg-secondary border-l-8 border-l-primary" data-aos="fade-up">
                <CardHeader class="font-semibold text-2xl">
                    Transaksi Barang
                </CardHeader>
                <CardContent>
                    Dapat membuat berita acara serah terima barang dan mencatatnya kedalam database
                </CardContent>
            </Card>
            <Card class="w-full bg-secondary border-l-8 border-l-green-400" data-aos="fade-up">
                <CardHeader class="font-semibold text-2xl">
                    Tracking data
                </CardHeader>
                <CardContent>
                    Semua perubahan dan aktifitas dapat dipantau oleh admin, jangan khawatir terdapat kekeliruan
                </CardContent>
            </Card>
        </div>
    </section>
</template>