import CryptoJS from "crypto-js";

const encrypt = (password:string) =>{
    const encrypted = CryptoJS.SHA256(password).toString()
    return encrypted
}
const decrypt = (CurrentPassword:string, password:string) =>{
    const decrypted = CryptoJS.SHA256(CurrentPassword).toString()
    if (password === decrypted){
        return true
    } else{
        return false
    }
}

export {encrypt, decrypt}