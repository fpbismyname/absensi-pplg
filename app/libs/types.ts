interface AccountType{
    role: string;
    nama_lengkap: string;
    kelas: string;
    jurusan: string;
    email: string;
    username: string;
    password: string;
}
interface Login{
    username: string;
    password: string;
}

export type {AccountType, Login}