import Link from "next/link";
import styles from './layout.module.css';
import { clsx } from 'clsx';

export default function Layout({ children, donde }) {
    return(
        <div id={ styles.todo }>
            <header>
                <nav id={ styles.navegacion }>
                    <Link href="/">ALBA CASTRO</Link>
                    <div id={ styles.links } className={ clsx({
                        [styles.work]: donde=="work",
                        [styles.photo]: donde=="photo",
                        [styles.about]: donde=="about"
                    }) }>
                        <Link href="/">WORK</Link>
                        <Link href="/fotos">PHOTO</Link>
                        <Link href="/about">ABOUT</Link>
                    </div>
                </nav>
                <div id={ styles.nav_filler }></div>
            </header>
            { children }
            <div id={ styles.footer_filler }></div>
            <footer id={ styles.footer }>
                © 2023, Alba Castro. All rights reserved. 
            </footer>
        </div>
    )
}