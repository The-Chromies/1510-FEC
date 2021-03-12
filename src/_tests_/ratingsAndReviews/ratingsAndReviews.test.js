/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, {
  configure, shallow, mount, render,
} from 'enzyme';
import renderer from 'react-test-renderer';
import RatingsAndReviews from '../../components/ratingsAndReviews/rrMain';
import ReviewBox from '../../components/ratingsAndReviews/components/reviewBox';
import ReviewFilter from '../../components/ratingsAndReviews/components/reviewFilter';
import ReviewListContainer from '../../components/ratingsAndReviews/components/reviewListContainer';
import SubmitReview from '../../components/ratingsAndReviews/components/submitReview';
import SummaryContainer from '../../components/ratingsAndReviews/components/summaryContainer';
import SummaryStar from '../../components/ratingsAndReviews/components/summaryStar';

import reviewsTest from './dummyData/reviewsTest';
import metadataTest from './dummyData/metadataTest';
import { ContactContextProvider } from '../../Global-Context';

describe('rrMain Tests', () => {
  let wrapper;
  const dummyprops = {
    revFlag: true,
    findReviewMeta: () => {},
    meta: [],
    generateStarImage: () => {},
    avgRating: 1,
    handleStarClick: () => {},
    starFilter: 1,
    handleFetchMore: () => {},
    revCount: 1,
    reviewList: [],
    productId: 18085,
  };
  it('Container is present when review list ', () => {
    const reviewList = reviewsTest;
    wrapper = mount(
      <ContactContextProvider>
        <RatingsAndReviews reviewList={reviewList} productId={0} />
      </ContactContextProvider>,
    );
  });

  // console.log(wrapper.debug())
  // expect(wrapper.find('.review-key-container')).toBeUndefined();

  it('Review Keys Container Present', () => {
    expect(wrapper.find('.review-key-container')).toBeTruthy();
  });

  it('Review Container Present', () => {
    expect(wrapper.find('.review-container')).toBeTruthy();
  });

  it('Summary Container Present', () => {
    expect(wrapper.find('.summary-container')).toBeTruthy();
  });

  it('review-box Present', () => {
    expect(wrapper.find('.review-box')).toBeTruthy();
  });

  it('SummaryContainer React Component Present', () => {
    expect(wrapper.shallow(<SummaryContainer {...dummyprops} />).toBe(true));
  });

  it('ReviewFilter React Component Present', () => {
    expect(wrapper.shallow(<ReviewFilter {...dummyprops} />).toBe(true));
  });

  it('ReviewListContainer React Component Present', () => {
    expect(wrapper.shallow(<ReviewListContainer {...dummyprops} />).toBe(true));
  });
});

describe('Compare Snapshot for each component', () => {
  const formValues = Object.freeze({
    product_id: 18055,
    rating: 1,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: {},
    helpfulness: 1,
  });
  const dummyprops = {
    revFlag: true,
    findReviewMeta: () => {},
    meta: [{ ratings: [1, 2, 3, 4] }],
    generateStarImage: () => {},
    avgRating: 1,
    handleStarClick: () => {},
    starFilter: 1,
    handleFetchMore: () => {},
    revCount: 1,
    reviewList: [],
    productId: 18085,
    review: formValues,
    tempKey: 1,
  };
  it('matches the rrMain snapshot', () => {
    const snapshot = renderer
      .create(<ContactContextProvider><RatingsAndReviews {...dummyprops} /></ContactContextProvider>)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('matches the ReviewBox snapshot', () => {
    const snapshot = renderer
      .create(<ReviewBox {...dummyprops} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('matches the ReviewFilter snapshot', () => {
    const snapshot = renderer
      .create(<ReviewFilter {...dummyprops} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('matches the ReviewListContainer snapshot', () => {
    const snapshot = renderer
      .create(<ReviewListContainer {...dummyprops} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('matches the SummaryContainer snapshot', () => {
    const snapshot = renderer
      .create(<SummaryContainer {...dummyprops} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('matches the SubmitReview snapshot', () => {
    const snapshot = renderer
      .create(<SubmitReview {...dummyprops} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('matches the SummaryStar snapshot', () => {
    const snapshot = renderer
      .create(<SummaryStar {...dummyprops} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

describe('Filter Container Check', () => {
  const reviewMeta = metadataTest;
  const setSortKey = () => {};
  it('ReviewFilter has default state value', () => {
    const wrapper = mount(<ReviewFilter meta={reviewMeta} setSortKey={setSortKey} />);
    const select = wrapper.find('select');
    expect(select.props().value).toBeTruthy();
  });
});

it('renders list-items', () => {
  const items = ['one', 'two', 'three'];
  const wrapper = shallow(<List items={items} />);

  // Expect the wrapper object to be defined
  expect(wrapper.find('.list-items')).toBeDefined();
  expect(wrapper.find('.item')).toHaveLength(items.length);
});
