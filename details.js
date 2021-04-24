const details = document.querySelector(".details")

const flowerId = "https://matiasjohannesen.no/wp-json/wc/store/products/${id}"

fetch(flowerId, {
    
})

.then(response => response.json())
.then(data => productTemplate(data))
.catch(error => details.innerHTML = "ups that went wrong");




const productTemplate =(products)=>{
    details.innerHTML = "";
    for(product of products){
        console.log(product)
        let productDiv = ``
        for(image of product.images){
            productDiv += `
            <ul class="card">
            <li>${product.name}</li>
            <a href="single-product.html?id=${product.id}"><img src="${image.thumbnail}"></a>
            <p>£${product.prices.price}</p>
            <a href="single-product.html?id=${product.id}"><button>View</button></a>
            </ul>
            `
        }
        details.innerHTML += productDiv
    }
}