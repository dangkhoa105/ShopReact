const getListProduct = (idType, page) => {
    let URL;
    if(idType !== 'COLLECTION'){
        URL = `http://169.254.151.175:80/app/product_by_type.php?id_type=${idType}&page=${page}`;
    }else{
        URL = `http://169.254.151.175:80/app/get_collection.php?page=${page}`;
    }  
    return fetch(URL)
        .then(res => res.json())
}
export default getListProduct;