import React from 'react';

import { useLang } from '@/hooks/ues-lang';

import { BytemdEditor } from '../components/bytemd';
import { mockContent, mockContent2 } from '../constants/content';

export default function ByteMDView() {
  const { lang } = useLang();
  const [content, setContent] = React.useState<string>(() =>
    lang === 'zh' ? mockContent2 : mockContent,
  );

  return (
    <div className="container pt-4">
      <BytemdEditor content={content} setContent={setContent} />
    </div>
  );
}
