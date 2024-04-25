import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import CustomCursor from '../components/cursor';
import Script from 'next/script';

import localFont from 'next/font/local';
const helvetica_neue = localFont({
  src: [
    {
      path: '../public/fonts/HELVETICANEUE-ROMAN_0.woff2',
      weight: '400',
    }
  ],
});

export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    return(
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
              }
          `}</style>
          <Component {...pageProps} />
        </>
    ) 
}