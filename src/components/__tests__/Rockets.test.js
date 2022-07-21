import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Rockets from '../Rockets';

const Container = () => {
  <BrowserRouter>
    <Rockets />
  </BrowserRouter>;
};

it('Rockets renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
