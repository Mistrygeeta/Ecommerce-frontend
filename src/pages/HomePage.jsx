import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCart from '../components/Productcart'

const HomePage = () => {

  const [allProducts, setallProducts] = useState()

  let fetchAllProducts = async ()=>{
    try {
      let response = await axios.get("http://localhost:3000/api/products")
      if(response){
        setallProducts(response.data.products)
      }
      
    } catch (error) {
      console.log("error while fetching products data",error)
      
    }
  }

  useEffect (()=>{
    fetchAllProducts();
  },[])
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts?.map((product) => (
          <ProductCart
            key={product._id || product.title}
            title={product.title}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage