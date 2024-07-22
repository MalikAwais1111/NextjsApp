import React from 'react'
import { notFound } from 'next/navigation'

const Reviewspage = ({params}:{
    params:{reviewsid:string
        productid:string
    }
}) => {
  return (
    <>
    {parseInt(params.reviewsid)>100 ? (
      notFound()
    ):(
      <div>Reviewspage no {params.reviewsid} of product {params.productid}</div>
    )
  }
</>
  )
}

export default Reviewspage