// import React from 'react';
// import ReactDom from 'react-dom';
// import renderer from 'react-test-renderer';
// import { BrowserRouter as BR } from 'react-router-dom';
// import GreenPlace from './GreenPlace';
// import { GreenContextProvider as GCP } from '../Context';
// // import {GreenContext} from '../Context';


// describe('List component', () => {
    
//     const props = {
//         history: { push: '/' },
//         match: {
//             params: {
//                 placeId: 1,
//                 yelpId: 'a'
//             }
//         }
//     }

//     it('renders without crashing', () => {
//         const div = document.createElement('div');
//         ReactDom.render(<BR><GCP value={{

//                 greenPlaces: [{
//                 name: 'name1',
//                 img: 'url',
//                 url: 'url',
//                 yelpId: 'a',
//                 yelp_rating: 3,
//                 location_str: 'street',
//                 location_city: 'city',
//                 location_zip: 'zip',
//                 location_st: 'state',
//                 display_phone: '(123) 345 5678',
//                 green_reviews_count: 3,
//                 category: 'category',
//                 review: 'review',
//             },
//             {
//                 name: 'name2',
//                 img: 'url',
//                 url: 'url',
//                 yelpId: 'b',
//                 yelp_rating: 3,
//                 location_str: 'street',
//                 location_city: 'city',
//                 location_zip: 'zip',
//                 location_st: 'state',
//                 display_phone: '(123) 345 5678',
//                 green_reviews_count: 3,
//                 category: 'category',
//                 review: 'review',
//             }
//             ]}}
//         }}><GreenPlace {...props} /></GCP></BR>, div);
//         ReactDom.unmountComponentAtNode(div);
//     });

//     it('renders UI as expected', () => {
//         const item = renderer.create(<BR><GCP><GreenPlace {...props} /></GCP></BR>);
//         expect(item.toJSON()).toMatchSnapshot();
//     })
// })