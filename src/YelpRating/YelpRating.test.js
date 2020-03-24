import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import YelpRating from './YelpRating';


describe('YealpRating component', () => {
    const props = {num: 5}

    it.only('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<YelpRating {...props}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<YelpRating {...props}/>, div);
        expect(item.toJSON()).toMatchSnapshot();
    })
})