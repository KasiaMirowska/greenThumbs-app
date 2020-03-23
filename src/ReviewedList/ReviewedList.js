import React from 'react';
import GreenContext from '../Context';
import ReviewedListItem from '../ReviewedListItem/ReviewedListItem';
import './ReviewedList.css';
import GreenCalls from '../Services/GreenCalls';
import ListHelpers from './ListHelpers';
import TokenService from '../Services/token-service';
import { config } from '@fortawesome/fontawesome-svg-core';

export default class ReviewedList extends React.Component {
    static contextType = GreenContext;
    constructor() {
        super();
        this.state = {
            reviews: [],
            error: null,

        }
    }

    componentDidMount = () => {
        console.log('remounting?')
        GreenCalls.getAllGreenPlacesByUser()
            .then(res => {
                console.log(res, res[0], 'USER PLACES');
                this.context.setCurrentUser(res[0].userid);
                this.context.userSort(res);
            })
            .catch(err => {
                this.setState({
                    error: err
                });
            });
        GreenCalls.getAllReviewedPlaces()
            .then(data => {
                console.log(data, 'DDDDDDDDDDDDD')
                this.context.setGreenPlaces(data);
            })
            .then(() => {
                if (this.context.userSelection === true) {
                    this.setState({
                        reviews: ListHelpers.sortDisplay(this.context.userPlaces)
                    })
                } else if (this.context.citySelection === true) {
                    this.setState({
                        reviews: ListHelpers.sortDisplay(this.context.citySortPlaces)
                    })
                } else if (this.context.categorySelection === true) {
                    this.setState({
                        reviews: ListHelpers.sortDisplay(this.context.categorySortPlaces)
                    })
                }
                else {
                    this.setState({
                        reviews: ListHelpers.sortDisplay(this.context.greenPlaces)
                    });
                }

            })
            .catch(err => {
                this.setState({
                    error: err
                });
            })

    }

    userSort = (e) => {
        this.props.history.push('/user/places');
        this.context.setUserSelection(true);
    }

    citySort = (e) => {
        e.preventDefault();
        const { city } = e.target;
        this.props.history.push(`/city/${e.target.value}`);
        this.context.citySort(city.value);
        city.value = '';
    }


    handleCategoryInput = (e) => {
        e.preventDefault();
        const category = e.target.value;
        this.props.history.push(`/category/${category}`);
        this.context.categorySort(category);
    }

    handleBackButton = (e) => {
        this.props.history.push('/')
        window.location.reload();
    }


    render() {
        const { userSelection, citySelection, categorySelection } = this.context;
        

        return (
            <div className='big-container list'>
                <div className='smaller-header'>
                    <h2>GREEN<span className='thumbs'>thumbs</span>UP reviewed places: </h2>
                </div>
                <div className='mid-container'>
                    {
                        (!TokenService.hasAuthToken(config.TOKEN_KEY)) ?
                            <div>
                                {
                                    citySelection ? null :
                                        <section className='section' >
                                            <form className='form2' onSubmit={this.citySort} >
                                                <input id='city' type='input' placeholder='enter city' className="form__field" />
                                                <button type='submit' disabled={this.context.citySelection === false} className='disabled' >Sort by city</button>
                                            </form>
                                        </section>
                                }

                                {
                                    categorySelection ? null :
                                        <section className='section3' >
                                            <h3>Sort reviews by category</h3>
                                            <select className="form__field" disabled={this.context.categorySelection === false}  className='disabled' className="form__field">
                                                <option value=" ">Choose one </option>
                                                <option value="Coffee-shop">Coffee-shops</option>
                                                <option value="Bakery">Bakeries</option>
                                                <option value="Juice-Bar">Juice-Bars</option>
                                                <option value="Restaurant">Restaurants</option>
                                                <option value="Breakfast">Breakfast</option>
                                                <option value="Lunch">Lunch</option>
                                                <option value="Dinner">Dinner</option>
                                            </select>
                                        </section>
                                }

                                {
                                    userSelection ? null :
                                        <section className='section2' >
                                            <button disabled={this.context.userSelection === false} className='disabled' >Show only my reviews</button>
                                        </section>
                                }
                            </div>

                            :
                            <div>
                                {
                                    citySelection ? null :
                                        <section className='section' >
                                            <form className='form2' onSubmit={this.citySort} >
                                                <input id='city' type='input' placeholder='enter city' className="form__field" required />
                                                <button type='submit' >Sort by city</button>
                                            </form>
                                        </section>
                                }

                                {
                                    categorySelection ? null :
                                        <section className='section3' >
                                            <h3>Sort reviews by category</h3>
                                            <select className="form__field" onChange={this.handleCategoryInput} required>
                                                <option value=" ">Choose one </option>
                                                <option value="Coffee-shop">Coffee-shops</option>
                                                <option value="Bakery">Bakeries</option>
                                                <option value="Juice-Bar">Juice-Bars</option>
                                                <option value="Restaurant">Restaurants</option>
                                                <option value="Breakfast">Breakfast</option>
                                                <option value="Lunch">Lunch</option>
                                                <option value="Dinner">Dinner</option>
                                            </select>
                                        </section>
                                }

                                {
                                    userSelection ? null :
                                        <section className='section2' >
                                            <button onClick={this.userSort} >Show only my reviews</button>
                                        </section>
                                }
                            </div>
                    }
                    <section className='section2' >
                        <button onClick={this.handleBackButton}>Back to full list</button>
                    </section>
                </div>

                <ul className='rev-list'>
                    {this.state.reviews}
                </ul>
            </div>
        );
    }
}