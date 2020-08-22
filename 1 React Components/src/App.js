import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import {DISHES} from './shared/DishdetailComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
  return (
    <div>
     <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Prince Parwat Assingment 1</NavbarBrand>
          </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
    </div>
  );
 }
}
export default App;
