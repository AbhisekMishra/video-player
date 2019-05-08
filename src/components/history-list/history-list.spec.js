import React from 'react';
import { shallow, configure } from 'enzyme';
import Component from './history-list';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('HistoryList', () => {
    let props;
    let getShallowComponent;

    beforeEach(() => {
        props = {
            historyArr: [],
            classes: {},
            setVideoLink: jest.fn(),
        };

        getShallowComponent = (newProps) => shallow(<Component {...props} {...newProps} />).dive();
    });

    describe('render', () => {
        it('snapshot of instance with no value in lists', () => {
            expect(getShallowComponent().instance()).toMatchSnapshot();
        });

        it('snapshot of instance with value in lists', () => {
            const newProps = {
                historyArr: ['link1', 'link2', 'link3', 'link4', 'link5'],
            };
            expect(getShallowComponent(newProps).instance()).toMatchSnapshot();
        });
    });

    describe('handleListItemClick', () => {
        it('should update the state value when called', () => {
            const newProps = {
                historyArr: ['link1', 'link2', 'link3', 'link4', 'link5'],
            };
            const wrapper = getShallowComponent(newProps).instance();
            wrapper.handleListItemClick({}, 'link1');
            expect(wrapper.state.selectedHistory).toBe('link1');
            expect(props.setVideoLink).toBeCalled();
        });
    });
});
