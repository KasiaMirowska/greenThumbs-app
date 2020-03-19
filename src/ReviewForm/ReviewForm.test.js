import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as BR } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import {GreenContextProvider as GCP} from '../Context';


describe('List component', () => {
    const props = {
        history: {push: '/'},
        match: {params: {id: 1}}
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><GCP><ReviewForm  {...props} /></GCP></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<BR><GCP><ReviewForm {...props} /></GCP></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})