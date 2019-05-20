import React from 'react'
import { shallow } from 'enzyme';
import Map from '../Map';
import noneImage from './../../../public/images/none.png';

describe('Map', () => {
  let mountedMap;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
      imageName: 'testmap.png'
    }
    mountedMap = shallow( <Map {...props } /> );
  });

  it('Should render without crashing', () => {
    shallow( <Map /> );
  });

  it('Should contain an image', () => {
    const locators = mountedMap.find('img');
    expect(locators.length).toBe(1);
  });

  it('Should contain a none map when no props are given', () => {
    const defaultMap = shallow( <Map /> );
    const mapImg = defaultMap.find('img').prop('src');
    expect(mapImg).toEqual(`images/${noneImage}`);
  });

  it('Should display the map testmap passed to it', () => {
    const mapImg = mountedMap.find('img').prop('src');
    expect(mapImg).toEqual(`images/testmap.png`);
  });
});