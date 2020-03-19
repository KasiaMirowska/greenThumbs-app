import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import SmallForm from './SmallForm';
import {BrowserRouter as BR } from 'react-router-dom';

describe('SmallForm component', () => {
    const props = {
        location: {
            pathname: '/list/:location',
        }
    }
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><SmallForm {...props}/></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const form = renderer.create(<BR><SmallForm {...props}/></BR>);
        expect(form.toJSON()).toMatchSnapshot();
    })
})