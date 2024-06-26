import Layout from "../../components/layout";
import Image from 'next/image';
import styles from '../../styles/Fotos.module.css';
import { useState } from "react";

const array = [...Array(28)];
for (let i=0; i<28; i++){
    array[i] = i+1;
}

export default function Fotos (){

    const [imageIndex, setImageIndex] = useState(1);

    function imagenGrande(num){
        setImageIndex(num);
        document.getElementById(styles.img_grande).setAttribute("src", "/images/galeria/"+num+".jpg");
        setTimeout(() => {
            document.getElementById(styles.foto_grande).style.pointerEvents = "all";
            document.getElementById(styles.foto_grande).style.opacity = "1";
        }, 100);

    }
    
    function cierraImagen(){
        document.getElementById(styles.foto_grande).style.pointerEvents = "none";
        document.getElementById(styles.foto_grande).style.opacity = "0";
    }


    return(
        <div>
            <style jsx global>{`
            html, body {
                background-color: black;
            }
            `}</style>
            <div id={ styles.foto_grande} onClick={() => { cierraImagen() }}>
                <div id={styles.cont_grande}>
                    <Image
                        src={ `/images/galeria/${imageIndex}.jpg` } 
                        width={ 1600 }
                        height={ 1600 }
                        id={ styles.img_grande}
                        alt={`foto de la galería número ${imageIndex}`}
                    />

                </div>
            </div>
            <Layout donde="photo">
                <div id={ styles.fotos }>
                    {array.map((num) => (
                        <Image
                            key={num}
                            priority={num < 9 ? true : ""}
                            src={`/images/galeria/${num}.jpg`}
                            width={ 1600 }
                            height={ 1600 }
                            id= {`foto_${num}`}
                            className={ styles.foto }
                            data-aos="fade-up"
                            onClick={() => { imagenGrande(num) }}
                            alt={`foto de la galería número ${num}`}
                        />
                    ))}
                </div>  

            </Layout>

        </div>
    )
}