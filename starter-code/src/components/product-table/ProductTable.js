import React from 'react'
import ProductRow from './product-row/ProductRow'

const ProductTable = (props) =>{
  console.log(props)
  return(
    <div>
      {props.products.map((e,key)=>{
        return <ProductRow name={e.name} price = {e.price}/>
      })}
    </div>
  )
}
export default ProductTable


