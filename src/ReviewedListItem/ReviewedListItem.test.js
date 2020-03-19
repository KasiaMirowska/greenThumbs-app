import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as BR } from 'react-router-dom';
import ReviewedListItem from './ReviewedListItem';

describe('List component', () => {
    const props = {
        name: 'name',
        city: 'city',
        thumbs: [1,3,2],
        history: { push: '/' }
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><ReviewedListItem  {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<BR><ReviewedListItem {...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})