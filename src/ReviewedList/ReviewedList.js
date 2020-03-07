import React from 'react';
import GreenContext from '../Context';
import ReviewedPlace from '../ReviewedPlace/ReviewedPlace';
import './ReviewedList.css';
import GreenCalls from '../Services/GreenCalls';

export default class ReviewedList extends React.Component {
    static contextType = GreenContext;

    componentDidMount = () => {
        console.log('/TRIGGERED?')
        GreenCalls.getAllReviewedPlaces()
            .then(data => {
                this.context.setGreenPlaces(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    citySort = (e) => {
        e.preventDefault();
        const { city } = e.target
        console.log(city.value)
        this.context.reviewCitySort(city.value)
        city.value = '';
    }
    render() {
        let reviews = [];
        if (this.context.sortReviews.length > 0) {
            reviews = this.context.sortReviews.map(pl => {
                return (
                    <li className='li' key={pl.id}>
                        <ReviewedPlace
                            userId={pl.userid}
                            name={pl.name}
                            city={pl.location_city}
                            folder={pl.folderid}
                            thumbs= {pl.checkedThumbs.length}
                        />
                    </li>
                )
            })
        }
        else {
            reviews = this.context.greenPlaces.map(pl => {
                return (
                    <li className='li' key={pl.id}>
                        <ReviewedPlace
                            userId={pl.userid}
                            name={pl.name}
                            city={pl.location_city}
                            folder={pl.folderid}
                            thumbs= {pl.checkedThumbs.length}
                        />
                    </li>

                )
            })
        }




        return (
            <div>
                <h2>GREEN thumbsUP reviewed places: </h2>
                <form onSubmit={this.citySort} >
                    <input id='city' type='input' placeholder='enter city' />
                    <button type='submit' >Sort by city</button>
                </form>

                <button onClick={this.thumbSort} >Sort by thumbs</button>
                <ul className='rev-list'>
                    {reviews}
                </ul>

            </div>
        )
    }
}