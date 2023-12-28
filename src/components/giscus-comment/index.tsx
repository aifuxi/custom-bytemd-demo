import React from 'react';

import Giscus from '@giscus/react';
import { useMemoizedFn, useMutationObserver } from 'ahooks';

import { useLang } from '@/hooks/ues-lang';

export function GiscusComment() {
  const { lang } = useLang();

  const giscusLang = React.useMemo(() => {
    return lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const getTheme = useMemoizedFn(() => {
    if (document.documentElement.classList.contains('dark')) {
      return 'dark';
    }

    return 'light';
  });

  const [theme, setTheme] = React.useState(getTheme());

  useMutationObserver(
    () => {
      // 当document的class发生改变时，重新设置主题
      setTheme(getTheme());
    },
    document.documentElement,
    { attributes: true },
  );

  return (
    <Giscus
      id="giscus-comments"
      repo="aifuxi/custom-bytemd-demo"
      repoId="R_kgDOK-kawQ"
      category="Announcements"
      categoryId="DIC_kwDOJ3P-jc4CX26h"
      mapping="url"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang={giscusLang}
      loading="lazy"
    />
  );
}
