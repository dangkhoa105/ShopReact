const search = (key ) => {
    return fetch(`http://192.168.1.33:5000/app/search.php?key=${key}`)
    .then(res=> res.json())
}
export default search;