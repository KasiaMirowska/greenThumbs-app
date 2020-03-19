import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import List from './List';

describe('List component', () => {
    const props = {
        match: {
            params: {location: 'location'}
        }
    }
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><List {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><List {...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})