  import React from 'react';
  import './sass/App.scss';
  import './sass/Menu.scss';
  import About from './About';
  import Menu from './Menu';
  import Contact from './Contact';
  import Home from './Home';   
  import Header from './Header';
  import Team from './Team';

  import ReactDOM from 'react-dom';
  import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
          <Header/>
          <Menu /> <br/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" exact component={About}/>
            <Route path="/Contact" exact component={Contact}/> 
          </Switch>
      </div>
    </BrowserRouter> 
    )
}



export default App;
  