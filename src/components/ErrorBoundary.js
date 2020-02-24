import React, { Component } from 'react';
//We use this component around others to display error mesage
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {//this new method catch bugs and if something is wrong it's renders h1 below 
    this.setState({ hasError: true });//set state - установить состояние
  }//it's remaind me passport security 

  render () {
    if(this.state.hasError) {//Check or component has error
      return <h1>Ooops something go wrong!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;