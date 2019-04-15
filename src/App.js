import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Route} from "react-router-dom";

const App = (props) =>{
  return (
    <Router>
      <div className="app">
            <Header className="header"/>
            <div className='app-wrapper'>
              <Route exact path="/" component={Home} />
              <Route exact path = '/products' component={Products}/>
            </div>
      </div>
    </Router>
  )
}
 
export default App;

