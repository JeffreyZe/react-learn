import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import { DISHES } from '../shared/dishes';



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    //   selectedDish: null
    };
  }


  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render(){

    const HomePage = () => {
        return(
            <Home />
        );
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} > </Route>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
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