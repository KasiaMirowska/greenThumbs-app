import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter as BR} from 'react-router-dom';
import EditGreenPlace from './EditGreenPlace';
import { GreenContextProvider as GCP } from '../Context';

describe('List component', () => {
    const props = {
        match: {params: {path: '/'}},
        history: {push: '/'}
    }
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><GCP><EditGreenPlace {...props} /></GCP></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><GCP><EditGreenPlace {...props} /></GCP></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })
})