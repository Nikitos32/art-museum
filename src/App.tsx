import { MainLayout } from 'layouts/MainLayout.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<MainLayout />} />)
  );
  return <RouterProvider router={router} />;
};
