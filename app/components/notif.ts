import Swal, { SweetAlertArrayOptions, SweetAlertIcon, SweetAlertOptions } from "sweetalert2"

const Alert = (Data:SweetAlertOptions)=>{
    Swal.fire({
        title: Data.title,
        icon: Data.icon,
        text: Data.text,
    })
}

export {Alert}