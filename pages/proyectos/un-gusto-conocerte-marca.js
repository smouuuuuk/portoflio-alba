import Image from "next/image";
import Layout from "../../components/layout";
import styles from '../../styles/UGC-Marca.module.css';
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function UnGustoConocerteMarca() {
    return(
        <Layout donde="proyecto">
            <div id={styles.todo}>

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