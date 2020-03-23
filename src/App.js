import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import SmallForm from './SmallForm/SmallForm';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import List from './List/List';
import ReviewForm from './ReviewForm/ReviewForm';
import ReviewedList from './ReviewedList/ReviewedList';
import GreenPlace from './GreenPLaceFullCard/GreenPlace';
import EditReview from './EditGreenPlace/EditGreenPlace';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';

export default class App extends React.Component {
  render() {

    return (
      <div>


        <header>
          <Route path='/' component={Nav} />
          <Route path='/' component={Header} />
          <Route path='/' component={SearchBar} />
        </header>

        <main>

          <Route exact path='/search' component={SmallForm} />
          <Route exact path='/' component={ReviewedList} />

          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />

          <Route exact path='/user/places' component={ReviewedList} />
          <Route exact path='/city/:city' component={ReviewedList} />
          <Route exact path='/category/:category' component={ReviewedList} />


          <Route exact path='/list/:location' component={List} />
          <Route exact path='/green_place/:yelpId/:placeId' component={GreenPlace} />
          <Route exact path='/edit/:placeId/' component={EditReview} />
          <Route exact path='/review/:id' component={ReviewForm} />

          <Route exact path='/reviews/:location' component={ReviewedList} />
          <Route exact path='/reviews/:location' component={List} />

        </main>
        <Route path='/' component={Footer} />
      </div>
    );
  };

};


