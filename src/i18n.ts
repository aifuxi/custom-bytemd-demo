import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { I18N_KEYS } from './constants/i18n-key';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          [I18N_KEYS.EDITOR_PAGE]: 'Editor Page',
          [I18N_KEYS.PREVIEW_PAGE_1]: 'Preview page 1',
          [I18N_KEYS.PREVIEW_PAGE_2]: 'Preview page 2',
          [I18N_KEYS.SWITCH_TO_LIGHT_THEME]: 'Switch to light theme',
          [I18N_KEYS.SWITCH_TO_DARK_THEME]: 'Switch to dark theme',
          [I18N_KEYS.SWITCH_TO_CHINESE]: 'Switch to Chinese/中文',
          [I18N_KEYS.SWITCH_TO_ENGLISH]: 'Switch to English',
        },
      },
      zh: {
        translation: {
          [I18N_KEYS.EDITOR_PAGE]: '编辑器页面',
          [I18N_KEYS.PREVIEW_PAGE_1]: '预览页面 1',
          [I18N_KEYS.PREVIEW_PAGE_2]: '预览页面 2',
          [I18N_KEYS.SWITCH_TO_LIGHT_THEME]: '切换为浅色主题',
          [I18N_KEYS.SWITCH_TO_DARK_THEME]: '切换为深色主题',
          [I18N_KEYS.SWITCH_TO_CHINESE]: '切换为中文',
          [I18N_KEYS.SWITCH_TO_ENGLISH]: '切换为英文',
        },
      },
    },
  });

export default i18n;
