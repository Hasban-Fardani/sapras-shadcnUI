export interface Item {
    id: string
    name: string
    status: 'pending' | 'processing' | 'success' | 'failed'
    count: number
}
  
export const items: Item[] = [
    {
        id: "1",
        name: "Spidol",
        status: "pending",
        count: 1,
    },
    {
        id: "2",
        name: "Penghapus",
        status: "processing",
        count: 10,
    },
    {
        id: "3",
        name: "Penggaris",
        status: "failed",
        count: 12,
    },
    {
        id: "4",
        name: "Kapur",
        status: "pending",
        count: 123,
    },
    {
        id: "5",
        name: "apa aja",
        status: "success",
        count: 1,
    },
]