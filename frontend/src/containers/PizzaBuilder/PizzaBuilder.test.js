import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PizzaBuilder } from './PizzaBuilder';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<PizzaBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PizzaBuilder 
            onInitToppings={() => {}}
            onCalculateTotalPrice={() => {}} />);
    });

    it('should render <BuildControls /> when receiving toppings', () => {
        wrapper.setProps({toppings: {pepperoni: true}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});