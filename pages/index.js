import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Proyecto from '../components/proyecto';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Layout donde="work">
        <div id={ styles.proyectos }>
          <Proyecto props={{ href:"/proyectos/un-gusto-conocerte", src:"/images/un-gusto-conocerte/un-gusto-conocerte.jpg", alt:"Un Gusto Conocerte Libro" }}></Proyecto>
          {/* <Proyecto props={{ href:"/proyectos/un-gusto-conocerte-identidad", src:"/videos/logo.mp4", alt:"Un Gusto Conocerte Marca" }}></Proyecto> */}
          <Link href="/proyectos/un-gusto-conocerte-marca" data-aos="fade-up">
            <video id={ styles.videougc} width="1600" autoPlay={true} loop={true} muted={true} webkit-playsinline={true} playsinline={true} style={{ borderRadius:"35px" }}><source src="/images/un-gusto-conocerte-marca/logo.mp4" type="video/mp4"/></video>
          </Link>
          <Proyecto props={{ href:"/proyectos/mucha-mierda", src:"/images/mucha-mierda/mucha-mierda.jpg", alt:"Mucha Mierda" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/catalalata", src:"/images/catalalata/todas.jpg", alt:"Catalalata" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/fos", src:"/images/fos/fos.jpg", alt:"Fos" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/meneo", src:"/images/meneo/meneo.jpg", alt:"Meneo" }}></Proyecto>
        </div>
      </Layout>
    </div>
  )
}
