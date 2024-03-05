export interface ItemSubmission {
    id: String
    code: String
    name: String
    unit: String
    count: Number
    description: String
    funding_source: String
}

export interface Submission {
    id: String
    code: String
    unit: String
    date: Date
    status: "Pending" | "Disetujui" | "Ditolak" | "Selesai"
    nature: "Biasa" | "Penting" | "Mendesak"
    categories: Array<String>
    description: String
    items: Array<ItemSubmission>
}