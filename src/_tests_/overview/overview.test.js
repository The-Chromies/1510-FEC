/* eslint-disable react/jsx-props-no-spreading */
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

// // mock axios for control over axios functions
// jest.mock('axios');

// // get all data neccessary from axios requests
// const getInfo = () => Promise.all([
//   (axios.get.mockResolvedValue({ data: product }))(),
//   (axios.get.mockResolvedValue({ data: style }))(),
// ]);

const fakeProps = {
  goToReviews: () => {},
  selected: style,
  product: {},
  styles: {},
  currentIndex: 1,
  generateStarImage: () => {},
  resetIndex: () => {},
  sendClick: () => {},
  show: false,
  expanded: false,
  onHide: () => {},
  setExpandedState: () => {},
  setCollapsed: () => {},
  qty: 1,
};

// snapshot tests
describe('Should match snapshot for each component', () => {
  it('matches the overview snapshot', () => {
    const snapshot = renderer
      .create(<ContactContextProvider><Overview /></ContactContextProvider>)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  // it('matches the image gallery snapshot', () => {
  //   const snapshot = renderer
  //     .create(<ContactContextProvider><ImageGallery {...fakeProps} /></ContactContextProvider>)
  //     .toJSON();
  //   expect(snapshot).toMatchSnapshot();
  // });

  // it('matches the product info snapshot', () => {
  //   const snapshot = renderer
  //     .create(<ContactContextProvider><ProductInfo {...fakeProps} /></ContactContextProvider>)
  //     .toJSON();
  //   expect(snapshot).toMatchSnapshot();
  // });
});

describe('Overview', () => {
  let wrapper;

  it('should render without props', () => {
    wrapper = shallow(<ContactContextProvider><Overview /></ContactContextProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have image gallery', () => {
    wrapper = mount(<ContactContextProvider><Overview /></ContactContextProvider>);
    expect(wrapper.find(<ImageGallery />)).toBeTruthy();
  });

  it('should have product info', () => {
    wrapper = mount(<ContactContextProvider><Overview /></ContactContextProvider>);
    expect(wrapper.find(<ProductInfo styles={style} />)).toBeTruthy();
  });

  it('should have style selector', () => {
    wrapper = mount(<ContactContextProvider><Overview /></ContactContextProvider>);
    expect(wrapper.find(<StyleSelector />)).toBeTruthy();
  });

  it('should have add to cart', () => {
    wrapper = mount(<ContactContextProvider><Overview /></ContactContextProvider>);
    expect(wrapper.find(<AddToCart selected={{}} />)).toBeTruthy();
  });

  // it('should conditionally render child components', () => {
  //   wrapper = mount(<ContactContextProvider><Overview /></ContactContextProvider>);
  //   expect(wrapper.contains(<ImageGallery />)).toBeDefined();
  // });
});

// test product info, style selector, add to cart, & image gallery for dynamic rendering on change of product id / click of new card

// product info tests
describe('Product Info', () => {
  let wrapper;

  // 1. test for review click to invoke goToReviews func
  it('should invoke goToReviews on click of review list', () => {
    const mockCallback = jest.fn();
    wrapper = mount(<ContactContextProvider><ProductInfo {...fakeProps} /></ContactContextProvider>);
    console.log(wrapper.find('.review-link').length);
    // wrapper.find('.review-link').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });

  // 2. test onClick of social media buttons to share to given platform
});

/*
style selector tests

1. on click of a style, selected state updates
2. text above selected style renders dynamically on click of selected style

*/

/*
add to cart tests

1. on change of size select, size state is updated & qty select is enabled
2. on change of qty select given qty is saved
3. post request made on click of add to cart button when valid size & quantity are selected
4. on click of add to cart button when no size is selected, div with "Please select a size" appears

*/

/*
collapsed view image gallery tests

1. on click of R & L arrows of main image carousel next or prev image is in view
2. on click of thumbnail icon, main image corresponds
3. when > 7 thumbnail images exist, up & down arrows render
4. on click up & down arrows prev or next thumbnail image is in view
5. on click of main image in carousel, expanded carousel modal renders

*/

/*
expanded view image gallery tests

1. on click of main image, image is zoomed & mouseover functionality is enabled
2. on click of most expanded image, image is zoomed out & mouseover functionality is disabled

*/
