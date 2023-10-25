import { wrapper } from "@/app/store"
import { getCategoriesThunk, getProductsThunk } from "@/features/product/productAPI"
import { getCategorres, selectProduct } from "@/features/product/productSlice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"

export default function ShowCategory() {
  const {catArr}=useAppSelector(selectProduct)
  const dispatch=useAppDispatch()

    return (
      <div>
        <h3>ShowCategory</h3>
        <div className="form-control w-50" style={{border:'2px solid'}}>
          {catArr.map((elm,i)=>
            <h5 key={i}>{elm}</h5>
          )}
        </div>
      </div>
    )
  }
  

  export const getStaticProps=wrapper.getStaticProps(
    (store):any=>async()=>{
        const data1=await store.dispatch(getCategoriesThunk()).unwrap()
        store.dispatch(getCategorres(data1))
    }
  )