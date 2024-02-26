<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

const tab = ref()
</script>
<template>
  <div class="flex flex-wrap items-center justify-between space-y-2">
    <h2 class="text-3xl font-bold tracking-tight">
      Dashboard
    </h2>
    <div class="flex items-center space-x-2">
      <DateRangePicker />
      <Button>Download</Button>
    </div>
  </div>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-2">
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">
          Total Sarana
        </CardTitle>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">
          1700
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">
          Total Ruangan
        </CardTitle>
        <Icon name="arcticons:utd-rooms" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">
          1202
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">
          Total Gedung
        </CardTitle>
        <Icon name="ph:buildings" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">
          12
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">
          User Aktif
        </CardTitle>
        <Icon name="ph:users" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">
          30
        </div>
      </CardContent>
    </Card>
  </div>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
    <Card class="col-span-4">
      <CardHeader>
        <CardTitle>Statistik Transaksi</CardTitle>
      </CardHeader>
      <CardContent class="pl-2">
        <Overview />
      </CardContent>
    </Card>
    <Card class="col-span-3">
      <CardHeader>
        <CardTitle>Transaksi Terakhir</CardTitle>
        <CardDescription>
          Terdapat 200 transaksi bulan ini.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RecentTransactions />
      </CardContent>
    </Card>
  </div>
</template>
