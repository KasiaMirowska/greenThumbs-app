import React from 'react';
import { withRouter } from 'react-router-dom';
import TokenService from '../Services/token-service';
import config from '../config';
import './ListItem.css';
import YelpRating from '../YelpRating/YelpRating';


export default withRouter(class ListItem extends React.Component {

    handleReviewButton = () => {
        const token = TokenService.hasAuthToken(config.TOKEN_KEY)
        if (!token) {
            this.props.history.push("/login", { state: `/review/${this.props.id}` });
        } else {
            this.props.history.push(`/review/${this.props.id}`)
        }
    }
    render() {
        console.log(this.props, 'PROPS')
        return (
            <div className='list-item'>
                <div className='img-container'>
                    <img src={this.props.img_url} />
                </div>
                <li key={this.props.id} className='li'>
                    <div className='text-area'>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.itemLocation.address1}, {this.props.itemLocation.city} </p>

                        <p>{this.props.itemLocation.state} {this.props.itemLocation.zip_code}</p>
                        <br />
                        <p>{this.props.phone}</p>
                        <p>Price-range: {this.props.price}</p>

                        <a href={`${this.props.website}`} target="_blank" rel='noopener noreferrer'><h2>Visit</h2></a>
                        <div className='rating-box'>
                            <p>Yelp rating: </p>
                            <YelpRating rating={this.props.rating} />
                        </div>
                    </div>
                    <div className='button-container2'>

                        <button className='review-button' onClick={this.handleReviewButton}>Create ThumbsUP review</button>

                    </div>
                </li>
                <br />
                <br />
            </div>
        );
    }
})
