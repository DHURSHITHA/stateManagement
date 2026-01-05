import React from 'react'

const Product = ({count,setCount}) => {
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Add to Cart</button>
    </div>
  )
}

export default Product