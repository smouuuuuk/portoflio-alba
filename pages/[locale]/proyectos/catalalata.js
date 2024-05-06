import Layout from "../../../components/layout";
import Image from "next/image";
import styles from '../../../styles/Catalalata.module.css';
import textStyles from '../../../styles/Textos.module.css';
import imgTodoStyles from '../../../styles/TodoImgs.module.css';
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from 'next-i18next'


export default function Catalalata() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slides: {
            spacing: 0,
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

    return(
        <Layout donde="proyecto">
            <div id={ imgTodoStyles.todo }>
                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>CATA LA LATA</h2>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>2023</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Cata La Lata Award - Winner</div>
                            <div className={ textStyles.categoria }>Packaging</div>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_ILUSTRACION")} </div>
                            <div className={ textStyles.categoria }>Motion graphics</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }> {t("CATALALATA_TEXTO_1")} </p>
                        <p className={`${ textStyles.texto_drch } ${ textStyles.small }`}> {t("CATALALATA_TEXTO_2")} </p>
                    </div>
                </div>
                <div id={ imgTodoStyles.imagenes }>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/catalalata/1.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/catalalata/2.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/catalalata/3.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <div id={ styles.animaciones } data-aos="fade-up">
                        <div>
                            <video className={ styles.animacion } autoPlay={true} loop={true} muted={true} playsInline={true} ><source src="/images/catalalata/sardinillas_animar.mp4" type="video/mp4"/></video>
                        </div>
                        <div>
                            <video className={ styles.animacion } autoPlay={true} loop={true} muted={true} playsInline={true} ><source src="/images/catalalata/berberechos_animar.mp4" type="video/mp4"/></video>
                        </div>
                    </div>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/catalalata/4.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
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

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
