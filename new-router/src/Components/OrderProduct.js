import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderProduct() {
    let navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to product component</h1>
      <button onClick={()=>navigate(-1)}>back to home</button>
    </div>
  )
}

export default OrderProduct
