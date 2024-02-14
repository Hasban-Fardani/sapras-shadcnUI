<template>
    <div class="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
        <div class="hidden w-[300px] border-r bg-white shadow md:block dark:bg-gray-950">
            <nav class="flex flex-col h-full"><a
                    class="flex items-center h-14 px-4 border-gray-200 border-b dark:border-gray-800" href="#"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="mr-2 h-6 w-6">
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                        <path d="M12 3v6"></path>
                    </svg><span class="font-medium">Acme Inc</span></a><a
                    class="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-500 transition-all border-l-2 border-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="h-4 w-4">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Home
                </a><a
                    class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all border-l-2 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="h-4 w-4">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                Users
            </a><a
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all border-l-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-4 w-4">
                    <path d="m7.5 4.27 9 5.15"></path>
                    <path
                        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z">
                    </path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                </svg>
                Products
            </a><a
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all border-l-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-4 w-4">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                Orders
            </a><a
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all border-l-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-4 w-4">
                    <path
                        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                    </path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Settings
            </a></nav>
    </div>
    <div class="flex-1 grid gap-4 p-4 md:gap-8 md:p-10">
        <div class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="h-6 w-6">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h1 class="font-semibold text-lg md:text-2xl">Users</h1>
        </div>
        <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                    <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">Total Users</h3><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="w-4 h-4 text-gray-500 dark:text-gray-400">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="text-2xl font-bold">2350</div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        +180.1% from last month
                    </p>
                </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                    <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                        Active Users Today
                    </h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="w-4 h-4 text-gray-500 dark:text-gray-400">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="text-2xl font-bold">+573</div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        +201 since last hour
                    </p>
                </div>
            </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="relative w-full overflow-auto">
                <table class="w-full caption-bottom text-sm">
                    <thead class="[&amp;_tr]:border-b">
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th
                                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                                ID</th>
                            <th
                                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                Name</th>
                            <th
                                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                Email</th>
                            <th
                                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                Role</th>
                            <th
                                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                Status</th>
                        </tr>
                    </thead>
                    <tbody class="[&amp;_tr:last-child]:border-0">
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">1</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Alice</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                alice@example.com
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Admin
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Active
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">2</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Bob</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                bob@example.com
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">User
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Active
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">3</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Charlie</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                charlie@example.com
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">User
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Inactive
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">4</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">David</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                david@example.com
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">User
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Active
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">5</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Eve</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                eve@exa</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">User
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>