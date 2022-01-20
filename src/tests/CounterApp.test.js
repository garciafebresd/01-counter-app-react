import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import CounterApp from "../CounterApp";

describe('Testing CounterApp component', () => {

    let wrapper;     
    beforeEach(()=>{
        wrapper = initCounterAppComponent();
    });

    function initCounterAppComponent(value = null){

        if (value === null){
            return shallow(<CounterApp />);
        }
        
        return shallow(<CounterApp value={value} />);;
    }

    test('should show CounterApp default value', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should show correctly value = 100', () => {

        const wrapper = initCounterAppComponent(100);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');

    });

    
    test('should increment with button +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');

    });
    
    test('should decrement with button -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');

    });

    test('should return to initial value with button reset', () => {

        const wrapper = initCounterAppComponent(105);

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });
    
});
