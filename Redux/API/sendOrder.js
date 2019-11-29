const URL = "http://169.254.151.175:80/app/cart.php";
const sendOrder = (token, arrayDetail) => {
    
    return fetch (URL, {
        method: 'POST',
        headers: {
            "Content-Type":'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify({token, arrayDetail})
    })
    .then(res => res.text());
}
export default sendOrder;