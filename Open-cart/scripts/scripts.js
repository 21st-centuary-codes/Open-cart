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
              <img loading="lazy" class="bd-radius" src=${product.img} alt="product-img">
            </div>

            <div>
              <p class="product-name ">${product.name}</p>
              <p class="product-price FWB">$${product.price}</p>
              <div class="seller-container">
                <div class="sellers-img-container">
                  <img loading="lazy" src=${product.sellersIMg} alt="sellars img">
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



    // script for responsive mobile side-bar
 
const SidebarBtn = document.querySelector(".sidebar-btn");
SidebarBtn.addEventListener("click",  ()=>{
  let closeIcon = document.querySelector(".close-icon ");
  let showIcon = document.querySelector(".show-icon ");
  let sidebar = document.querySelector(".sidebar");
  let sidebarLabel = sidebar.getAttribute('aria-label');
  console.log(sidebar)

  if (sidebarLabel === "sidebar closed") {
    sidebar.setAttribute('aria-label', 'sidebar opened');
    showIcon.classList.add("hide-icon");
    closeIcon.classList.remove("hide-icon");

    sidebar.classList.add("show-sidebar");

    console.log(sidebar.getAttribute('aria-label'));
  }else{
    sidebar.setAttribute('aria-label', 'sidebar closed');
    
    sidebar.classList.remove("show-sidebar");
console.log(sidebar.getAttribute('aria-label'));
    closeIcon.classList.add("hide-icon");
    showIcon.classList.remove("hide-icon");
  }

});