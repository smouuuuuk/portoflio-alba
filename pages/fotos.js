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
            document.getElementById(styles.foto_grande).style.display = "grid";
        }, 1);
        setTimeout(() => {
            document.getElementById(styles.foto_grande).style.opacity = "1";
        }, 10);

    }
    
    function cierraImagen(){
        console.log("Cerrando...");
        document.getElementById(styles.foto_grande).style.opacity = "0";
        setTimeout(() => {
            document.getElementById(styles.foto_grande).style.display = "none";
        }, 1000);
    }

    return(
        <div>
            <style jsx global>{`
            html, body {
                background-color: black;
            }
            `}</style>
            <div id={ styles.foto_grande}>
                <div id={styles.cont_grande}>
                    <img
                        src={`/images/galeria/1.jpg`}
                        width={ 1600 }
                        height={ 1600 }
                        id={ styles.img_grande}
                        onClick={() => { cierraImagen() }}
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