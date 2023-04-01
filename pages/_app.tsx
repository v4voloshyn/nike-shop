import type { AppProps } from 'next/app';

import { helpers } from '@/utils/helpers';

import '@/styles/globals.css';

export const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
