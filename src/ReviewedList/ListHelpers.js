
import React from 'react';
import ReviewedListItem from '../ReviewedListItem/ReviewedListItem';


const ListHelpers = {
    sortDisplay: (list) => {
        console.log(list)
        const reviews = list.map(pl => {
            return (
                <li className='li' key={pl.id}>
                    <ReviewedListItem
                        placeId={pl.id}
                        yelpId={pl.yelp_id}
                        name={pl.name}
                        city={pl.location_city}
                        category={pl.category}
                        thumbs={pl.checkedThumbs.length}
                    />
                </li>
            )
        })
        return reviews;
    },

}

export default ListHelpers;