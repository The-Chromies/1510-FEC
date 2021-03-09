import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from 'axios';
import { ContactContext } from '../../Global-Context';
import Overview from '../../components/overview/ovMain';
import ImageGallery from '../../components/overview/components/imageGallery';
import ProductInfo from '../../components/overview/components/productInfo';
import StyleSelector from '../../components/overview/components/styleSelector';
import AddToCart from '../../components/overview/components/addToCart';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('Overview', () => {
  let wrapper;

  it('should render', () => {
    wrapper = mount(<Overview />);
    expect(wrapper.exists()).toBe(true);
    done();
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
});
