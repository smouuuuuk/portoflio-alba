import Image from "next/image";
import Layout from "../../components/layout";
import styles from '../../styles/UGC-Marca.module.css';
import textStyles from '../../styles/Textos.module.css';
import imgTodoStyles from '../../styles/TodoImgs.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function UnGustoConocerteMarca() {

    const { t } = useTranslation();

    return(
        <Layout donde="proyecto">
            <div id={imgTodoStyles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>UN GUSTO CONOCERTE</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p> {t("UGC_TFG")} </p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Brand guidelines</div>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_DIRECCION_ARTE")} </div>
                            <div className={ textStyles.categoria }>Motion graphics</div>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_ILUSTRACION")} </div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }> {t("UGC_MARCA_TEXTO_1")} </p>
                        <p className={ textStyles.texto_drch }> {t("UGC_MARCA_TEXTO_2")} </p>
                        <Link hoverable="true" className={ textStyles.ver_link } href="/proyectos/un-gusto-conocerte"> {t("UGC_MARCA_PRODUCTO")} <span hoverable="true" class="material-symbols-rounded">arrow_outward</span></Link>  
                    </div>
                </div>

                <div id={ imgTodoStyles.imagenes }>
                    <video id={ styles.videougc } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius: "16px" }} data-aos="fade-up"><source src="/images/home/home_2.mp4" type="video/mp4"/></video>
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/un-gusto-conocerte-marca/2.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/3.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <div id={ styles.gifManos }>
                        <Image
                            className= { imgTodoStyles.imagen }
                            id={ styles.gifMano }
                            priority
                            src="/images/un-gusto-conocerte-marca/4.gif"
                            width={ 1600 }
                            height={ 1600 }
                            alt="Todos los estuches de conservas"
                            data-aos="fade-up"
                        />
                    </div>
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/5.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/6.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    {/* <video hoverable="true" id={ styles.videougc } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} controls={true} data-aos="fade-up"><source src="/images/un-gusto-conocerte-marca/rrss_video.mp4" type="video/mp4"/></video> */}

                </div>

            </div>
        </Layout>
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