import React from 'react';
import { shallow, configure } from 'enzyme';
import Component from './search-bar';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
    let props;
    let getShallowComponent;

    beforeEach(() => {
        props = {
            classes: {},
            setLink: jest.fn(),
            link: '',
            renderVideo: jest.fn(),
        };

        getShallowComponent = () => shallow(<Component {...props} />).dive();
    });

    describe('render', () => {
        it('should render with all props', () => {
            expect(getShallowComponent()).toMatchSnapshot();
        });

        it('snapshot with instance', () => {
            expect(getShallowComponent().instance()).toMatchSnapshot();
        });
    });

    describe('TextField', () => {
        it('should call props.setLink on change', () => {
            const event = {
                target: {
                    value: 'abc',
                },
            };
            getShallowComponent().find('TextField').simulate('change', event);
            expect(props.setLink).toBeCalled();
        });
    });

    describe('Button', () => {
        it('should call props.renderVideo on click', () => {
            getShallowComponent().find('.SearchBar-button-3').simulate('click');
            expect(props.renderVideo).toBeCalled();
        });
    });
});
