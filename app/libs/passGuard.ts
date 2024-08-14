import CryptoJS from "crypto-js";

const encrypt = (password:string) =>{
    const encrypted = CryptoJS.AES.encrypt(password,password).toString()
    return encrypted
}
const decrypt = (password:string, CurrentPassword:string) =>{
    const decrypted = CryptoJS.AES.decrypt(password, CurrentPassword)
    return decrypted.toString(CryptoJS.enc.Utf8)
}

export {encrypt, decrypt}