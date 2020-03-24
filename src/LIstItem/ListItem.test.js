import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as BR } from 'react-router-dom';
import ListItem from './ListItem';

describe('List component', () => {
    const props = {
        id: 1,
        name: 'name',
        itemLocation: {address1: '', city: '', state: '', zip_code: ''},
        phone: 'phne',
        price: 'price',
        img: 'link',
        website: 'link',
        rating: 1,
    }
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><ListItem {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<BR><ListItem {...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})