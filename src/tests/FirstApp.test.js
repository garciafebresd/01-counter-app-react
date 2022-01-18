import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import FirstApp from '../FirstApp';

describe('Testing component <FirstApp />', () => {

    test('should show the message and subtitle', () => {
        const greeting = 'Hola, Soy Goku';
        const wrapper = shallow(<FirstApp greeting= { greeting } />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show the subtitle sended by props', () => {
        const greeting = 'Hola, Soy Goku';
        const subTitle = 'El nuevo subtitulo';
        const wrapper = shallow(
            <FirstApp 
                greeting= { greeting } 
                subTitle= { subTitle } 
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitle);
    })
    
    
});
