import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Catalalata.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function Catalalata() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slides: {
            spacing: 15,
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
            <div id={ styles.todo }>
                <div id={ styles.textos }>
                    <div id={ styles.textos_izq }>
                        <div id={ styles.titulo }>
                            <h2>CATA LA LATA</h2>
                        </div>
                        <div id={ styles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ styles.mencion }>
                            <p>Premiado: <a href="https://www.fundacionbancosabadell.com/alba-castro-ganadora-del-v-premio-de-diseno-anfaco/">Ganadora V Edición Cata La Lata <br></br> Anfaco x Fundación Banco Sabadell</a></p>
                        </div>
                        <div id={ styles.categorias }>
                            <div className={ styles.categoria }>Packaging</div>
                            <div className={ styles.categoria }>Ilustración</div>
                            <div className={ styles.categoria }>Motion graphics</div>
                        </div>
                    </div>
                    <div id={ styles.textos_drch }>
                        <p className={ styles.texto_drch }>Diseño de packaging para seis variedades de conservas. Además de mostrar el producto, aparece la figura humana que es clave en todo el proceso. Se diseñó un personaje neutro que interactúa de forma simpática con el producto. Por un lado, este personaje hace referencia a los pescadores y las mariscadoras gallegas y por otro lado, también hace un guiño al consumidor que disfruta del producto. Se buscaba que cualquiera pudiese sentirse identificado con el diseño, independientemente de su edad.</p>
                        <p className={ styles.texto_drch } small>- Se ha valorado la creatividad y la profesionalidad de ejecución del diseño en su conjunto. La limpieza del diseño, con un predominio del blanco y negro sobre el que contrasta una ingeniosa reinterpretación del logo-marca “Cata la Lata” aplicada en colores vivos. El tratamiento y la carga emotiva de las ilustraciones que representan a un pescador cariñoso en distintas situaciones, que utiliza con versatilidad, jugando con el frente y el reverso de los estuches. El resultado en su conjunto desarrolla una historia coherente, homogénea, que hace familia al integrar con destreza a las distintas categorías de producto - Jurado</p>
                    </div>
                </div>
                <div id={ styles.imagenes }>
                    <Image 
                        className= { styles.imagen }
                        priority
                        src="/images/catalalata/todas.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <div id={ styles.animaciones }>
                        <div>
                            <video className={ styles.animacion } autoPlay={true} loop={true} muted={true} playsInline={true} ><source src="/images/catalalata/sardinillas_animar.mp4" type="video/mp4"/></video>
                            <video className={ styles.animacion } autoPlay={true} loop={true} muted={true} playsInline={true} ><source src="/images/catalalata/berberechos_animar.mp4" type="video/mp4"/></video>
                        </div>
                    </div>
                    <div className={ `${styles.imagen} navigation-wrapper` }>
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide">
                                <Image
                                        className= { styles.imagen }
                                        priority
                                        src="/images/catalalata/atun.jpg"
                                        width={ 1600 }
                                        height={ 1600 }
                                        alt="Todos los estuches de conservas"
                                        />
                            </div>
                            <div className="keen-slider__slide">
                                <Image 
                                    className= { styles.imagen }
                                    priority
                                    src="/images/catalalata/sardinillas.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt="Todos los estuches de conservas"
                                    />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                        className= { styles.imagen }
                                        priority
                                        src="/images/catalalata/mejillones.jpg"
                                        width={ 1600 }
                                        height={ 1600 }
                                        alt="Todos los estuches de conservas"
                                        />
                            </div>
                            <div className="keen-slider__slide">
                                <Image 
                                    className= { styles.imagen }
                                    priority
                                    src="/images/catalalata/chipirones.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt="Todos los estuches de conservas"
                                    />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                        className= { styles.imagen }
                                        priority
                                        src="/images/catalalata/berberecho.jpg"
                                        width={ 1600 }
                                        height={ 1600 }
                                        alt="Todos los estuches de conservas"
                                        />
                            </div>
                            <div className="keen-slider__slide">
                                <Image 
                                    className= { styles.imagen }
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
                            className= { styles.imagen }
                            priority
                            src="/images/catalalata/foto.jpg"
                            width={ 1600 }
                            height={ 1600 }
                            alt="Todos los estuches de conservas"
                            />
                </div>
            </div>


            

        </Layout>
    )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
        onClick={props.onClick}
        className={`arrow ${
            props.left ? "arrow--left" : "arrow--right"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        >
        {props.left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }
