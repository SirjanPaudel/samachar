import React, { Component } from 'react'
import loading from './loading.gif'
// import loading from './running.gif'
const Spinner =  () => {
    return (
      <div className= 'text-center'>
        <img style={{height:'550px'}} src={loading} alt="loading..." />
      </div>
    )
}
export default Spinner ; 