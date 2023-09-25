import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Catalalata.module.css';
import textStyles from '../../styles/Textos.module.css';
import imgTodoStyles from '../../styles/TodoImgs.module.css';
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


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

    return(
        <Layout donde="proyecto">
            <div id={ imgTodoStyles.todo }>
                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>CATA LA LATA</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>Premiado: <a href="https://www.fundacionbancosabadell.com/alba-castro-ganadora-del-v-premio-de-diseno-anfaco/">Ganadora V Edición Cata La Lata <br></br> Anfaco x Fundación Banco Sabadell</a></p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Packaging</div>
                            <div className={ textStyles.categoria }>Ilustración</div>
                            <div className={ textStyles.categoria }>Motion graphics</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }>Diseño de packaging para seis variedades de conservas. Además de mostrar el producto, aparece la figura humana que es clave en todo el proceso. Se diseñó un personaje neutro que interactúa de forma simpática con el producto. Por un lado, este personaje hace referencia a los pescadores y las mariscadoras gallegas y por otro lado, también hace un guiño al consumidor que disfruta del producto. Se buscaba que cualquiera pudiese sentirse identificado con el diseño, independientemente de su edad.</p>
                        <p className={`${ textStyles.texto_drch } ${ textStyles.small }`}>- Se ha valorado la creatividad y la profesionalidad de ejecución del diseño en su conjunto. La limpieza del diseño, con un predominio del blanco y negro sobre el que contrasta una ingeniosa reinterpretación del logo-marca “Cata la Lata” aplicada en colores vivos. El tratamiento y la carga emotiva de las ilustraciones que representan a un pescador cariñoso en distintas situaciones, que utiliza con versatilidad, jugando con el frente y el reverso de los estuches. El resultado en su conjunto desarrolla una historia coherente, homogénea, que hace familia al integrar con destreza a las distintas categorías de producto - Jurado</p>
                    </div>
                </div>
                <div id={ imgTodoStyles.imagenes }>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/catalalata/todas.jpg"
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
                    <div className={ `${imgTodoStyles.imagen} navigation-wrapper` } data-aos="fade-up">
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide">
                                <Image
                                    priority
                                    src="/images/catalalata/atun.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt="Todos los estuches de conservas"
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image 
                                    priority
                                    src="/images/catalalata/sardinillas.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt="Todos los estuches de conservas"
                                    />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                        priority
                                        src="/images/catalalata/mejillones.jpg"
                                        width={ 1600 }
                                        height={ 1600 }
                                        alt="Todos los estuches de conservas"
                                        />
                            </div>
                            <div className="keen-slider__slide">
                                <Image 
                                    priority
                                    src="/images/catalalata/chipirones.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt="Todos los estuches de conservas"
                                    />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                        priority
                                        src="/images/catalalata/berberecho.jpg"
                                        width={ 1600 }
                                        height={ 1600 }
                                        alt="Todos los estuches de conservas"
                                        />
                            </div>
                            <div className="keen-slider__slide">
                                <Image 
                                    priority
                                    src="/images/catalalata/zamburinas.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt="Todos los estuches de conservas"
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
                        <Image 
                            className= { imgTodoStyles.imagen }
                            priority
                            src="/images/catalalata/sardinas.jpg"
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
