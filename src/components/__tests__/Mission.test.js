import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Missions from '../Mission';

const Container = () => {
  <BrowserRouter>
    <Missions />
  </BrowserRouter>;
};

it('Mission renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
