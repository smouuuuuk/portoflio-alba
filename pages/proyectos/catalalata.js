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
                        <div>
                            <p>CATA LA LATA WINNER</p>
                            <p>ANFACO-Fundación Banco Sabadell</p>
                            <p>2023</p>
                        </div>
                        <div>
                            <p>Packaging</p>
                            <p>Illustration</p>
                        </div>
                    </div>
                    <div id={ styles.textos_drch }>
                        <p>Donec sed tincidunt orci. Quisque maximus tempus ligula, et tristique massa feugiat ut. Curabitur volutpat orci sed nisl aliquam mollis. Etiam at eros nisl. Phasellus lectus urna, facilisis at est vitae, pellentesque dignissim magna. Quisque ut lacus lorem. Suspendisse facilisis, est rhoncus elementum pharetra, magna purus fermentum tellus, ac volutpat lacus dolor ut elit. Vestibulum ac bibendum erat, id dictum ligula. Vestibulum elementum, sapien a imperdiet lobortis, magna urna viverra ligula, et maximus metus odio et massa. Suspendisse aliquam eu risus nec varius. Morbi id dolor vitae sem accumsan sollicitudin in in nunc. Proin eget urna non eros viverra sodales sed quis lectus. Vestibulum quis mattis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc mattis, sapien at interdum rutrum, odio lectus consectetur odio, ac lobortis tortor nibh eget leo.</p>
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
