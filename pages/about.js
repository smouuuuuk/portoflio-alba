import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/About.module.css"
import Draggable, {DraggableCore} from "react-draggable";
import { useEffect } from "react";

export default function About(){

    return(
        <Layout donde="about" >
                <Draggable className={ styles.drag } defaultPosition={{x: 725, y: 225}} bounds="parent">
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
                <Draggable className={ styles.drag } defaultPosition={{x: 225, y:425}} bounds="parent">
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
                            <p>¡Hola! Encantada de conocerte.</p>
                            <p>Me llamo Alba (22) y soy una Diseñadora Gráfica e Ilustradora asturiana actualmente viviendo en Madrid.</p>
                            <p>Me inspiran muchas cosas,  pero especialmente: mi tío René, mis raíces, las personas y cómo se comportan.</p>
                            <p>Me gusta explorar temas cotidianos para transformar problemas o cuestiones sociales a través del diseño. Busco llevar mi trabajo más allá de lo estético, a través de la sensibilidad, transmitir y provocar emociones.</p>
                        </div>
                    </div>
                    <div id={ styles.datos }>
                        <div className={ styles.seccion_datos } id={ styles.contacto }>
                            <h2>CONTACTO</h2>
                            <div>
                                <a hoverable="true" href="mailto:albacastrog@gmail.com">Email</a><p>&nbsp;- albacastrog@gmail.com</p>
                            </div>
                            <div>
                                <a hoverable="true" href="https://instagram.com/albis_cg" target="_blank">Instagram</a><p>&nbsp;- @albis_cg</p>
                            </div>
                            <div>
                                <a hoverable="true" href="https://linkedin.com/in/alba-castro-garcía-25169120a/" target="_blank">Linkedin</a><p>&nbsp;- Alba Castro</p>
                            </div>
                        </div>
                        <div className={ styles.seccion_datos } id={ styles.experiencia }>
                            <h2>EXPERIENCIA</h2>
                            <p>TheWokis</p>
                            <p>Internship (nov. 2021 - feb. 2022)</p>
                        </div>
                        <div className={ styles.seccion_datos } id={ styles.formacion }>
                            <h2>FORMACIÓN</h2>
                            <p>UDIT - ESNE</p>
                            <p>Grado en Diseño Multimedia y Gráfico</p>
                            <p>(2019-2023)</p>
                        </div>
                        <div className={ styles.seccion_datos } id={ styles.premios }>
                            <h2>PREMIOS</h2>
                            <a hoverable="true" href="https://www.adg-fad.org/es/laus/proyecto/mucha-mierda-0" target="_blank">ADG Laus Bronce, 2023</a>
                            <a hoverable="true" href="https://drive.google.com/file/d/1GaPmNoYKAeOYOL1w2wlrfLFMuWwHIoou/view" target="_blank">Winner CataLaLata</a>
                            <a hoverable="true" href="https://drive.google.com/file/d/1GaPmNoYKAeOYOL1w2wlrfLFMuWwHIoou/view" target="_blank">ANFACO-Fundación Banco Sabadell, 2023</a>
                            <a hoverable="true" href="https://www.oneclub.org/awards/youngones/-award/46754/blood-calls-to-blood" target="_blank">Young Ones Students Awards, Plata, 2023</a>
                            <a hoverable="true" href="https://www.oneclub.org/awards/youngones/-award/46755/this-is-a-library" target="_blank">Young Ones Students Awards, Merit, 2023</a>
                        </div>
                        <div className={ styles.seccion_datos } id={ styles.prensa }>
                            <h2>PRENSA</h2>
                            <a hoverable="true" href="https://www.ivoox.com/ser-occidente-castropol-barres-premio-nacional-packaging-asociacion-audios-mp3_rf_112228507_1.html" target="_blank">Entrevista Radio SER</a>
                            <a hoverable="true" href="https://www.fundacionbancosabadell.com/alba-castro-ganadora-del-v-premio-de-diseno-anfaco/" target="_blank">Fundación Banco Sabadell</a>
                            <a hoverable="true" href="https://www.lavozdegalicia.es/noticia/sociedad/2023/06/30/alba-castro-ganadora-v-premio-diseno-anfaco-fundacion-banco-sabadell/00031688120090515387871.htm" target="_blank">La Voz de Galicia</a>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}