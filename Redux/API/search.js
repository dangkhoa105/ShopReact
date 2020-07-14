const search = (key ) => {
    return fetch(`http://localhost:5000/app/search.php?key=${key}`)
    .then(res=> res.json())
}
export default search;