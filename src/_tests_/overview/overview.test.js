/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import axios from 'axios';
import { ContactContextProvider } from '../../Global-Context';
import { product, style } from '../testData';
import Overview from '../../components/overview/ovMain';
import ImageGallery from '../../components/overview/components/imageGallery';
import ProductInfo from '../../components/overview/components/productInfo';
import StyleSelector from '../../components/overview/components/styleSelector';
import AddToCart from '../../components/overview/components/addToCart';

jest.mock('axios');

const getInfo = () => Promise.all([
  (axios.get.mockResolvedValue({ data: product }))(),
  (axios.get.mockResolvedValue({ data: style }))(),
]);

describe('Overview', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<ContactContextProvider><Overview getInfo={getInfo} /></ContactContextProvider>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should have image gallery', () => {
    expect(wrapper.find(<ImageGallery />)).toBeTruthy();
  });

  it('should have product info', () => {
    expect(wrapper.find(<ProductInfo />)).toBeTruthy();
  });

  it('should have style selector', () => {
    expect(wrapper.find(<StyleSelector />)).toBeTruthy();
  });

  it('should have add to cart', () => {
    expect(wrapper.find(<AddToCart />)).toBeTruthy();
  });

  // it('should conditionally render child components', () => {
  //   wrapper = shallow(<ContactContextProvider><Overview /></ContactContextProvider>);
  //   expect(wrapper.contains(<ImageGallery />)).toBeTruthy();
  // });
});

// it('should render a BookWrapper', () => {
//   expect(
//     wrapper.contains(
//       <BookWrapper
//         roomData={instance.state.roomData}
//         isCalendarDisplayed={instance.state.isCalendarDisplayed}
//         isCheckInDisplayed={instance.state.isCheckInDisplayed}
//         isCheckOutDisplayed={instance.state.isCheckOutDisplayed}
//         isPricingDisplayed={instance.state.isPricingDisplayed}
//         renderHeader={instance.renderHeader}
//         renderDays={instance.renderDays}
//         renderCells={instance.renderCells}
//         checkInTitle={instance.state.checkInTitle}
//         checkOutTitle={instance.state.checkOutTitle}
//         bookingDuration={instance.state.bookingDuration}
//         checkInClass={instance.state.checkInClass}
//         checkOutClass={instance.state.checkOutClass}
//         checkInClassSelected={instance.state.checkInClassSelected}
//         checkOutClassSelected={instance.state.checkOutClassSelected}
//       />
//     )
//   ).toBe(true);
// });
