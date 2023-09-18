import Image from "next/image";
import Layout from "../../components/layout";
import styles from '../../styles/UGC-Marca.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function MuchaMierda(){
    return(
        <Layout donde="proyecto">
            <div id={styles.todo}>

                <div id={ styles.textos }>
                    <div id={ styles.textos_izq }>
                        <div id={ styles.titulo }>
                            <h2>MUCHA MIERDA</h2>
                        </div>
                        <div id={ styles.fecha }>
                            <p>2023</p>
                        </div>
                        <div id={ styles.mencion }>
                            <p>Premiado: <a href="https://www.adg-fad.org/es/laus/proyecto/mucha-mierda-0">ADG Laus Bronce</a></p>
                        </div>
                        <div id={ styles.informacion}>
                            <p>Tamaño: A2</p>
                            <p>Papel ecológico de 100gr</p>
                            <p>Encuadernación grapada</p>
                        </div>
                        <div id={ styles.categorias }>
                            <div className={ styles.categoria }>Dirección de arte</div>
                            <div className={ styles.categoria }>Editorial</div>
                        </div>
                    </div>
                    <div id={ styles.textos_drch }>
                        <p className={ styles.texto_drch }>La revista explora el concepto de suerte en la vida cotidiana. </p>
                        <p className={ styles.texto_drch }>Navega por diferentes temas para informar y entretener al lector, dejando paso a su subjetividad.</p>
                        <p className={ styles.texto_drch }>Equipo: Inés Oliver, Hugo Morán, Sara Zaloña y Alba Castro.</p>
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