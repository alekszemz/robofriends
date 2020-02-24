import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
//import { robots } from './robots';//'./' means robots in same directory and { robots } here is variable so if it's gonna be more variables for example "cats" need type { robots, cats }
import './App.css';
  
//to use state we can't use ecmascript insteed we use class
class App extends Component {
    constructor() {//It's how to import state in class with help of constructor and super
      super()
      this.state = {//state is something that can change and affect our app now I use {this.state.robots}
        robots: [],
        searchField: ''
      }
    }

    //Fetch is a method on the window object. It comes with all browsers now. It is a tool for us to make requests. To servers, and as you can see this is a server(link) that returns for us. When we do slash users a list of users that we can use which is perfect for our app.
    componentDidMount() {//component did mount - компонент сделал монтирование
      fetch('https://jsonplaceholder.typicode.com/users')//fetch - получить 
      .then(responce => responce.json())//responce - Быстродействие
      .then(users=> this.setState({ robots: users }));
    }

    onSearchChange = (event) => this.setState({ searchField: event.target.value });//I make this function shorter

    render() {
      const { robots, searchField } = this.state;
      const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));//I make this function shorter and change robots to robot
    
    //In case if you have lot of users you can use if statment
    if(!robots.length) {
      return <h1>Loading...</h1>
    } else {
    return (
      <div className="tc">
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange } />
        <Scroll>
        <ErrorBoundary>{/* wrap error component around card list */}
          <CardList robots={ filteredRobots } />
        </ErrorBoundary>
        </Scroll>
      </div>
    );
   }//else end
  } 
}

export default App;

//NOTE ABOUT "STATE"-состояние TO REMEMBER
//Props never change. Props are always just inputs that we get and we've never modified them. But in this case we need a memory in our app. We need this to communicate with this, and also change and update accordingly And that's what "state" is in React. "State" - and you'll hear this in computer programming a lot - simply means the description of your app. A "state" is simply an object - an object that describes your application. And this "state" which describes our application is the robots, and whatever's entered in the search box and "state" is able to change. We're able to change the value of the search box, the value of the input, and we're able to change what robot's array means What gets displayed. This is a rule that you just have to remember. Props are simply things that come out of "state" So a parent feeds "state" into a child component and as soon as a child (components) component receives a "state" it's a property. That child can never change that property. The parent just tells it what the "state" is and the child receives it as "robots".