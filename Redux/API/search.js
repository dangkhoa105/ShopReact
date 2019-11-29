const search = (key ) => {
    return fetch(`http://169.254.151.175:80/app/search.php?key=${key}`)
    .then(res=> res.json())
}
export default search;