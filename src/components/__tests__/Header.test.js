import React from 'react';

import Header from '../Header';
import { shallow } from 'enzyme';

describe('Header', () => {
    let mountedHeader;
    beforeEach(() => {
        mountedHeader = shallow(<Header />);
    });

    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders a log', () => {
        const logImg = mountedHeader.find('img[src="images/wired-brain-coffee-logo.png"]');
        expect(logImg.length).toBe(1);
    })

});
