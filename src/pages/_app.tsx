import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {console.log(
                '%cMade with ❤️ by https://zenversee.com',
                'color: #D9D9D9; font-size: 16px; background: #101010; padding: 10px;',
            )}
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}
