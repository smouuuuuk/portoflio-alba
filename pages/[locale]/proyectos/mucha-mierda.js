import Image from "next/image";
import Layout from "../../../components/layout";
import styles from '../../../styles/Muchamierda.module.css';
import textStyles from '../../../styles/Textos.module.css';
import imgTodoStyles from '../../../styles/TodoImgs.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from 'next-i18next'


export default function MuchaMierda(){

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

    return(
        <Layout donde="proyecto">
            <div id={imgTodoStyles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>MUCHA MIERDA</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ textStyles.informacion}>
                            <p> {t("MUCHA_MIERDA_TAMANO")} </p>
                            <p> {t("MUCHA_MIERDA_PAPEL_ECOLOGICO")} </p>
                            <p> {t("MUCHA_MIERDA_ENCUADERNACION")} </p>
                            <p>W/ Inés Oliver, Hugo Morán, Sara Zaloña</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>ADG Laus Bronze Award</div>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_DIRECCION_ARTE")} </div>
                            <div className={ textStyles.categoria }> {t("CATEGORIA_EDITORIAL")} </div>
                        </div>

                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }> {t("MUCHA_MIERDA_TEXTO_1")} </p>
                        <p className={ textStyles.texto_drch }> {t("MUCHA_MIERDA_TEXTO_2")} </p>
                    </div>
                </div>

                <div id={ imgTodoStyles.imagenes } >
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/mucha-mierda/1.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <div id= { styles.gifMag } data-aos="fade-up">
                        <Image 
                            className= { imgTodoStyles.imagen }
                            priority
                            src="/images/mucha-mierda/2.gif"
                            width={ 1600 }
                            height={ 1600 }
                            alt="Todos los estuches de conservas"
                        />
                    </div>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/mucha-mierda/3.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/mucha-mierda/4.jpg"
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
    //     <svg
    //     onClick={props.onClick}
    //     className={`arrow ${
    //         props.left ? "arrow--left" : "arrow--right"
    //     }`}
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 24 24"
    //     >
    //     {props.left && (
    //         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    //     )}
    //     {!props.left && (
    //       <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    //     )}
    //   </svg>
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