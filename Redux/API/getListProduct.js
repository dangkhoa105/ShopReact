const getListProduct = (idType, page) => {
    let URL;
    if(idType !== 'COLLECTION'){
        URL = `http://localhost:5000/app/product_by_type.php?id_type=${idType}&page=${page}`;
    }else{
        URL = `http://localhost:5000/app/get_collection.php?page=${page}`;
    }  
    return fetch(URL)
        .then(res => res.json())
}
export default getListProduct;