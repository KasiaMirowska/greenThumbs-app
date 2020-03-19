import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import LoginForm from './LoginForm';


describe('List component', () => {
    const props = {
        onLoginSuccess: () => {},
    }
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><LoginForm {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><LoginForm {...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})