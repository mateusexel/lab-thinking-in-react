import React from 'react'

const ProductRow = props =>{
  return(
    <div>
      <p>{props.name}<span>{props.price}</span></p>
    </div>
  )
}
export default ProductRow 