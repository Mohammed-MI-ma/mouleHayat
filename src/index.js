import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';

import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for React
    },
    resources: {
      en: {
        translation: require('./i18n/en/translation.json'),
      },
      fr: {
        translation: require('./i18n/fr/translation.json'),
      },
    },
  });

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root')
);
