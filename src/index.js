import React from 'react';
import { createRoot } from 'react-dom/client'; // Update the import
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
   // fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for React
    },
    resources: {
      an: {
        translation: require('./i18n/an/translation.json'),
      },
      fr: {
        translation: require('./i18n/fr/translation.json'),
      },
    },
  });
  const root = createRoot(document.getElementById('root'));
  root.render(
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  );