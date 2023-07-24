import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Routes>
                <Route
              exact path = "/" 
              element = {
                <News pageSize={8} key='general'/>
              }/>
                <Route
              exact path = "/technology"
              element = {
                <News pageSize={8}  key='technology' category='technology' />
              }/>
                <Route
              exact path = "/business"  
              element = {
                <News pageSize={8} key='business'  category='business' />
              }/>
                <Route
              exact path = "/sports" 
              element = {
                <News pageSize={8}  key='sports' category='sports'/>
              }/>
                <Route
              exact path = "/health" 
              element = {
                <News pageSize={8} key='health' category='health'/>
              }/>
                <Route
              exact path = "/entertainment" 
              element = {
                <News pageSize={8} key='entertainment' category='entertainment'/>
              }/>
                <Route
              exact path = "/science"
              element = {
                <News pageSize={8} key='science' category='science'/>
              }/>
              </Routes>


            </div>
          </div>
        </BrowserRouter>

      </>
    )
  }
}