/**
 * @format
 */

import React from 'react';
import App from '../App';
import {render, screen} from '@testing-library/react-native';

test('renders correctly', async () => {
  render(<App />);
  const productListHeader = await screen.findByTestId('safe-area-provider');
  expect(productListHeader).toBeDefined();
});
