import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useUpdate } from 'ahooks';

import { I18N_KEYS } from '@/constants/i18n-key';
import { PATHS } from '@/constants/path';

import { useLang } from '@/hooks/ues-lang';
import { cn } from '@/libs';

import BackToTop from '../back-to-top';
import { Button, buttonVariants } from '../button';

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const { t } = useTranslation();
  const { setCurrentLang } = useLang();
  const update = useUpdate();

  function switchToTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }

    update();
  }

  return (
    <div className="flex flex-col">
      <div className="w-full sticky top-0 shadow-lg z-30">
        <div className="container flex space-x-4 h-16 items-center bg-background">
          <Link
            className={cn(buttonVariants({ variant: 'default' }))}
            to={PATHS.HOME}
          >
            {t(I18N_KEYS.EDITOR_PAGE)}
          </Link>
          <Link
            className={cn(buttonVariants({ variant: 'default' }))}
            to={PATHS.PREVIEW1}
          >
            {t(I18N_KEYS.PREVIEW_PAGE_1)}
          </Link>
          <Link
            className={cn(buttonVariants({ variant: 'default' }))}
            to={PATHS.PREVIEW2}
          >
            {t(I18N_KEYS.PREVIEW_PAGE_2)}
          </Link>
          <Button onClick={() => switchToTheme('light')}>
            {t(I18N_KEYS.SWITCH_TO_LIGHT_THEME)}
          </Button>
          <Button onClick={() => switchToTheme('dark')}>
            {t(I18N_KEYS.SWITCH_TO_DARK_THEME)}
          </Button>
          <Button onClick={() => setCurrentLang('zh')}>
            {t(I18N_KEYS.SWITCH_TO_CHINESE)}
          </Button>
          <Button onClick={() => setCurrentLang('en')}>
            {t(I18N_KEYS.SWITCH_TO_ENGLISH)}
          </Button>
        </div>
      </div>

      {children}

      <BackToTop />
    </div>
  );
}
