import { render, screen } from '@testing-library/react';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

describe('App', () => {
  test('should display Related And Comparison', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('.related-comparison');
    expect(text.text()).toBe('<RelatedAndComparison />');
  });
});
