import React from 'react';

import enLocales from 'bytemd/locales/en.json';
import zhLocales from 'bytemd/locales/zh_Hans.json';

import { useLang } from '@/hooks/ues-lang';

import { enPlugins, zhPlugins } from './config';

export function useByteMD() {
  const { lang } = useLang();
  const [plugins, locale] = React.useMemo(
    () => (lang === 'zh' ? [zhPlugins, zhLocales] : [enPlugins, enLocales]),
    [lang],
  );

  return { plugins, locale };
}
