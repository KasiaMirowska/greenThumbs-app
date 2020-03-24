import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Thumbs from './Thumbs';


describe('Thumbs component', () => {
    const props = {
        checkedThumbs: ['thumb1', 'thumb2']
    }

    it.only('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<Thumbs  {...props}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<Thumbs {...props}/>, div);
        expect(item.toJSON()).toMatchSnapshot();
    })
})