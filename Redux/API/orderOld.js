const URL = "http://localhost:5000/app/order_history.php";
const orderOld = (token ) =>{
    return fetch(URL, {
        method: 'POST',
        headers:{
            "Content-Type":'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify({token}) 
    })
    .then(res => res.json())
}
export default orderOld;