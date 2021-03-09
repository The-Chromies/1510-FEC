import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Overview from '../../components/overview/ovMain';
import ImageGallery from '../../components/overview/components/imageGallery';
import ProductInfo from '../../components/overview/components/productInfo';
import StyleSelector from '../../components/overview/components/styleSelector';
import AddToCart from '../../components/overview/components/addToCart';

describe('Overview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Overview />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // it('should contain the Image Gallery component', () => {
  //   expect(wrapper.find(ImageGallery).length).toBe(1);
  // });

  // it('should contain the Product Info component', () => {
  //   expect(wrapper.find(ProductInfo).length).toBe(1);
  // });

  // it('should contain the Style Selector component', () => {
  //   expect(wrapper.find(StyleSelector).length).toBe(1);
  // });

  // it('should contain the Add to Cart component', () => {
  //   expect(wrapper.find(AddToCart).length).toBe(1);
  // });

})