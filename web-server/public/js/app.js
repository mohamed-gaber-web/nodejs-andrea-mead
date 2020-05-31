// fetch("http://localhost:3000/products").then(res => {
//     const data = res.json();
//    data.then(response => {
//         console.log(response.allProducts);
        
//     });
    
// })

const fetchProducts = async () => {
    const data = await fetch("http://localhost:3000/products");
    const datajson = data.json();

    return datajson;
}

fetchProducts();