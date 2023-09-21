import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Fos.module.css';
import textStyles from '../../styles/Textos.module.css';
import imgTodoStyles from '../../styles/TodoImgs.module.css';


export default function Fos(){
    return(
        <Layout donde="proyecto">
            <div id={imgTodoStyles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>FOS ESTUDIO ®</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2022</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>Cliente: Fos Estudio</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Identidad visual</div>
                            <div className={ textStyles.categoria }>Papelería</div>
                            <div className={ textStyles.categoria }>Animación de logotipo</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }>Creación de la identidad visual para Fos Estudio ®, un proyecto de interiorismo y diseño llevado a cabo por Irina Ivanova enfocado a traducir la luz, los interiores y la simbiosis entre ambos mundos.</p>
                    </div>
                </div>

                <div id={ imgTodoStyles.imagenes }>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/home/home_5.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <div id={styles.lamp_tarj}>
                        <div>
                            <Image 
                                className= { imgTodoStyles.imagen }
                                priority
                                src="/images/fos/fos_1.jfif"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                            />
                        </div>
                        <div>
                            <Image
                                className= { imgTodoStyles.imagen }
                                priority
                                src="/images/fos/tarjetas.jpg"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                                />
                        </div>
                    </div>
                    <video id={ styles.videougc } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius:"35px" }}><source src="/images/fos/animacion_logo.mp4" type="video/mp4"/></video>
                </div>

            </div>
        </Layout>
    )
}