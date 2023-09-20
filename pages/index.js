import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Proyecto from '../components/proyecto';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Layout donde="work">
        <div id={ styles.proyectos }>
          <Proyecto props={{ href:"/proyectos/un-gusto-conocerte", src:"/images/home/home_1.jpg", alt:"Un Gusto Conocerte Libro" }}></Proyecto>
          {/* <Proyecto props={{ href:"/proyectos/un-gusto-conocerte-identidad", src:"/videos/logo.mp4", alt:"Un Gusto Conocerte Marca" }}></Proyecto> */}
          <Link href="/proyectos/un-gusto-conocerte-marca" data-aos="fade-up">
            <video id={ styles.videougc} width="1600" autoPlay={true} loop={true} muted={true} playsInline={true} style={{ borderRadius:"35px" }}><source src="/images/home/home_2.mp4" type="video/mp4"/></video>
          </Link>
          <Proyecto props={{ href:"/proyectos/mucha-mierda", src:"/images/home/home_3.jpg", alt:"Mucha Mierda" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/catalalata", src:"/images/home/home_4.jpg", alt:"Catalalata" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/fos", src:"/images/home/home_5.jpg", alt:"Fos" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/meneo", src:"/images/home/home_6.jpg", alt:"Meneo" }}></Proyecto>
        </div>
      </Layout>
    </div>
  )
}
