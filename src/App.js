
import React from "react";
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Orders from './Components/Orders';
import Home from './Components/Home';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import BootstrapCarousel from './Components/BootstrapCarousel';

import Products from './Components/Products';



 class App extends React.Component{

    
  render(){

    
    return(
      <Router>
      <div className="App">
       
    
            <Switch>
            <Navigation/>
            
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/orders" component={Orders}/>
              <Route  path="/cart" component={Cart}/>
              
             
            </Switch>

            <BootstrapCarousel/>

            <div>
           
              
              <Products/>

            </div>
           
       
        

      </div>
      </Router>
     
     
    );
  }
}

 export default App;
//  module.exports = App;
