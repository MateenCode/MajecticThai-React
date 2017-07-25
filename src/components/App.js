import React, { Component } from 'react';
import '../styles/App.css';
import Appetizers from './Appetizers'
import Desserts from './Desserts'
import Entrees from './Entrees'
import BaseLayout from './Layout'

class App extends Component {
// Set initial state for appetizers, entrees, and desserts.
constructor(props){
  super()
  this.state={
    appetizers: [],
    entrees: [],
    desserts: []
  }
}
// All should be set to empty arrays.

// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entres, and desserts.
// Set these to state.
// YOUR CODE HERE>

componentDidMount(){
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
  .then(results => results.json())
  .then(data => {
     this.setState({
    appetizers: data[0].Appetizers,
    entrees: data[0].Entrees,
    desserts: data[0].Desserts
      })
  })
}




  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (

      <BaseLayout>

      <div>
      <Appetizers items={this.state.appetizers} />
      <Desserts items={this.state.desserts} />
      <Entrees items={this.state.entrees} />
      </div>

      </BaseLayout>

    );
  }
}

export default App;
