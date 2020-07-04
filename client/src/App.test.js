import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders... nothing? :o', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/nothing/i);
  expect(linkElement).toBeInTheDocument();
});
