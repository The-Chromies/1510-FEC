/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import App from '../App';
import { ContactContextProvider } from '../Global-Context';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<ContactContextProvider><App /></ContactContextProvider>);
    expect(wrapper.exists()).toBe(true);
  });
});
