import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Catalalata.module.css';
import textStyles from '../../styles/Textos.module.css';


export default function Meneo(){
    return(
        <Layout donde="proyecto">
             <div id={styles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>MENEO</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2020</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>Proyecto universitario</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Identidad visual</div>
                            <div className={ textStyles.categoria }>Packaging</div>
                            <div className={ textStyles.categoria }>Ilustración</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }>Meneo, es una propuesta de vinos para gente joven. Apuesta por una imagen diferente a los vinos convencionales con el objetivo de posicionarlo como competidor de las cañas o el vermut.</p>
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