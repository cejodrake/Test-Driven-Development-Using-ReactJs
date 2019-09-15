import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';

describe('StoreLocator', () => {
    let mountedStoreLocator;
    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />)
    })

    it('renders without crashing', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
    });
    it('renders a header', () => {
        const header = mountedStoreLocator.find('Header');
        expect(header.length).toBe(1);
    })
})

