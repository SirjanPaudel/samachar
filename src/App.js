import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import News from './components/News';
import Newsinfinitescroll from './components/Newsinfinitescroll';
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default class App extends Component {
  pages = 16;
   ak = '0b1e5fa108624b42afdbf8cc6d3f72f7'
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Routes>
                <Route
                  exact path="/"
                  element={
                    //Note : uncomment News and comment out Newsinfinitescroll for the pagination also uncomment line 4
                    // <News pageSize={this.pages} key='general' />


                    // For infinite Scroll
                    <Newsinfinitescroll  apiKey={this.ak} pageSize={this.pages} key='general'/>
                  } />
                <Route
                  exact path="/technology"
                  element={
                    // <News pageSize={this.pages} key='technology' category='technology' />


                    // For infinite Scroll
                    <Newsinfinitescroll pageSize={this.pages}  apiKey={this.ak} key='technology' category='technology' />
                  } />
                <Route
                  exact path="/business"
                  element={
                    // <News pageSize={this.pages} key='business' category='business' />


                    // For infinite Scroll
                    <Newsinfinitescroll pageSize={this.pages}  apiKey={this.ak} key='business'  category='business' />
                  } />
                <Route
                  exact path="/sports"
                  element={
                    // <News pageSize={this.pages} key='sports' category='sports' />


                    // For infinite Scroll
                    <Newsinfinitescroll pageSize={this.pages}   apiKey={this.ak} key='sports' category='sports'/>
                  } />
                <Route
                  exact path="/health"
                  element={
                    // <News pageSize={this.pages} key='health' category='health' />


                    // For infinite Scroll
                    <Newsinfinitescroll pageSize={this.pages} key='health'  apiKey={this.ak} category='health'/>
                  } />
                <Route
                  exact path="/entertainment"
                  element={
                    // <News pageSize={this.pages} key='entertainment' category='entertainment' />


                    // For infinite Scroll
                    <Newsinfinitescroll pageSize={this.pages} key='entertainment'  apiKey={this.ak} category='entertainment'/>
                  } />
                <Route
                  exact path="/science"
                  element={
                    // <News pageSize={this.pages} key='science' category='science' />


                    // For infinite Scroll
                    <Newsinfinitescroll pageSize={this.pages} key='science'   apiKey={this.ak} category='science'/>
                  } />
              </Routes>


            </div>
          </div>
        </BrowserRouter>

      </>
    )
  }
}