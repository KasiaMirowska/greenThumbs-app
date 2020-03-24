import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Thumbs(props) {
    if (props.checkedThumbs) {
        const greenThumbs = props.checkedThumbs.map((checked, i) => {
            return (<span key={i}>
                <FontAwesomeIcon icon={faThumbsUp} style={{ color: '#008000', padding: '5px' , fontSize: '2em'}} />
            </span>);
        });
        return (
            <div className='thumbs'>
                {greenThumbs}
            </div>
        );
    } else {
        return (<div className='thumbs'></div>);
    }
}