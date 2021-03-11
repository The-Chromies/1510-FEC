import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RelatedAndComparison from '../../components/relatedAndComparison/rcMain';
// import RatingsAndReviews from '../components/ratingsAndReviews/rcMain';
import { ContactContextProvider } from '../../Global-Context';
import RelatedList from '../../components/relatedAndComparison/RelatedList';
import ProductCard from '../../components/relatedAndComparison/ProductCard';
import OutfitList from '../../components/relatedAndComparison/OutfitList';
import CompareModal from '../../components/relatedAndComparison/CompareModal';

it('matches the RelatedAndComparison snapshot', () => {
  const snapshot = renderer
    .create(<ContactContextProvider><RelatedAndComparison /></ContactContextProvider>)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});

Enzyme.configure({ adapter: new Adapter() });

describe('RelatedAndComparison', () => {
  let wrapper;
  it('Contains a RelatedAndComparison component', () => {
    wrapper = shallow(<ContactContextProvider><RelatedAndComparison /></ContactContextProvider>);
    expect(wrapper.find()).toBe(true);
  });

  it('Contains a Related List component', () => {
    expect(wrapper.find(<RelatedList />)).toBe(true);
  });

  it('Contains a Product Card component', () => {
    expect(wrapper.find(<ProductCard />)).toBe(true);
  });

  it('Contains an Outfit List component', () => {
    expect(wrapper.find(<OutfitList />)).toBe(true);
  });

  it('Contains a Compare Modal component', () => {
    expect(wrapper.find(<CompareModal />)).toBe(true);
  });
});
