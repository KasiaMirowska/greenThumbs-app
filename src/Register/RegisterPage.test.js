import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import RegisterPage from './RegisterPage';


describe('List component', () => {
    const props = {
        history: {push: '/login'}
    }
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><RegisterPage {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><RegisterPage {...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})