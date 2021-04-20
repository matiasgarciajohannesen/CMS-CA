const results = document.querySelector(".results")

const flower = "http://matiasjohannesen.no/wp-json/wc/store/products/"

fetch(flower, {
    
})

.then(response => response.json())
.then(data => productTemplate(data))
.catch(error => results.innerHTML = "ups that went wrong");




const productTemplate =(products)=>{
    results.innerHTML = "";
    for(product of products){
        console.log(product)
        let productDiv = ``
        for(image of product.images){
            productDiv += `
            <ul class="card">
            <a href="single-product.html?id=${product.id}"><img src="${image.src}"></a>
            <li>${product.name}</li>
            <p>£${product.prices.price}</p>
            <button>View</button>
            </ul>
            `
        }
        results.innerHTML += productDiv
    }
}