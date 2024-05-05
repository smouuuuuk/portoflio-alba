import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';
import Proyecto from '../../components/proyecto';
import Link from '../../components/Link';

import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'next-i18next'

export default function Home() {

  const { t } = useTranslation();
  
  return (
    <div className={ styles.container }>
      <Layout donde="work">
        <div id={ styles.proyectos }>
          <Proyecto props={{ href:"/proyectos/un-gusto-conocerte", src:"/images/home/1.jpg", alt:"Un Gusto Conocerte Libro" }}></Proyecto>
          {/* <Proyecto props={{ href:"/proyectos/un-gusto-conocerte-identidad", src:"/videos/logo.mp4", alt:"Un Gusto Conocerte Marca" }}></Proyecto> */}
          <Link href="/proyectos/un-gusto-conocerte-marca" data-aos="fade-up" id={ styles.contUGCVideo }>
            <video hoverable="true" id={ styles.videougc} width="1400" autoPlay={true} loop={true} muted={true} playsInline={true}><source src="/images/home/home_2.mp4" type="video/mp4"/></video>
          </Link>
          <Proyecto props={{ href:"/proyectos/mucha-mierda", src:"/images/home/3.jpg", alt:"Mucha Mierda" }}></Proyecto>
          <Link href="/proyectos/el-griego" data-aos="fade-up" id={ styles.contEGVideo }>
            <video hoverable="true" id={ styles.videougc} width="1400" autoPlay={true} loop={true} muted={true} playsInline={true}><source src="/images/home/elgriego_home.mp4" type="video/mp4"/></video>
          </Link>
          {/* <Proyecto props={{ href:"/proyectos/micenico", src:"/images/home/4.jpg", alt:"Micénico" }}></Proyecto> */}
          <Proyecto props={{ href:"/proyectos/catalalata", src:"/images/home/5.jpg", alt:"Catalalata" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/fos", src:"/images/home/6.jpg", alt:"Fos" }}></Proyecto>
        </div>
      </Layout>
    </div>
  )
}

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
