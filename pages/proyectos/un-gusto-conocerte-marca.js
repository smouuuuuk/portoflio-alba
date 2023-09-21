import Image from "next/image";
import Layout from "../../components/layout";
import styles from '../../styles/UGC-Marca.module.css';
import textStyles from '../../styles/Textos.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function UnGustoConocerteMarca() {
    return(
        <Layout donde="proyecto">
            <div id={styles.todo}>

                <div id={ textStyles.textos }>
                    <div id={ textStyles.textos_izq }>
                        <div id={ textStyles.titulo }>
                            <h2>UN GUSTO CONOCERTE</h2>
                        </div>
                        <div id={ textStyles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ textStyles.mencion }>
                            <p>Trabajo Fin de Grado</p>
                        </div>
                        <div id={ textStyles.categorias }>
                            <div className={ textStyles.categoria }>Brand guidelines</div>
                            <div className={ textStyles.categoria }>Dirección de arte</div>
                            <div className={ textStyles.categoria }>Motion graphics</div>
                            <div className={ textStyles.categoria }>Ilustración</div>
                        </div>
                    </div>
                    <div id={ textStyles.textos_drch }>
                        <p className={ textStyles.texto_drch }>“Un gusto conocerte” es una iniciativa sin ánimo de lucro que surge con el objetivo de eliminar todos aquellos estigmas presentes en la sociedad hacia las personas con síndrome de Down, a través de los aspectos que les hacen singulares más allá de la etiqueta diagnóstica.</p>
                        <p className={ textStyles.texto_drch }>Se dirige principalmente a las personas con síndrome de Down por loque se busca que toda su imagen y aplicaciones sean lo más claras yaccesibles posible. Para ello, se crea una marca cercana y amigable atendiendo a las directrices de la Lectura Fácil. Partimos de un namingdirecto, autoexplicativo y notorio, creando un universo visual que gira en torno a la mano comoelemento representativo del momento de conocer a alguien.</p>
                        <a href="">VER PRODUCTO</a> 
                    </div>
                </div>

                <div id={ styles.imagenes }>
                    <video id={ styles.videougc } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius:"35px" }}><source src="/images/home/home_2.mp4" type="video/mp4"/></video>
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/colores.svg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
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
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/camiseta.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/manual.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/libro+marcapaginas.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <Image
                        className= { styles.imagen }
                        priority
                        src="/images/un-gusto-conocerte-marca/instagram_feed.jpg"
                        width={ 1600 }
                        height={ 1600 }
                        alt="Todos los estuches de conservas"
                    />
                    <video id={ styles.videougc } width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius:"35px" }}><source src="/images/un-gusto-conocerte-marca/rrss_video.mp4" type="video/mp4"/></video>

                </div>

            </div>
        </Layout>
    )
}