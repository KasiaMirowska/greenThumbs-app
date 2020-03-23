import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import TokenService from '../Services/token-service';
import config from '../config';
import './ReviewedListItem.css';



export default withRouter(function ReviewedListItem(props) {

    const greenThumbs = () => {
        const thumbs = [];
        for (let i = 0; i < props.thumbs; i++) {
            thumbs.push(<span key={i}>
                < FontAwesomeIcon icon={faThumbsUp} style={{ color: '#008000', padding: '5px' , fontSize: '2em'}} />
            </span>)
        }
        return (
            <div>
                {thumbs}
            </div>
        )
    }

    const openFullCard = (e) => {
        const token = TokenService.hasAuthToken(config.TOKEN_KEY)
        if (!token) {
            props.history.push('/login')
        } else {
            props.history.push(`/green_place/${props.yelpId}/${props.placeId}`)
        }

    }
    console.log(props, 'PROPSSSSSSS')
    return (
        <div className='home-list' onClick={openFullCard}>
            <div className='small-img-container'>
                <img src={props.img} />
            </div>
            <div className='text'>
            <h3>{props.name}</h3>
            <br />
            <div className='text2'>
            <p>{props.city}</p>
            <p>Saved to category: {props.category}</p>
            </div>
            <div className='thumbs'>
            {greenThumbs()}
            </div>
            </div>
         </div>
    )
});
