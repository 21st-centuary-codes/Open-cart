   import  {products}  from './data/products.js';


  //  funtion below loops through the products array
  // then generates the html for each product
  let productsHTML = '';
  function displayProducts() {
     products.forEach((product) => {
        productsHTML += `
        <div class="product-card">
           <!-- img div -->
            <div  class="product-img-contaner bd-radius">
              <img class="bd-radius" src=${product.img} alt="product-img">
            </div>

            <div>
              <p class="product-name ">${product.name}</p>
              <p class="product-price FWB">$${product.price}</p>
              <div class="seller-container">
                <div class="sellers-img-container">
                  <img  src=${product.sellersIMg} alt="sellars img">
                </div>
                <p class="sellars-name">${product.sellersName}</p>
              </div>
            </div>
              
            <button>
              Add To Cart
            </button>
        </div>
        `
     })
    }
     displayProducts();
    document.querySelector('.product-container').innerHTML = productsHTML;

 
