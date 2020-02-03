import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import SmallForm from './SmallForm/SmallForm';
import List from './List/List';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Nav} />
        <header className="App-header">
        <Route path='/' component={Header} />
        </header>
        <main>
          <Route path='/' component={SmallForm} />
          <Route path='/' component={List} />
        </main>
      </div>
    );
  }
  
}


