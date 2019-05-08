import React from 'react';
import { shallow, configure } from 'enzyme';
import Component from './video';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Video', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {
        link: '',
        reRenderVideo: false,
    };

    getShallowComponent = () => shallow(<Component {...props} />).dive().instance();
  });

  describe('render', () => {
    it('should render with all props', () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });

  describe('shouldComponentUpdate', () => {
    it('match snaps when nextProps is false', () => {
        const nextProps = {
            reRenderVideo: false,
        };
      expect(getShallowComponent().shouldComponentUpdate(nextProps)).toBe(false);
    });
    it('match snaps when nextProps is true', () => {
        const nextProps = {
            reRenderVideo: true,
        };
      expect(getShallowComponent().shouldComponentUpdate(nextProps)).toBe(true);
    });
  });
});
