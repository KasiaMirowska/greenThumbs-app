import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import Header from './Header'

describe('List component', () => {
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><Header /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><Header /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})