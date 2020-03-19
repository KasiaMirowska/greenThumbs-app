import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import RegisterForm from './RegisterForm';


describe('List component', () => {
    const props = {
        onRegisterSuccess: () => {},
    }
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><RegisterForm {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><RegisterForm{...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})