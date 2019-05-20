import React from 'react'
import { shallow } from 'enzyme';
import Header from '../Header';
import logoImage from './../../../public/images/wired-brain-coffee-logo.png';

describe('Header', () => {

  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow( <Header /> );
  });

  it('Should render without crashing', () => {
    const mountedHeader = shallow( <Header /> );
  });

  it('Should contain a logo', () => {
    const logoImg = mountedHeader.find('img').prop('src');
    expect(logoImg).toEqual(`images/${logoImage}`);
  });
  
});