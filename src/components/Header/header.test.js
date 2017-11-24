import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from './../../enzyme';

import Header from './Header';

describe('Render app without crash', () => {
  it('Rendering <Header />', () => {
    const header = shallow(<Header />);
    expect(toJson(header).toMatchSnapshot());
  });
});
