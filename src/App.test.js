import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders text \'Loading...\' in document', () => {
  const {getByText} = render(<App />);
  const postsText = getByText(/Loading.../i);
  expect(postsText).toBeInTheDocument();
});
