import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar';


describe('Footer component', () => {
    const props = {
        history: {push: '/'},
    }

    it.only('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<SearchBar  {...props}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<SearchBar {...props}/>, div);
        expect(item.toJSON()).toMatchSnapshot();
    })
})