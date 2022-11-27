import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';


import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    //   selectedDish: null
    };
  }


  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render(){

    const HomePage = () => {
        return(
            <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
             />
        );
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} > </Route>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                <Route exact path="/contactus" component={Contact}></Route>
                <Redirect to="/home" />
            </Switch>
            {/* <Menu dishes={this.state.dishes}
            onClick={(dishId) => {
                return this.onDishSelect(dishId);
            }} /> */}
            {/* <Dishdetail 
            selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} /> */}
            <Footer />
        </div>
    )
  }

}

export default Main;