import React from 'react'

export default function Product() {
    async function getData(){
        let productList = await fetch('https://fakestoreapi.com/products')
        productList = await productList.json();
        console.log(productList);
    }
  return (
    <div>
      <button onClick={getData}>TEST</button>
    </div>
  )
}
