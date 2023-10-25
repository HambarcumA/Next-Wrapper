import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { wrapper } from "@/app/store"
import { getCategoriesThunk, getProductsByCategoryThunk, getProductsByLimitThunk, getProductsThunk } from "@/features/product/productAPI"
import { getCategorres, getProducts, selectProduct } from "@/features/product/productSlice"
import Link from "next/link"

export default function ShowProducts() {
  const {arr,catArr}=useAppSelector(selectProduct)
  const dispatch=useAppDispatch()
  return (
    <div>
      <h3>ShowProducts</h3>
      <select className="form-control" onChange={async(e)=>{
        const data=await dispatch(getProductsByCategoryThunk(e.target.value)).unwrap()
        dispatch(getProducts(data))
      }}>
        {catArr.map((elm,i)=>
          <option value={elm} key={i}>{elm}</option>
        )}
      </select>
      <input className="form-control" placeholder="Enter Limit" onChange={async(e)=>{
        const data=await dispatch(getProductsByLimitThunk(+e.target.value)).unwrap()
        dispatch(getProducts(data))
      }}
      />
      <table className="table table-striped" style={{border:'2px solid'}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Category</th>
            <th>See</th>
            <th>Delate</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((elm)=>
            <tr key={elm.id}>
              <td>{elm.title}</td>
              <td><img width={'200px'} height={'200px'} src={elm.image}/></td>
              <td>{elm.category}</td>
              <td><Link href={'product/'+elm.id}>See</Link></td>
              <td><button style={{color:'red'}}>x</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const getStaticProps=wrapper.getStaticProps(
  (store):any=>async()=>{
    const data=await store.dispatch(
      getProductsThunk()).unwrap()
      const data1=await store.dispatch(getCategoriesThunk()).unwrap()
      store.dispatch(getProducts(data))
      store.dispatch(getCategorres(data1))
  }
)
console.log('welcome')
