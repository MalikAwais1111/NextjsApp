import React from 'react'

const Productid = ({params}:{
    params:{productid:string}
}) => {
  return (
    <div>Product no {params.productid} </div>
  )
}

export default Productid