<template>
    <!-- Kontak -->
    <section class="mx-auto flex flex-col gap-2 justify-center items-center py-10 w-full" id="kontak">
        <h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight" data-aos="fade-up">
            Kontak Kami
        </h2>
        <span class="text-center text-lg text-muted-foreground sm:text-xl" data-aos="fade-up">
            Hubungi kami kapan saja
        </span>
        <form class="flex flex-col gap-3 w-full container" data-aos="fade-up">
            <div class="flex flex-wrap lg:flex-nowrap gap-4">
                <div class="w-full">
                    <Label for="nama">Nama</Label>
                    <Input type="text" name="nama" placeholder="Nama anda" class="mt-2"/>
                </div>
                <div class="w-full">
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" placeholder="contoh@email.co" class="mt-2"/>
                </div>
            </div>
            <Label for="pesan">Pesan</Label>
            <Textarea rows="10" cols="20" name="pesan" placeholder="Halo saya ingin berkonsultasi" class="w-full"/>
            <Button>kirim</Button>
        </form>
    </section>
</template>