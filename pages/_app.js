import { React, useEffect } from 'react'
import 'aos/dist/aos.css';
import '../styles/globals.css';
import CustomCursor from '../components/cursor';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';

import localFont from 'next/font/local';
const helvetica_neue = localFont({
  src: [
    {
      path: '../public/fonts/HELVETICANEUE-ROMAN_0.woff2',
      weight: '400',
    }
  ],
});

const App = ({ Component, pageProps }) => (
  <>
  <Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
  />
  <Script strategy="lazyOnload">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
      });
    `}
  </Script>

  <CustomCursor />
  <style jsx global>{`
      :root {
      /* ... */
      --helvetica-neue: ${helvetica_neue.style.fontFamily};
      --project-border-radius: 16px;
      --gris-coorporativo: #E0E0E0;
      --ancho-borde: 1.5px;
      }
  `}</style>
  <Component {...pageProps} />
  </>
)

export default  appWithTranslation(App);