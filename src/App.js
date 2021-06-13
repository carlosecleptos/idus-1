import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Contact from './Contac';
import Categorias from './Categorias';
import Home from "./Home";



const App = () => (
  <div className='app'>
    <h1>Idus</h1>
    <Navigation />
    <Main />
   </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'>Categorias</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);



const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={Categorias}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

export default App;
