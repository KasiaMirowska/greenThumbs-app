import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreenContext from '../Context';
import GreenCalls from '../Services/GreenCalls';


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
                this.setState({
                    error: err
                })
            })

    }


    render() {
        // this.handleUserIdentityBeforeDeleteAndPost()
        const greenPractices = ['No single use plastic', 'Compostable take-out containers and cups', 'No plastic bottled drinks', 'Composting food scraps', 'Recycle and compost bins inside', 'Hemp based or fabric napkins and paper towels', 'Papperless, fully computer based billing and record keeping', 'Donating leftover food to local shelter or "free meal night"', 'Locally sourced produce', 'Organic produce', 'Resposible frying oil disposal', 'Saves energy by installing light timers and motion sensors', 'Saves water by installing low flow faucets', 'Saves energy and water by installing energy star equipmnet']

        let placeId = Number(this.props.match.params.placeId);
        let yelpId = this.props.match.params.yelpId;
        console.log(this.context.greenPlaces, 'CONTEXT');
        const selectedPlace = this.context.greenPlaces.find(pl => pl.yelp_id === yelpId)
      
        const { name, img, url, yelp_rating, location_str, location_city, location_zip, location_st, display_phone, green_reviews_count, category, review } = selectedPlace;

        const greenThumbs = selectedPlace.checkedThumbs.map((el, key) => {
            return (
                <li key={key}>{el}</li>
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
                <li key={key}>
                    {el}
                </li>
            )
        })

        const currentUsersPlace = this.context.userPlaces.find(place => place.id === placeId)
        
        return (

            <div className='list-item'>

<div className='img-container'>
                     <img src={img} />
                </div>
                
                <div className='text-area'>
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



                <h2>{name}</h2>
                <h3>Address:</h3><p>{location_str}, {location_city}, {location_st}, {location_zip}</p>
                <h3>{display_phone}</h3>
                <p>{category}</p>
                <h3>Yelp rating: {yelp_rating}</h3>
                <h3>GREEN thumbs UP reviews count: {green_reviews_count}</h3>
                <h2>This location has been noted for following Earth friendly practices:</h2>
                <ul>
                    {greenThumbs}
                </ul>
                <h2>Additional comments:</h2>
                <p>{review[0]}</p>
                <h2>Support our mission during your next visit, by pointing out the following improvements that could be made:</h2>
                <ul>
                    {practicesList}
                </ul>

            </div>
            </div>
        )
    }
})

