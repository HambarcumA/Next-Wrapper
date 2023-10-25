import { myAxios } from "@/app/store"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getProductsThunk=createAsyncThunk(
    'get ptoducts',
    async()=>{
        const {data}=await myAxios.get('products')
        return data
    }
)

export const getCategoriesThunk=createAsyncThunk(
    'get categories',
    async()=>{
        const {data}=await myAxios.get('products/categories')
        return data
    }
)


export const getProductByIdThunk=createAsyncThunk(
    'get product',
    async(id:number)=>{
        const {data}=await myAxios.get('products/'+ id)
        return data
    }
)


export const getProductsByLimitThunk=createAsyncThunk(
    'get products by limit',
    async(limit:number)=>{
        const {data}=await myAxios.get('products?limit=' + limit)
        return data
    }
)


export const getProductsByCategoryThunk=createAsyncThunk(
    'get products by category',
    async(text:string)=>{
        const {data}=await myAxios.get('products/category/' + text)
        return data
    }
)

