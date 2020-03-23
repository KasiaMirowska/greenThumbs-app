import React from 'react';
import zero from '../yelpStarIMG/0.png';
import one from '../yelpStarIMG/1.png';
import oneAndHalf from '../yelpStarIMG/1.5.png';
import two from '../yelpStarIMG/2.png';
import twoAndHalf from '../yelpStarIMG/2.5.png';
import three from '../yelpStarIMG/3.png';
import threeAndHalf from '../yelpStarIMG/3.5.png';
import four from '../yelpStarIMG/4.png';
import fourAndHalf from '../yelpStarIMG/4.5.png';
import five from '../yelpStarIMG/5.png'

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
                <img className='starsImg' key={props.rating} src={stars[num]} alt='yelp star'/>
            );
        }
    });
    
    return (
        <div className='starsImg'>
            {starsImg}
        </div>
    )
}