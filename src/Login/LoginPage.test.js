import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import LoginPage from './LoginPage';


describe('List component', () => {
    const props = {
        location: {state: ''},
        history: {push: '/'}
    }
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><LoginPage {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><LoginPage {...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})