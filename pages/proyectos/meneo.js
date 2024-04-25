import Layout from "../../components/layout";
import Image from "next/image";
import styles from '../../styles/Micenico.module.css';
import textStyles from '../../styles/Textos.module.css';
import imgTodoStyles from '../../styles/TodoImgs.module.css';


export default function Micenico(){
    return(
        <Layout donde="proyecto">
             <div id={imgTodoStyles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>MICÉNICO</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2024</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>Client: El Griego</p>
                            <p>3D: Rodrigo Salas</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Dirección creativa</div>
                            <div className={ textStyles.categoria }>Conceptualización</div>
                            <div className={ textStyles.categoria }>Animación</div>
                            <div className={ textStyles.categoria }>Branding</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }>Branding and design of the new album of the emerging artist ‘El Griego’. A personal brand was created for the artist, taking references to Ancient Greece as a conceptual axis.  An object from Greek mythology was associated with each of the 9 song’s covers that make up the album, taking into account the storytelling of each of them.</p>
                        <p className={ textStyles.texto_drch }> The challenge consisted in bringing all that antiquity to a contemporary panorama. To do so, we had a 3D artist who developed the different objects with a language that moves between luxury and extravagance.</p>
                    </div>
                </div>

                <div id={ imgTodoStyles.imagenes }>
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority={true}
                        src="/images/home/home_6.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <Image 
                        className= { imgTodoStyles.imagen }
                        priority
                        src="/images/meneo/etiquetas.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                        data-aos="fade-up"
                    />
                    <div id={styles.tote_botella}>
                        <div>
                            <Image
                                data-aos="fade-right"
                                className= { imgTodoStyles.imagen }
                                priority
                                src="/images/meneo/mano_botella.jpg"
                                width={ 1600 }
                                height={ 1600 }
                                alt="Todos los estuches de conservas"
                            />
                        </div>
                        <div>
                            <Image
                                data-aos="fade-left"
                                className= { imgTodoStyles.imagen }
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