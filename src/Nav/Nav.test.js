import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import Nav from './Nav';


describe('List component', () => {
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><Nav /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><Nav /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})