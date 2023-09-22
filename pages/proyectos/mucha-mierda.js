import Image from "next/image";
import Layout from "../../components/layout";
import styles from '../../styles/Muchamierda.module.css';
import textStyles from '../../styles/Textos.module.css';
import imgTodoStyles from '../../styles/TodoImgs.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


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
                        <div id={ textStyles.mencion }>
                            <p>Premiado: <a href="https://www.adg-fad.org/es/laus/proyecto/mucha-mierda-0">ADG Laus Bronce</a></p>
                        </div>
                        <div id={ textStyles.informacion}>
                            <p>Tamaño: A2</p>
                            <p>Papel ecológico de 100gr</p>
                            <p>Encuadernación grapada</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Dirección de arte</div>
                            <div className={ textStyles.categoria }>Editorial</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }>La revista explora el concepto de suerte en la vida cotidiana. </p>
                        <p className={ textStyles.texto_drch }>Navega por diferentes temas para informar y entretener al lector, dejando paso a su subjetividad.</p>
                        <p className={ textStyles.texto_drch }>Equipo: Inés Oliver, Hugo Morán, Sara Zaloña y Alba Castro.</p>
                    </div>
                </div>

                <div id={ imgTodoStyles.imagenes }>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/home/home_3.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <div className={ `${imgTodoStyles.imagen} navigation-wrapper` } data-aos="fade-up">
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide">
                                <Image
                                    priority
                                    src="/images/mucha-mierda/carrusel_1.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    priority
                                    src="/images/mucha-mierda/carrusel_2.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    priority
                                    src="/images/mucha-mierda/carrusel_3.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    priority
                                    src="/images/mucha-mierda/carrusel_4.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    priority
                                    src="/images/mucha-mierda/carrusel_5.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt=""
                                />
                            </div>
                        </div>
                        {loaded && instanceRef.current && (
                            <>
                            <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                            />

                            <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                            />
                        </>
                        )}
                    </div>
                    <div id={styles.contra_impresora}>
                        <Image 
                            className= { imgTodoStyles.imagen }
                            priority
                            src="/images/mucha-mierda/contraportada.jpg"
                            width={ 1600 }
                            height={ 1600 }
                            alt="Todos los estuches de conservas"
                            data-aos="fade-right"
                        />
                        <Image
                            className= { imgTodoStyles.imagen }
                            priority
                            src="/images/mucha-mierda/impresora.jpg"
                            width={ 1600 }
                            height={ 1600 }
                            alt="Todos los estuches de conservas"
                            data-aos="fade-left"
                        />
                    </div>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/mucha-mierda/revista_entera.jpg"
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