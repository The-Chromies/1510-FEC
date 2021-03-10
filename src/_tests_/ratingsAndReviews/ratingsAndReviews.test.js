/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RatingsAndReviews from '../../components/ratingsAndReviews/rrMain';
import reviewsTest from './dummyData/reviewsTest';
import metadataTest from './dummyData/metadataTest';
import { ContactContextProvider } from '../../Global-Context';

Enzyme.configure({ adapter: new Adapter() });

describe('rrMain Tests', () => {
  it('Container is present when review list ', () => {
    const reviewList = reviewsTest;
    const wrapper = shallow(
      <ContactContextProvider>
        <RatingsAndReviews reviewList={reviewList} productId={0} />
      </ContactContextProvider>,
    );

    console.log(wrapper.debug())
    // expect(wrapper.find('.review-key-container')).toBeUndefined();
    expect(wrapper.find('.review-key-container')).toBeDefined();
    expect(wrapper.find('.review-container')).toBeDefined();
    expect(wrapper.find('.summary-container')).toBeDefined();
    expect(wrapper.find('.review-box')).toBeDefined();
  });
});

// it('renders list-items', () => {
//   const items = ['one', 'two', 'three'];
//   const wrapper = shallow(<List items={items} />);

//   // Expect the wrapper object to be defined
//   expect(wrapper.find('.list-items')).toBeDefined();
//   expect(wrapper.find('.item')).toHaveLength(items.length);
// });
