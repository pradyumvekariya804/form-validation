import React from 'react'
import Sidbar from './Sidbar.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
const FistLvlprivateRoute = ({ children }) => {
  return (
    <>
      <div className='d-flex'>
        <Sidbar />
        <div className='w-100'>
          <div >
            <Header />
            <div style={{height:"100vh"}}>
              {children}
            </div>
          </div>
          <div className=''>
            <Footer />
          </div>
        </div>
      </div>

    </>

  )
}

export default FistLvlprivateRoute;
