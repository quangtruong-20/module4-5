import axios from "axios";

export const findAll = async (name="") => {
    return  await axios.get( `http://localhost:3000/products?name_like=${name}`)

}
export const findAllProductType = async () => {
    return  await axios.get( `http://localhost:3000/productTypes`)

}
export const findById = async (id) => {
    return  await axios.get( `http://localhost:3000/products/${id}`)

}
export const save = async (products) => {
   return  await axios.post( `http://localhost:3000/products`,products)
}
export const edit = async (products) => {
    return  await axios.put( `http://localhost:3000/products/${products.id}`,{...products})
}

export const remove = async (id) => {
    return  await axios.delete( `http://localhost:3000/products/${id}`)
}
