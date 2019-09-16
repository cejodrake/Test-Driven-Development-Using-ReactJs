import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
    it('renders without crashing', () => {
        let mountedButton = shallow(<Button />);
    })



});
