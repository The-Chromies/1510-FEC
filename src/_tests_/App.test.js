import { render, screen } from '@testing-library/react';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Overview/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  it('should display Related And Comparison', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('.related-comparison');
    expect(text.text()).toBe(' <RelatedAndComparison /> ');
  })
})
