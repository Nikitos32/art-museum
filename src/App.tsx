import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { MainLayout } from 'layouts/MainLayout/MainLayout';
import { ArtPage } from 'pages/ArtPage/ArtPage';
import { FavouritePage } from 'pages/FavouritePage/FavouritePage';
import { MainPage } from 'pages/MainPage/MainPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/:artId" element={<ArtPage />} />
        <Route path="/favourites/:artId" element={<ArtPage />} />
      </Route>
    )
  );
  return (
    <ErrorBoundary fallback={<p>Error</p>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
