import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Catalalata.module.css';


export default function Meneo(){
    return(
        <Layout donde="proyecto">
             <div id={styles.todo}>

                <div id={ styles.textos }>
                    <div id={ styles.textos_izq }>
                        <div id={ styles.titulo }>
                            <h2>MENEO</h2>
                        </div>
                        <div id={ styles.fecha }>
                            <p>2020</p>
                        </div>
                        <div id={ styles.mencion }>
                            <p>Proyecto universitario</p>
                        </div>
                        <div id={ styles.categorias }>
                            <div className={ styles.categoria }>Identidad visual</div>
                            <div className={ styles.categoria }>Packaging</div>
                            <div className={ styles.categoria }>Ilustración</div>
                        </div>
                    </div>
                    <div id={ styles.textos_drch }>
                        <p className={ styles.texto_drch }>Meneo, es una propuesta de vinos para gente joven. Apuesta por una imagen diferente a los vinos convencionales con el objetivo de posicionarlo como competidor de las cañas o el vermut.</p>
                    </div>
                </div>

                <div id={ styles.imagenes }>
                    <video id={ styles.videougc } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius:"35px" }}><source src="/images/un-gusto-conocerte-marca/logo.mp4" type="video/mp4"/></video>
                    <div id={styles.tote_gif}>
                        <div>
                            <Image 
                                className= { styles.imagen }
                                priority
                                src="/images/un-gusto-conocerte-marca/tote-1.jpg"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                            />
                        </div>
                        <div>
                            <Image
                                className= { styles.imagen }
                                priority
                                src="/images/un-gusto-conocerte-marca/manos.gif"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                                />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}