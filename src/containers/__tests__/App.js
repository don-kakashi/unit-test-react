import React from 'react'
import { shallow } from 'enzyme';
import App from '../App';
import StoreLocator from '../StoreLocator';

describe('App', () => {
  it('Should render without crashing', () => {
    const mountedApp = shallow( <App /> );
  });

  it('Should render StoreLocator', () => {
    const mountedApp = shallow( <App /> );
    const locators = mountedApp.find(StoreLocator);
    expect(locators.length).toBe(1);
  });
});
