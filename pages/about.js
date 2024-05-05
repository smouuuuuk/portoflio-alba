import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/About.module.css"
import Draggable, {DraggableCore} from "react-draggable";
import { useEffect } from "react";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function About(){

    const { t } = useTranslation();

    return(
        <Layout donde="about" >
                <Draggable className={ styles.drag } defaultPosition={{x: 725, y: 225}} bounds="parent" rotate={0}>
                    <div className={ styles.div_img} id= { styles.alba }>
                        <Image
                            priority
                            src="/images/alba.jpg"
                            width={ 350 }
                            height={ 350 }
                            alt="Alba"
                        />
                    </div>
                </Draggable>
                <Draggable className={ styles.drag } defaultPosition={{x: 225, y:425}} bounds="parent" rotate={0}>
                    <div className={ styles.div_img} id= { styles.tulipan }>
                        <Image
                            priority
                            src="/images/tulipan.png"
                            width={ 900 }
                            height={ 900 }
                            alt="Alba"
                        />
                    </div>
                </Draggable>
                <div id={ styles.todo }>
                    
                    <div id={ styles.presentacion }>
                        <div>
                            <p> {t("ABOUT_TEXTO_1")} </p>
                            <p> {t("ABOUT_TEXTO_2")} </p>
                            <p> {t("ABOUT_TEXTO_3")} </p>
                        </div>
                    </div>
                    <div id= { styles.imagenes_peq }>
                        <Image
                            priority
                            src="/images/alba.jpg"
                            width={ 350 }
                            height={ 350 }
                            alt="Alba"
                        />
                        <Image
                            priority
                            src="/images/tulipan.png"
                            width={ 900 }
                            height={ 900 }
                            alt="Alba"
                        />
                    </div>
                    <div id={ styles.datos }>
                        <div className={ styles.seccion_datos } id={ styles.contacto }>
                            <h2> {t("ABOUT_CONTACTO")} </h2>
                            <div>
                                <a hoverable="true" href="mailto:albacastrog@gmail.com">Email</a><p>&nbsp;- albacastrog@gmail.com</p>
                            </div>
                            <div>
                                <a hoverable="true" href="https://instagram.com/albacastro.g" target="_blank">Instagram</a><p>&nbsp;- @albacastro.g</p>
                            </div>
                            <div>
                                <a hoverable="true" href="https://linkedin.com/in/alba-castro-garcía-25169120a/" target="_blank">Linkedin</a><p>&nbsp;- Alba Castro</p>
                            </div>
                        </div>
                        <div className={ styles.seccion_datos } id={ styles.experiencia }>
                            <h2> {t("ABOUT_EXPERIENCIA")} </h2>
                            <div>
                                <p>(2024)</p>
                                <p>Zapiens</p>
                                <p>Visual Designer</p>
                            </div>
                            <div>
                                <p>(2021)</p>
                                <p>TheWokis</p>
                                <p>Internship</p>
                            </div>
                        </div>
                        <div className={ styles.seccion_datos } id={ styles.premios }>
                            <h2> {t("ABOUT_PREMIOS")} </h2>
                            <div>
                                <h2>(2024)</h2>
                                <p>ADG Laus Aporta</p>
                                <h2>(2023)</h2>
                                <p>Design for the future, UNESCO</p>
                                <a hoverable="true" href="https://bid-dimad.org/encuentrosbid/decimo/talentos/udit_-un-gusto-conocerte/" target="_blank">BID-Dimad 10ª Edición, Mención Gráfico</a>
                                <a hoverable="true" href="https://www.adg-fad.org/es/laus/proyecto/mucha-mierda-0" target="_blank">ADG Laus Bronce</a>
                                <a hoverable="true" href="https://drive.google.com/file/d/1GaPmNoYKAeOYOL1w2wlrfLFMuWwHIoou/view" target="_blank">Winner CataLaLata ANFACO-Fundación Banco Sabadell</a>
                                <a hoverable="true" href="https://www.oneclub.org/awards/youngones/-award/46754/blood-calls-to-blood" target="_blank">Young Ones Students Awards, Plata</a>
                                <a hoverable="true" href="https://www.oneclub.org/awards/youngones/-award/46755/this-is-a-library" target="_blank">Young Ones Students Awards, Merit</a>
                            </div>
                        </div>
                        <div className={ styles.seccion_datos } id={ styles.prensa }>
                            <h2> {t("ABOUT_PRENSA")} </h2>
                            <a hoverable="true" href="https://www.ondacero.es/emisoras/asturias/alba-castro-aun-existen-muchos-estigmas-personas-que-tienen-alguna-discapacidad-todo-intelectual_2024031865f863099e2a440001bc3481.html" target="_blank">Entrevista Radio Onda Cero</a>
                            <a hoverable="true" href="https://www.ivoox.com/ser-occidente-castropol-barres-premio-nacional-packaging-asociacion-audios-mp3_rf_112228507_1.html" target="_blank">Entrevista Radio SER</a>
                            <a hoverable="true" href="https://www.fundacionbancosabadell.com/alba-castro-ganadora-del-v-premio-de-diseno-anfaco/" target="_blank">Fundación Banco Sabadell</a>
                            <a hoverable="true" href="https://www.lavozdegalicia.es/noticia/sociedad/2023/06/30/alba-castro-ganadora-v-premio-diseno-anfaco-fundacion-banco-sabadell/00031688120090515387871.htm" target="_blank">La Voz de Galicia</a>
                        </div>
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