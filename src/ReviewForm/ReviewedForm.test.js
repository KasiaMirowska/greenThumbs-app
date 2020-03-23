import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as BR } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import GreenContext from '../Context';


    
      


describe('List component', () => {
    
    const contextValue = {
        list: [{
            id:1,
            name: 'name1',
            img_url: 'url',
            url: 'url',
            yelp_rating: 3, 
            location : {
                address1: 'street1',
                city: 'city2',
                zip_code: '20222',
                state: 'Ma',
            }
            display_phone: '(123) 345 5678', 
            green_reviews_count: 3, 
            category: 'category', 
            review: 'review',
        },
        {
            id:2,
            name: 'name2',
            img: 'url',
            url: 'url',
            yelp_rating: 3, 
            location_str: 'street', 
            location_city: 'city', 
            location_zip: 'zip', 
            location_st: 'state', 
            display_phone: '(123) 345 5678', 
            green_reviews_count: 3, 
            category: 'category', 
            review: 'review',
        }]
      
    };

    const props = {
        history: {push: '/'},
        match: {params: {id: 1}}
    }

    it.only('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><GreenContext.Provider value={contextValue} ><ReviewForm  {...props} /></GreenContext.Provider ></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<BR><GCP><ReviewForm {...props} /></GCP></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})