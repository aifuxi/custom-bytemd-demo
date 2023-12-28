import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './i18n.ts';
import { router } from './router.tsx';
import './styles/bytemd.css';
import './styles/github-dark.css';
import './styles/github-light.css';
import './styles/global.css';
import './styles/scrollbar.css';
import './styles/toc.css';

import 'bytemd/dist/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
