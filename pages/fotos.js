import Layout from "../components/layout";
import Image from 'next/image';
import styles from '../styles/Fotos.module.css';

const array = [...Array(28)];
for (let i=0; i<28; i++){
    array[i] = i+1;
}

export default function Fotos (){

    function imagenGrande(num){
        console.log("foto_"+num);
        document.getElementById(styles.img_grande).setAttribute("src", "/images/galeria/"+num+".jpg");
        setTimeout(() => {
            document.getElementById(styles.foto_grande).style.pointerEvents = "all";
            document.getElementById(styles.foto_grande).style.opacity = "1";
        }, 100);

    }
    
    function cierraImagen(){
        console.log("Cerrando...");
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
                    <img
                        src={`/images/galeria/1.jpg`}
                        width={ 1600 }
                        height={ 1600 }
                        id={ styles.img_grande}
                    />
                </div>
            </div>
            <Layout donde="photo">
                <div id={ styles.fotos }>
                    {array.map((num) => (
                        <Image
                            src={`/images/galeria/${num}.jpg`}
                            width={ 1600 }
                            height={ 1600 }
                            id= {`foto_${num}`}
                            className={ styles.foto }
                            data-aos="fade-up"
                            onClick={() => { imagenGrande(num) }}
                        />
                    ))}
                </div>  

            </Layout>

        </div>
    )
}