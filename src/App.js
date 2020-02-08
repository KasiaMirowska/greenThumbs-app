import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Header2 from './Header/Header2';
import SmallForm from './SmallForm/SmallForm';
import List from './List/List';
import ReviewForm from './ReviewForm/ReviewForm';
import Bookmarks from './Bookmarks/Bookmarks';
import ReviewedList from './ReviewedList/ReviewedList';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Nav} />
        <header className="App-header">
          <Route exact path='/' component={Header} />
        </header>
        <main>
          <Route exact path='/' component={ReviewedList} />
          <Route exact path='/' component={SmallForm} />
          <Route exact path='/list/:location' component={List} />


          <Route exact path='/review/:id' component={Header2} />
          <Route exact path='/review/:id' component={ReviewForm} />



          <Route exact path='/reviews/:location' component={Header2} />
          <Route exact path='/reviews/:location' component={ReviewedList} />
          <Route exact path='/reviews/:location' component={List} />

          <Route exact path='/bookmark/:place_id' component={Bookmarks} />
        </main>
      </div>
    );
  }

}


