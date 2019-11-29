
const URL = "http://169.254.151.175:80/app/";

export function getTypes() {
    return fetch(URL)
    .then(res=> res.json())
    .then(resJSON => resJSON.type)
    .catch(() => {alert("Ket noi khong thanh cong!")})
}
export function getTopProducts(){
    return fetch(URL)
    .then(res=> res.json())
    .then(resJSON => resJSON.product)
    .catch(() => {alert("Ket noi khong thanh cong!")})
}
