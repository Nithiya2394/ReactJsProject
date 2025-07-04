'use client';


import i18n from '@/i18n';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';

 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <I18nextProvider i18n={i18n}>
    <Component {...pageProps} />;
    </I18nextProvider>
}

