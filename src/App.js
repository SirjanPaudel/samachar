import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import News from './components/News';
import Newsinfinitescroll from './components/Newsinfinitescroll';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App = () => {
  const pages = 16;
  const ak = process.env.REACT_APP_NEWS_API ;
  // ak = "0b1e5fa108624b42afdbf8cc6d3f72f7" ;
 const [progress, setProgressing] = useState(null)

  const setProgress =(progress) => {
    setProgressing(progress)
  }


    return (
      <>
        <BrowserRouter>
          <div>
            <LoadingBar color="#f11946" progress={progress} height={3} />
            <Navbar />
            <div className="container">
              <Routes>
                <Route
                  exact path="/"
                  element={
                    //Note : uncomment News and comment out Newsinfinitescroll  for the pagination also uncomment line 4
                    // <News pageSize={pages} key='general' />


                    // For infinite Scroll
                    <Newsinfinitescroll setProgress={setProgress} apiKey={ak} pageSize={pages} key='general' />
                  } />
                <Route
                  exact path="/technology"
                  element={
                    // <News pageSize={pages} key='technology' category='technology' />


                    // For infinite Scroll
                    <Newsinfinitescroll setProgress={setProgress} pageSize={pages} apiKey={ak} key='technology' category='technology' />
                  } />
                <Route
                  exact path="/business"
                  element={
                    // <News pageSize={pages} key='business' category='business' />


                    // For infinite Scroll
                    <Newsinfinitescroll setProgress={setProgress} pageSize={pages} apiKey={ak} key='business' category='business' />
                  } />
                <Route
                  exact path="/sports"
                  element={
                    // <News pageSize={pages} key='sports' category='sports' />


                    // For infinite Scroll
                    <Newsinfinitescroll setProgress={setProgress} pageSize={pages} apiKey={ak} key='sports' category='sports' />
                  } />
                <Route
                  exact path="/health"
                  element={
                    // <News pageSize={pages} key='health' category='health' />


                    // For infinite Scroll
                    <Newsinfinitescroll setProgress={setProgress} pageSize={pages} key='health' apiKey={ak} category='health' />
                  } />
                <Route
                  exact path="/entertainment"
                  element={
                    // <News pageSize={pages} key='entertainment' category='entertainment' />


                    // For infinite Scroll
                    <Newsinfinitescroll setProgress={setProgress} pageSize={pages} key='entertainment' apiKey={ak} category='entertainment' />
                  } />
                <Route
                  exact path="/science"
                  element={
                    // <News pageSize={pages} key='science' category='science' />


                    // For infinite Scroll
                    <Newsinfinitescroll setProgress={setProgress} pageSize={pages} key='science' apiKey={ak} category='science' />
                  } />
              </Routes>


            </div>
          </div>
        </BrowserRouter>

      </>
    )
}
export default App ; 