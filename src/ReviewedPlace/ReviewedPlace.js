import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Place(props) {
   
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
    
    return (
        <div>
            <Link to={`/bookmark/${props.reviewedPlaceId}`}>
                <button>Save for future</button>
            </Link>
            <h3>{props.placeName}</h3>
            <p>{props.city}</p>
            <p>{props.comments}</p>
            {greenThumbs()}
        </div>
    )
}
