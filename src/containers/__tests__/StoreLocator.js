import React from 'react'
import { shallow } from 'enzyme';
import axios from 'axios';
import StoreLocator from '../StoreLocator';
import Header from '../../components/Header';
import Map from '../../components/Map';
import renderer from 'react-test-renderer'

describe('StoreLocator', () => {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow( <StoreLocator /> );
  });

  it('Should call axios.get with the correct url', () => {
    return mountedStoreLocator.instance().componentDidMount(()=>
      expect(axios.get).toHaveBeenCalledWith('/data/shops.json')
    )
  })

  it('Should update state with api data', () => {
    return mountedStoreLocator.instance().componentDidMount(()=>
      expect(mountedStoreLocator.state()).toHaveProperty('shops', [{
        location: 'test location',
        address: 'test address',
      }]))
  })

  it('Should render without crashing', () => {
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render a Header', () => {
    const locators = mountedStoreLocator.find(Header);
    expect(locators.length).toBe(1);
  });

  it('Should render a Map', () => {
    const locators = mountedStoreLocator.find(Map);
    expect(locators.length).toBe(1);
  });
});

describe('chooseMap', () => {
  it('Should update the state "currentMap" using the location passed to it', () => {
    const mountedStoreLocator = shallow( <StoreLocator /> );
    const mockEvent = {target:{value:'testland'}};
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png')
  });
})