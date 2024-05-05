import Layout from "../../../components/layout";
import Image from "next/image";
import styles from '../../../styles/Fos.module.css';
import textStyles from '../../../styles/Textos.module.css';
import imgTodoStyles from '../../../styles/TodoImgs.module.css';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from 'next-i18next'


export default function Fos(){

    const { t } = useTranslation();

    return(
        <Layout donde="proyecto">
            <div id={imgTodoStyles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>FOS ESTUDIO ®</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2022</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>Cliente: Fos Estudio</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_IDENTIDAD_VISUAL")} </div>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_PAPELERIA")} </div>
                            <div className={ textStyles.categoria }>Motion graphics</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }> {t("FOS_TEXTO")} </p>
                    </div>
                </div>

                <div id={ imgTodoStyles.imagenes }>
                <video id={ styles.videofos } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius:"16px" }} data-aos="fade-up"><source src="/images/fos/animacion_logo.mp4" type="video/mp4"/></video>
                    <div id={styles.lamp_tarj}>
                        <div>
                            <Image 
                                className= { imgTodoStyles.imagen }
                                priority
                                src="/images/fos/2.jfif"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                                data-aos="fade-right"
                                />
                        </div>
                        <div>
                            <Image
                                className= { imgTodoStyles.imagen }
                                priority
                                src="/images/fos/3.jpg"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                                data-aos="fade-left"
                            />
                        </div>
                    </div>
                    <Image
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/fos/4.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-left"
                    />
                    {/* <video id={ styles.videofos } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius:"35px" }} data-aos="fade-up"><source src="/images/fos/animacion_logo.mp4" type="video/mp4"/></video> */}
                </div>

            </div>
        </Layout>
    )
}

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }