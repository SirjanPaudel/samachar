import React, { Component } from 'react'
import loading from './loading.gif'
// import loading from './running.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className= 'text-center'>
        <img style={{height:'550px'}} src={loading} alt="loading..." />
      </div>
    )
  }
}
