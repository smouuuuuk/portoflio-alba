import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/About.module.css"

export default function About(){
    return(
        <Layout donde="about">
            <div id={ styles.todo }>
                <Image
                    priority
                    src="/images/alba.jpg"
                    width={ 600 }
                    height={ 600 }
                    alt="Alba"
                />
                <div id={ styles.presentacion }>
                    <div>
                        <p>¡Hola! Encantada de conocerte</p>
                        <p>Me llamo Alba (22) y soy una Diseñadora Gráfica e Ilustradora asturiana actualmente viviendo en Madrid.</p>
                    </div>
                </div>
                <div id={ styles.datos }>
                    <div className={ styles.seccion_datos }>
                        <h2>CONTACT</h2>
                        <a href="mailto:albacastrog@gmail.com">Email</a>
                        <a href="https://instagram.com/albis_cg" target="_blank">Instagram</a>
                        <a href="https://linkedin.com/in/alba-castro-garcía-25169120a/" target="_blank">Linkedin</a>
                    </div>
                    <div className={ styles.seccion_datos }>
                        <h2>EXPERIENCE</h2>
                        <p>TheWokis</p>
                        <p>Internship (nov. 2021 - feb. 2022)</p>
                    </div>
                    <div className={ styles.seccion_datos }>
                        <h2>EDUCATION</h2>
                        <p>UDIT - ESNE</p>
                        <p>Grado en Diseño Multimedia y Gráfico</p>
                        <p>(2019-2023)</p>
                    </div>
                    <div className={ styles.seccion_datos }>
                        <h2>AWARDS</h2>
                        <a href="https://www.adg-fad.org/es/laus/proyecto/mucha-mierda-0" target="_blank">ADG Laus Bronce, 2023</a>
                        <a href="https://drive.google.com/file/d/1GaPmNoYKAeOYOL1w2wlrfLFMuWwHIoou/view" target="_blank">Winner CataLaLata</a>
                        <p>ANFACO-Fundación Banco Sabadell, 2023</p>
                        <a href="https://www.oneclub.org/awards/youngones/-award/46754/blood-calls-to-blood" target="_blank">Young Ones Students Awards, Plata, 2023</a>
                        <a href="https://www.oneclub.org/awards/youngones/-award/46755/this-is-a-library" target="_blank">Young Ones Students Awards, Merit, 2023</a>
                    </div>
                    <div className={ styles.seccion_datos }>
                        <h2>PRESS/FEATURES</h2>
                        <a href="https://www.ivoox.com/ser-occidente-castropol-barres-premio-nacional-packaging-asociacion-audios-mp3_rf_112228507_1.html" target="_blank">Entrevista Radio SER</a>
                        <a href="https://www.fundacionbancosabadell.com/alba-castro-ganadora-del-v-premio-de-diseno-anfaco/" target="_blank">Fundación Banco Sabadell</a>
                        <a href="https://www.lavozdegalicia.es/noticia/sociedad/2023/06/30/alba-castro-ganadora-v-premio-diseno-anfaco-fundacion-banco-sabadell/00031688120090515387871.htm" target="_blank">La Voz de Galicia</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}