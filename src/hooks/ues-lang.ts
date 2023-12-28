import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { I18N_QUERY_KEY } from '@/constants/i18n-key';

export function useLang() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [lang, setLang] = React.useState<'zh' | 'en'>(() => {
    searchParams.get(I18N_QUERY_KEY);
    return (searchParams.get(I18N_QUERY_KEY) as 'zh' | 'en') ?? 'en';
  });

  function setCurrentLang(l: 'zh' | 'en') {
    const s = new URLSearchParams();
    if (!s.has(I18N_QUERY_KEY)) {
      s.append(I18N_QUERY_KEY, l);
    }
    setSearchParams(s);
    setLang(l);
    window.location.reload();
  }

  return {
    lang,
    setCurrentLang,
  };
}
