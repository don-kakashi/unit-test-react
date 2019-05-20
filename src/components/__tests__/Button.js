import React from 'react'
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow( <Button /> );
  });

  it('Should render without crashing', () => {
    const mountedButton = shallow( <Button /> );
  });

  it('Should render a button', () => {
    const locators = mountedButton.find('button');
    expect(locators.length).toBe(1);
  });

  it('Should a function passed to it when clicked', () => {
    const mockCallback = jest.fn();
    const mountedButtonWithCallback =  shallow(<Button handleClick={mockCallback} />);
    mountedButtonWithCallback.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});

describe('When a location is passed to it', () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props={
      location : "Location1"
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it('Should display the location', () => {
    const locName = mountedButton.find('button');
    expect(locName.text()).toEqual("Location1");
  });
})

describe('When no location is passed to it', () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props={
      location : undefined
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it('Should display the location', () => {
    const locName = mountedButton.find('button');
    expect(locName.text()).toEqual("All Locations");
  });
})