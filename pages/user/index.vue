<script setup>
definePageMeta({
    layout: 'user'
})
</script>
<template>
    <div class="float-left w-3/4">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-2 content-center">
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Total Barang
                    </CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">
                        120
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Total Pengajuan
                    </CardTitle>
                    <Icon name="arcticons:utd-rooms" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">
                        17
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Total Transaksi
                    </CardTitle>
                    <Icon name="ph:buildings" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">
                        16
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
    <div class="float-right">
        
    </div>
</template>