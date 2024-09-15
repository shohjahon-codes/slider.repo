"use strict"

$(document).ready(function(){
    $('.one-time').slick({
      slidesToShow:1,
      dots: true,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });
 
  const podects = document.getElementById('leatest-products')
   
  products.forEach(product =>{
   const productCard=`
      <div class="product-card w-[310px] mb-[100px] text-center shadow-[0_0_15px_5px_rgba(0,0,0,0.8)]">
      <img class="m-[auto]" src="${product.image}" alt="${product.name}">
      ${product.sale ? "<span class='sale-badge'>Sale</span>" : ""}
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)} <span class="old-price">$${product.oldPrice.toFixed(2)}</span></p>
      <div class="icons">
        <i class='bx bx-cart'></i>
        <i class='bx bx-heart'></i>
        <i class='bx bx-search-alt-2'></i>
      </div>
    </div>
   `
   podects.innerHTML+=productCard

  })


