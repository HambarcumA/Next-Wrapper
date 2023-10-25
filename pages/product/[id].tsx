import { useAppSelector } from "@/app/hooks"
import { myAxios, wrapper } from "@/app/store"
import { getProductByIdThunk } from "@/features/product/productAPI"
import { getProductById, Product, selectProduct } from "@/features/product/productSlice"


export default function SeeProduct() {
  const {prod} = useAppSelector(selectProduct)

  console.log(prod);
  
    return (
      <div>
        <h3>SeeProduct</h3>
        <h4>{prod.title}</h4>
        <p>{prod.category}</p>
      </div>
    )
  }

export const getServerSideProps=wrapper.getServerSideProps(
  (store):any=>async({params}:any)=>{
  const product=await store.dispatch(getProductByIdThunk(+params.id)).unwrap()
  store.dispatch(getProductById(product))
  }
)
