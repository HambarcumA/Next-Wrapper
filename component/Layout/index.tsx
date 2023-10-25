
  import Link from "next/link";

  export default function Layout({children}:any){
      return (
          <div>
              <ul>
                  <li><Link href={'/'}>Products</Link></li>
                  <li><Link href={'/category'}>Categoryes</Link></li>

                  <li><Link href={'/addProduct'}>AddProduct</Link></li>
              </ul>
              <div>
                  {children}
              </div>
          </div>
      )
  }