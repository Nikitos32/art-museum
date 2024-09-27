import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MainLayout } from 'layouts/MainLayout/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from 'pages/MainPage/MainPage';

test('should render a btn', async () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    console.log(obj);
    return '';
  };
  render(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
  expect(screen.findByRole('button', { name: '1' })).toBeDefined();
});

test('should contain correct url', async () => {
  render(<MainPage />);
  expect(document.location.pathname).toEqual('/');
});

test('should contain btn', async () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    console.log(obj);
    return '';
  };
  render(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
  const button = await screen.getByTestId('favouriteBtn');
  fireEvent.click(button);
  expect(button).toBeDefined();
});
