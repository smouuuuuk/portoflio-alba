import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import CustomCursor from '../components/cursor';

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
          <CustomCursor />
          <style jsx global>{`
              :root {
              /* ... */
              --helvetica-neue: ${helvetica_neue.style.fontFamily};
              }
          `}</style>
          <Component {...pageProps} />
        </>
    ) 
}