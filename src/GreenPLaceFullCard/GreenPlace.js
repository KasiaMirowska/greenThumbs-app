import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreenContext from '../Context';
import GreenCalls from '../Services/GreenCalls';
import './GreenPlace.css';
import YelpRating from '../YelpRating/YelpRating';
import Thumbs from '../ThumbsRating/Thumbs';


export default withRouter(class GreenPlace extends React.Component {
    static contextType = GreenContext;
    constructor() {
        super()
        this.state = {
            error: null,
        }
    }


    deleteReview = (e) => {
        e.preventDefault();
        let placeId = Number(this.props.match.params.placeId);
        GreenCalls.deleteGreenPlace(placeId)
            .then(() => {
                console.log('review deleted')
                this.props.history.push('/')
            })
            .catch(err => {
                if (err) {
                    this.setState({
                        error: 'Server problems.'
                    });
                }
            });

    }


    render() {
        // this.handleUserIdentityBeforeDeleteAndPost()
        const greenPractices = ['No single use plastic', 'Compostable take-out containers and cups', 'No plastic bottled drinks', 'Composting food scraps', 'Recycle and compost bins inside', 'Hemp based or fabric napkins and paper towels', 'Papperless, fully computer based billing and record keeping', 'Donating leftover food to local shelter or "free meal night"', 'Locally sourced produce', 'Organic produce', 'Resposible frying oil disposal', 'Saves energy by installing light timers and motion sensors', 'Saves water by installing low flow faucets', 'Saves energy and water by installing energy star equipmnet']

        let placeId = Number(this.props.match.params.placeId);
        let yelpId = this.props.match.params.yelpId;

        const selectedPlace = this.context.greenPlaces.find(pl => pl.yelp_id === yelpId)

        const { name, img, url, yelp_rating, location_str, location_city, location_zip, location_st, display_phone, checkedThumbs, category, review } = selectedPlace;

        const greenThumbs = selectedPlace.checkedThumbs.map((el, key) => {
            return (
                <li key={key} className='thumb-list' >{el}</li>
            )
        })


        const remainingPractices = [];
        greenPractices.filter(el => {
            if (!selectedPlace.checkedThumbs.includes(el)) {
                remainingPractices.push(el);
            }
        })
        const practicesList = remainingPractices.map((el, key) => {
            return (
                <li key={key} className='thumb-list'>
                    {el}
                </li>
            )
        })

        const currentUsersPlace = this.context.userPlaces.find(place => place.id === placeId)

        return (

            <div className='item'>
                <div className='items-box'>
                    <div className='medium-img-container'>
                        <img src={img} />
                    </div>

                    <div className='text-area1'>

                        <div className='error'>
                            {this.state.error ? this.state.error : null}
                        </div>


                        <h2>{name}</h2>
                        <h3>Address :</h3><p>{location_str}, {location_city}, {location_st}, {location_zip}</p>
                        <br />
                        <p>{display_phone}</p>
                        <br />
                        <h3>Category :</h3><p>{category}</p>
                        <a href={`${url}`}><h3>Visit</h3></a>
                        <div className='rating-box'>
                            <p>Yelp rating: </p>
                            <YelpRating rating={yelp_rating} />
                        </div>
                        <div className='rating-box'>
                            <p>GREENthumbsUP rating: </p>
                            <Thumbs rating={checkedThumbs} />
                        </div>
                        <br />
                        <br />
                        <div className='error'>
                            {this.state.error ? this.state.error.message : null}
                        </div>
                        {currentUsersPlace ?
                            <section>
                                <Link to={`/edit/${placeId}/`}>
                                    <button>Edit review</button>
                                </Link>
                                <button type='button' onClick={this.deleteReview}>delete</button>
                            </section>
                            :
                            <section>
                                <Link to={`/edit/${placeId}/`} >
                                    <button disabled={!currentUsersPlace} className='disabled'>Edit review</button>
                                </Link>
                                <button type='button' disabled={!currentUsersPlace} className='disabled'>delete</button>
                                <h4>Please login to place a review or delete </h4>
                            </section>
                        }

                    </div>
                </div>
                <div className='text-area2'>
                    <h2>This location has been noted for following Earth friendly practices:</h2>
                    <ul>
                        {greenThumbs}
                    </ul>
                    <br />
                    <h2>Additional comments:</h2>
                    <br />
                    <div id='comments'><p>{review}</p></div>

                    <br />
                    <h2 id='S' >Support our mission during your next visit, by pointing out the following improvements that could be made:</h2>
                    <br />
                    <ul>
                        {practicesList}
                    </ul>
                </div>

            </div>
        )
    }
})

