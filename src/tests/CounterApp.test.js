import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import CounterApp from "../CounterApp";

describe('Testing CounterApp component', () => {

    test('should show CounterApp default value', () => {

        const wrapper = shallow(<CounterApp value={ 10 } />);
        expect(wrapper).toMatchSnapshot();

    });

    test('should show correctly value = 100', () => {

        const wrapper = shallow(<CounterApp value={100} />);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    });
    
});
