import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

describe('snapshot test for Navbar component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot('navbar');
  });
});
