import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/UGC-Libro.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


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

    return(
        <Layout donde="proyecto">
            <div id={ styles.todo }>
                <div id={ styles.textos }>
                    <div id={ styles.textos_izq }>
                        <div id={ styles.titulo }>
                            <h2>RENÉ, UN GUSTO CONOCERTE</h2>
                        </div>
                        <div id={ styles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ styles.informacion}>
                            <p>Trabajo Fin de Grado</p>
                            <p>Tamaño: 21 x 29,7cm</p>
                            <p>106 páginas</p>
                        </div>
                        <div id={ styles.categorias }>
                            <div className={ styles.categoria }>Editorial</div>
                            <div className={ styles.categoria }>Dirección de arte</div>
                            <div className={ styles.categoria }>Fotografía analógica</div>
                        </div>
                    </div>
                    <div id={ styles.textos_drch }>
                        <p className={ styles.texto_drch }>“Un gusto conocerte” es una iniciativa sin ánimo de lucro que surge con el objetivo de eliminar todos aquellos estigmas presentes en la sociedad hacia las personas con síndrome de Down, a través de los aspectos que les hacen singulares más allá de la etiqueta diagnóstica.</p>
                        <p className={ styles.texto_drch }>El proyecto plantea una publicación redactada empleando el método de lectura fácil en la que el protagonista es una persona concreta con síndrome de Down. Con una mirada intimista, el libro se desarrolla como un recorrido a través de las cosas cotidianas que han sido o son relevantes en la vida de la persona. El proyecto se completa gracias al planteamiento de una colección periódica, un libro al año, con un o una protagonista diferente cada vez, además de la creación de un pack de lanzamiento que incluye un pequeño objeto representativo de la persona junto a su libro.</p>
                        <a href="">VER BRANDING</a> 
                    </div>
                </div>
                <div id={ styles.imagenes }>

                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/foto_exterior.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                    />
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/contraportada_zoom.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                    />
                    
                    <div className={ `${styles.imagen} navigation-wrapper` }>
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide">
                                <Image
                                    className= { styles.imagen }
                                    priority
                                    src="/images/un-gusto-conocerte/bebe.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    className= { styles.imagen }
                                    priority
                                    src="/images/un-gusto-conocerte/bebe.jpg"
                                    width={ 1600 }
                                    height={ 1600 }
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    className= { styles.imagen }
                                    priority
                                    src="/images/un-gusto-conocerte/bebe.jpg"
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

                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/paginas.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                    />
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/caja_abierta.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
                    />
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte/folleto_objeto.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt=""
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
