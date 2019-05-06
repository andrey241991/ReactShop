import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Route} from "react-router-dom";
// import {generateUrl} from "./utils/ApiHelper"


const App = () =>{
  const productsComponent = () => <Products/>;
  return (
    <Router>
      <div className="app">
            <div className='app-header'>
            <Header/>
            </div>
            <div className='app-wrapper'>
              <Route exact path="/" component={Home} />
              <Route exact path = '/products' component={productsComponent}/>
            </div>
      </div>
    </Router>
  )
}
 
export default App;

  