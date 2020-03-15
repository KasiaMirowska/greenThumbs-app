// import React from 'react';
// import GreenContext from '../Context';
// import ReviewedListItem from '../ReviewedListItem/ReviewedListItem';

// export default class UserSort extends React.Component {
//     static contextType = GreenContext;



//     render () {
        
//         const reviews = this.context.userPlaces.map(pl => {
//             return (
//                 <li className='li' key={pl.id}>
//                     <ReviewedListItem
//                         placeId={pl.id}
//                         yelpId={pl.yelp_id}
//                         name={pl.name}
//                         city={pl.location_city}
//                         category={pl.category}
//                         thumbs={pl.checkedThumbs.length}
//                     />
//                 </li>
//             )
//         })
//         return (
//             <div>
//                 {reviews}
//             </div>
//         )
       
//     }
// }