import React from 'react';
import { shallow, configure } from 'enzyme';
import Component from './header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Header', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {
        classes: {},
    };

    getShallowComponent = () => shallow(<Component {...props} />).dive();
  });

  describe('render', () => {
    it('should render with all props', () => {
        expect(getShallowComponent().instance()).toMatchSnapshot();
    });
  });
});
