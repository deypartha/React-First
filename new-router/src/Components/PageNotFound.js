import React from 'react'
import NavbarToday from './NavbarToday'
import HomeToday from './HomeToday'

function PageNotFound() {
  return (
    <div className='App'>
      <NavbarToday></NavbarToday>
      <Route path = '/' element={<HomeToday></HomeToday>}></Route>
      <Route path='/AboutToday' element={<AboutToday></AboutToday>}></Route>
      <Route path = '/order' element={<OrderProduct></OrderProduct>} ></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </div>
  )
}

export default PageNotFound
