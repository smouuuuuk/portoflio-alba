import { React, useEffect } from 'react'
import AOS from 'aos';
import Link from "next/link";
import styles from './layout.module.css';
import Head from 'next/head';
import { clsx } from 'clsx';
import Image from 'next/image';
import Script from 'next/script';

export default function Layout({ children, donde }) {

    function openMenu(){
        document.getElementById( styles.links ).style.left = "0";
    }
    
    function closeMenu(){
        document.getElementById( styles.links ).style.left = "100vw";
    }

    useEffect(() => {
        setInterval(() => {AOS.refresh()}, 500);
     }, [])

    return(
        <div id={ styles.todo }>
            <Head>
                <title>Alba Castro</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,100,0,0" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,250,0,0" />
            </Head>
            <header>
                <div id={ styles.idioma }>
                    <Link className={ styles.link } href="/">EN</Link>
                    <p>/</p>
                    <Link className={ styles.link } href="/es">ES</Link>
                </div>
                <nav id={ styles.navegacion } className={ clsx({
                        [styles.work]: donde=="work" ||  donde=="proyecto",
                        [styles.photo]: donde=="photo",
                        [styles.about]: donde=="about"
                    }) }>
                    <Link hoverable="true" href="/">ALBA CASTRO</Link>
                    <span id={ styles.hamburger } className="material-symbols-rounded md-48" onClick={() => { openMenu() }}>menu</span>
                    <div id={ styles.links } >
                        <span id={ styles.close_menu } className="material-symbols-rounded" onClick={() => { closeMenu() }} >close</span>
                        <Link className={ styles.link } href="/" ><p hoverable="true">WORK</p></Link>
                        <Link className={ styles.link } href="/fotos"><p hoverable="true">PHOTO</p></Link>
                        <Link className={ styles.link } href="/about"><p hoverable="true">ABOUT</p></Link>
                    </div>
                </nav>
                <div id={ styles.nav_filler }>
                    {donde=="proyecto" ? (
                        <>
                        <Link href="/">
                            <Image
                                hoverable="true"
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
                    [styles.project]: donde=="proyecto",
                    [styles.resto]: donde!="photo" || donde!="proyecto"
                }) }>
                <p>
                    Last update: April 2024
                </p>
                <p>
                    © 2024, Alba Castro. All rights reserved. 
                </p>
            </footer>
        </div>
    )
}