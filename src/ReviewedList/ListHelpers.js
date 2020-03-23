
import React from 'react';
import ReviewedListItem from '../ReviewedListItem/ReviewedListItem';


const ListHelpers = {
    sortDisplay: (list) => {
        console.log(list, 'LISTLISTLIST')
        const reviews = list.map(pl => {
            return (
                <li className='li' key={pl.id}>
                    <ReviewedListItem
                        placeId={pl.id}
                        yelpId={pl.yelp_id}
                        img={pl.img}
                        name={pl.name}
                        city={pl.location_city}
                        category={pl.category}
                        checkedThumbs={pl.checkedThumbs}
                    />
                </li>
            )
        })
        return reviews;
    },

}

export default ListHelpers;