import React from 'react';
import GreenContext from '../Context';
import ReviewedListItem from '../ReviewedListItem/ReviewedListItem';
import './ReviewedList.css';
import GreenCalls from '../Services/GreenCalls';
import ListHelpers from './ListHelpers';

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
            console.log(res, res[0].userid, 'USER PLACES');
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
            <div>
                <h2>GREEN thumbsUP reviewed places: </h2>
                
                    {
                        citySelection ? null :
                            <form onSubmit={this.citySort} >
                                <input id='city' type='input' placeholder='enter city' />
                                <button type='submit' >Sort reviews by city</button>
                            </form>
                    }
               
                    {
                        categorySelection ? null :
                        <section>
                            <h3>Sort reviews by category</h3>
                                <select onChange={this.handleCategoryInput} required>
                                    <option value=" ">Choose one </option>
                                    <option value="Coffee-shop">Coffee-shops</option>
                                    <option value="Bakery">Bakeries</option>
                                    <option value="Juice-Bar">Juice-Bars</option>
                                    <option value="Resturant">Restaurants</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>
                            </section>
                    }
               
                    {
                        userSelection ? null :
                            <div>
                                <h2>or</h2>
                                <button onClick={this.userSort} >Show only my reviews</button>
                            </div>
                    }
               
                <ul className='rev-list'>
                    {this.state.reviews}
                </ul>
                <button onClick={this.handleBackButton}>back to full list</button>

            </div>
        );
    }
}