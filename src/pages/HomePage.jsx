import React, { useEffect, useState } from 'react'
import ProductCart from '../components/Productcart'
import { axiosInstance } from '../config/axiosInstance'

const HomePage = () => {

  const [allProducts, setAllProducts] = useState()

  let fetchAllProducts = async ()=>{
    try {
      let response = await axiosInstance.get("/products");
      if(response){
        setAllProducts(response.data.products)
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