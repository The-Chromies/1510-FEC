/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import { ContactContextProvider } from '../../Global-Context';
import { product, style } from '../testData';
import Overview from '../../components/overview/ovMain';
import ImageGallery from '../../components/overview/components/imageGallery';
import ProductInfo from '../../components/overview/components/productInfo';
import StyleSelector from '../../components/overview/components/styleSelector';
import AddToCart from '../../components/overview/components/addToCart';

it('matches the overview snapshot', () => {
  const snapshot = renderer
    .create(<ContactContextProvider><Overview /></ContactContextProvider>)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});

// let testReviewList = [];
// if (props.testOn) {
//   productId = props.productId;
//   testReviewList = props.reviewList;
// }
const imgProps = {
  selected: style,
  currentIndex: 1,
  generateStarImage: () => {},
  resetIndex: () => {},
  sendClick: () => {},
};

it('matches the image gallery snapshot', () => {
  const snapshot = renderer
    .create(<ContactContextProvider><ImageGallery {...imgProps} /></ContactContextProvider>)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});

// npm test -- -u to update a snapshot

jest.mock('axios');

const getInfo = () => Promise.all([
  (axios.get.mockResolvedValue({ data: product }))(),
  (axios.get.mockResolvedValue({ data: style }))(),
]);

describe('Overview', () => {
  let wrapper;

  it('should render without props', () => {
    wrapper = shallow(<ContactContextProvider><Overview getInfo={getInfo} /></ContactContextProvider>);
    // expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have image gallery', () => {
    wrapper = shallow(<ContactContextProvider><Overview getInfo={getInfo} /></ContactContextProvider>);
    expect(wrapper.find(<ImageGallery />)).toBeTruthy();
  });

  it('should have product info', () => {
    expect(wrapper.find(<ProductInfo styles={style} />)).toBeTruthy();
  });

  it('should have style selector', () => {
    expect(wrapper.find(<StyleSelector />)).toBeTruthy();
  });

  it('should have add to cart', () => {
    expect(wrapper.find(<AddToCart selected={{}} />)).toBeTruthy();
  });

  // it('should conditionally render child components', () => {
  //   wrapper = shallow(<ContactContextProvider><Overview /></ContactContextProvider>);
  //   expect(wrapper.contains(<ImageGallery />)).toBeTruthy();
  // });
});
