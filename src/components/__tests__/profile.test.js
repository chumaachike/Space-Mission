import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Profile from '../profile';

const Container = () => {
  <BrowserRouter>
    <Profile />
  </BrowserRouter>;
};

it('Profile renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
