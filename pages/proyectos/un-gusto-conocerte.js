import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/UGC-Libro.module.css';
import textStyles from '../../styles/Textos.module.css';
import imgTodoStyles from '../../styles/TodoImgs.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


export default function UnGustoConocerteLibro() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slides: {
            perView: 1
        },
        defaultAnimation: {
            duration: 1500
        },
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
    })

    const { t } = useTranslation();

    useEffect(() => {
       
        window.addEventListener("resize", handleResize);
       
        handleResize();
       
        return () => window.removeEventListener("resize", handleResize);
         }, []
    );

    const handleResize = () => {
        var newHeight = document.getElementById("imgModelo").offsetHeight;
        var imgParallax = document.getElementById(`UGC-Libro_imgParallax__F_AKW`);
        imgParallax.style.height = newHeight;
    }

    return(
        <Layout donde="proyecto">
            <div id={ imgTodoStyles.todo }>
                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>RENÉ, UN GUSTO CONOCERTE</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ textStyles.informacion}>
                            <p> {t("UGC_TFG")} </p>
                            <p>21 x 29,7cm</p>
                            <p> {t("UGC_LIBRO_PAGINAS")} </p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }><p>Design for the Future UNESCO Award</p></div>
                            <div className={ textStyles.categoria }><p> {t("CATEGORIA_EDITORIAL")} </p></div>
                            <div className={ textStyles.categoria }><p> {t("CATEGORIA_DIRECCION_ARTE")} </p></div>
                            <div className={ textStyles.categoria }><p> {t("CATEGORIA_FOTOGRAFIA")} </p></div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }> {t("UGC_LIBRO_TEXTO_1")} </p>
                        <p className={ textStyles.texto_drch }> {t("UGC_LIBRO_TEXTO_2")} </p>
                        <p className={ textStyles.texto_drch }> {t("UGC_LIBRO_TEXTO_3")} </p>
                        <Link hoverable="true" className={ textStyles.ver_link } href="/proyectos/un-gusto-conocerte-marca"> {t("UGC_LIBRO_BRANDING")} <span hoverable="true" class="material-symbols-rounded">arrow_outward</span></Link> 
                    </div>
                </div>
                <div id={ imgTodoStyles.imagenes }>

                    <Image
                        id="imgModelo"
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/un-gusto-conocerte/1.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />

                    <div id={ styles.imgParallax }>
                        <Image
                            className= { imgTodoStyles.imagen }
                            priority
                            src="/images/un-gusto-conocerte/2.png"
                            width={ 1600 }
                            height={ 1600 }
                            data-aos="fade-up"
                        />
                    </div>
                    
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/3.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/4.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/5.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/6.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/8.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/9.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/10.gif"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                        data-aos="fade-up"
                    />

                </div>
            </div>

            
            

        </Layout>
    )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <Image
            onClick={props.onClick}
            priority
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            }`}
            src="/images/arrow-right.svg"
            width={ 30 }
            height={ 30 }
        />
    )
}

export async function getStaticProps(context) {
    // extract the locale identifier from the URL
    const { locale } = context

    return {
        props: {
        // pass the translation props to the page component
        ...(await serverSideTranslations(locale)),
        },
    }
}