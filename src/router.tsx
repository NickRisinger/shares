import { createBrowserRouter } from 'react-router-dom';

import IndexPage from '~/pages/objects/IndexPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
]);
