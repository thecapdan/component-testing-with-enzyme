import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Tile from '../lib/tile';

describe('<Tile />', () => {
  it('contains a <Tile/> component', function () {
    const wrapper = mount(<Tile/>);
    expect(wrapper.find(Tile)).to.have.length(1);
  });

});
