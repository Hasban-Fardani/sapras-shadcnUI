export interface Account {
  id: string;
  name: string;
  nomer_induk: string;
  role: "admin" | "user" | "operator" | "kepala sekolah";
  unit: string;
}
