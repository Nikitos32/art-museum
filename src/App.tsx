import { MainLayout } from 'layouts/MainLayout/MainLayout';
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
        <Route path="/favourites" element={<p>Favourites</p>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
