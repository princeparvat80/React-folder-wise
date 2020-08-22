import React, { Component } from 'react'
import Home from './HomeComponents'
import Header from './HeaderComponent'
import Footer from './FooterComponents'
import Menu from './MenuComponents'
import { DISHES } from '../shared/dish'
import DishDetail from './DishDetail'
import { Switch, Route, Redirect } from 'react-router-dom'

//this main component is work as container

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  render () {
    const HomePage = () => {
      return(
          <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
          {/* we use exact keyword here to specify that path must go only to menu nothing else, it will clear the confusion between upper path of home and lowwer path of menu*/}
        <Footer />
      </div>
    )
  }
}
export default Main
