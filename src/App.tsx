import { RouterProvider } from 'react-router-dom';

import routes from './routes';

import './reset.css';

export default function App() {
  return (
    <RouterProvider router={routes} />
  );
}
