import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import TokenService from '../Services/token-service';
import config from '../config';

export default withRouter(function ReviewedListItem(props) {
   console.log(props)
    const greenThumbs = () => {
        const thumbs = [];
        for(let i =0; i < props.thumbs; i++){
            thumbs.push(<span key={i}>
                < FontAwesomeIcon icon={faThumbsUp} style={{ color: 'green', padding: '3px' }} />
            </span>)
        } 
        return(
            <div>
                {thumbs}
            </div>
        )
    }

    const openFullCard = (e) => {
        const token = TokenService.hasAuthToken(config.TOKEN_KEY)
        if(!token) {
            props.history.push('/login')
        } else {
            props.history.push(`/green_place/:${props.yelpId}/:${props.placeId}`)
        }

    }
    
    return (
        <div onClick={openFullCard}>
            <h3>{props.name}</h3>
            <p>{props.city}</p>
            {greenThumbs()}
        </div>
    )
});
