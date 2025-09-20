import axiosInstance from "../config/axiosInstance"


export const getAllproducts = async()=>{

    try {
        let response = await axiosInstance.get("/products")
        if(response){
            return response.data.products
        }
    } catch (error) {
        console.log("error while fetching error..",error)
    }
}

export const fetchProductDetail = async(id)=>{
    try {
        let response = axiosInstance.get(`/products/product-details/${id}`);
        if(response){
            return response.data.product
        }
    } catch (error) {
        console.log("error in product details-->",error)
        
    }
}