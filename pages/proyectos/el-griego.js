import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Micenico.module.css';
import textStyles from '../../styles/Textos.module.css';
import imgTodoStyles from '../../styles/TodoImgs.module.css';
import { useState } from "react";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useEffect } from "react";


export default function Micenico(){

    const { t } = useTranslation();

    return(
        <Layout donde="proyecto">
             <div id={imgTodoStyles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>EL GRIEGO</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2024</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>Client: El Griego</p>
                            <p>3D: Rodrigo Salas</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_DIRECCION_CREATIVA")} </div>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_CONCEPTUALIZACION")} </div>
                            <div className={ textStyles.categoria }>Motion graphics</div>
                            <div className={ textStyles.categoria }>Branding</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }> {t("MICENICO_TEXTO_1")} </p>
                        <p className={ textStyles.texto_drch }> {t("MICENICO_TEXTO_2")} </p>
                    </div>
                </div>

                <div id={ imgTodoStyles.imagenes }>
                    <video data-aos="fade-up" id={ styles.video_obj } className={ styles.videos} width="1400" autoPlay={true} loop={true} muted={true} playsInline={true}><source src="/images/el-griego/1.mp4" type="video/mp4"/></video>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/el-griego/2.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <video data-aos="fade-up" id={ styles.video_colores } className={ styles.videos} width="1400" autoPlay={true} loop={true} muted={true} playsInline={true}><source src="/images/el-griego/3.mp4" type="video/mp4"/></video>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/el-griego/4.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <video data-aos="fade-up" id={ styles.video_poster } className={ styles.videos} width="1400" autoPlay={true} loop={true} muted={true} playsInline={true}><source src="/images/el-griego/5.mp4" type="video/mp4"/></video>

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