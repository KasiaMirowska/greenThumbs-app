import React from 'react';
import zero from '../yelpStars/0.png';
import one from '../yelpStars/1.png';
import oneAndHalf from '../yelpStars/1.5.png';
import two from '../yelpStars/2.png';
import twoAndHalf from '../yelpStars/2.5.png';
import three from '../yelpStars/3.png';
import threeAndHalf from '../yelpStars/3.5.png';
import four from '../yelpStars/4.png';
import fourAndHalf from '../yelpStars/4.5.png';
import five from '../yelpStars/5.png'

export default function YelpRating(props) {
    const stars = {
        0: zero,
        1: one,
        1.5: oneAndHalf,
        2: two,
        2.5: twoAndHalf,
        3: three,
        3.5: threeAndHalf,
        4: four,
        4.5: fourAndHalf,
        5: five
    }

    const starsImg = Object.keys(stars).map(num => {
        if (num == props.rating) {
            return (
                <img className='starsImg' key={props.rating} src={stars[num]} />
            );
        }
    });
    
    return (
        <div className='starsImg'>
            {starsImg}
        </div>
    )
}