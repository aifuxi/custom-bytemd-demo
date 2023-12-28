import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './components/layout';
import { mockContent, mockContent2 } from './constants/content';
import { PATHS } from './constants/path';
import ByteMDView from './views/bytemd-editor-view';
import PreviewContentView from './views/preview-content-view';

export const router = createBrowserRouter(
  [
    {
      path: PATHS.HOME,
      element: (
        <MainLayout>
          <ByteMDView />
        </MainLayout>
      ),
    },
    {
      path: PATHS.PREVIEW1,
      element: (
        <MainLayout>
          {/* 这里给个唯一key，强制让Preview组件重新渲染，防止组件复用导致useEffect失效 */}
          <PreviewContentView key={PATHS.PREVIEW1} content={mockContent} />
        </MainLayout>
      ),
    },
    {
      path: PATHS.PREVIEW2,
      element: (
        <MainLayout>
          {/* 这里给个唯一key，强制让Preview组件重新渲染，防止组件复用导致useEffect失效 */}
          <PreviewContentView key={PATHS.PREVIEW2} content={mockContent2} />
        </MainLayout>
      ),
    },
  ],
  { basename: '/custom-bytemd-demo/' },
);
