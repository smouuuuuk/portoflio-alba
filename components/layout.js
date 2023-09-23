import { React, useEffect } from 'react'
import AOS from 'aos';
import Link from "next/link";
import styles from './layout.module.css';
import Head from 'next/head';
import { clsx } from 'clsx';
import Image from 'next/image';

export default function Layout({ children, donde }) {

    function openMenu(){
        document.getElementById( styles.links ).style.left = "0";
    }
    
    function closeMenu(){
        document.getElementById( styles.links ).style.left = "100vw";
    }

    useEffect(() => {
        setTimeout(() => {AOS.refresh()}, 500);
     }, [])

    return(
        <div id={ styles.todo }>
            <Head>
                <title>Alba Castro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav id={ styles.navegacion } className={ clsx({
                        [styles.work]: donde=="work" ||  donde=="proyecto",
                        [styles.photo]: donde=="photo",
                        [styles.about]: donde=="about"
                    }) }>
                    <Link href="/">ALBA CASTRO</Link>
                    <Image id={ styles.hamburger } src="/images/hamburger-menu.svg" height={ 20 } width={ 20 } onClick={() => { openMenu() }} />
                    <div id={ styles.links } >
                        <Image id={ styles.close_menu } src="/images/close.svg" height={ 25 } width={ 25 } onClick={() => { closeMenu() }} />
                        <Link href="/">WORK</Link>
                        <Link href="/fotos">PHOTO</Link>
                        <Link href="/about">ABOUT</Link>
                    </div>
                </nav>
                <div id={ styles.nav_filler }>
                    {donde=="proyecto" ? (
                        <>
                        <Link href="/">
                            <Image
                                id={ styles.flecha_atras }
                                priority
                                src="/images/arrow-right.svg"
                                width={ 40 }
                                height={ 40 }
                                alt="Volver al inicio"
                            />
                        </Link>
                        </>
                            ) : (
                                <>
                            </>
                            )
                    }
                </div>
            </header>
            { children }
            <div id={ styles.footer_filler }></div>
            <footer id={ styles.footer } className={ clsx({
                    [styles.photo]: donde=="photo",
                    [styles.resto]: donde!="photo"
                }) }>
                © 2023, Alba Castro. All rights reserved. 
            </footer>
        </div>
    )
}