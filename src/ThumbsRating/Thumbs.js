import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


export default function Thumbs(props) {
    const greenThumbs = () => {
        const thumbs = [];
        for (let i = 0; i < props.checkedThumbs; i++) {
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

    return (
        <div className='thumbs'>
        {greenThumbs()}
        </div>
    )
}