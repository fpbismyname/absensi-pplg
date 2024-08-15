interface AccountType{
    role: string;
    nama_lengkap: string;
    kelas: string;
    jurusan: string;
    email: string;
    username: string;
    password: string;
}
type Login = {
    username: string;
    password: string;
}
type HttpResponse = {
    status: string;
    message: string;
}

export type {AccountType, Login, HttpResponse}