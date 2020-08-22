import React, { Component } from 'react'
import Home from './HomeComponents'
import Header from './HeaderComponent'
import Footer from './FooterComponents'
import DishDetail from './DishDetail'
import Menu from './MenuComponents'
import { DISHES } from '../shared/dish'
import Contact from './ContactComponent'
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotion';
import { LEADERS } from '../shared/Leaders';
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './About'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }
  render() {
    const Homepage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
    }
    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId,
          10))[0]}
          comments={this.state.comments.filter(comment => comment.dishId ===
            parseInt(match.params.dishId, 10))} />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;