import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Meneo.module.css';
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
                    <Image 
                        className= { styles.imagen }
                        priority
                        src="/images/home/home_6.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <Image 
                        className= { styles.imagen }
                        priority
                        src="/images/meneo/etiquetas.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <div id={styles.tote_botella}>
                        <div>
                            <Image 
                                className= { styles.imagen }
                                priority
                                src="/images/meneo/mano_botella.jpg"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                            />
                        </div>
                        <div>
                            <Image
                                className= { styles.imagen }
                                priority
                                src="/images/meneo/etiqueta_zoom.jpg"
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