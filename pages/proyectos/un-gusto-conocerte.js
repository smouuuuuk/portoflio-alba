import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Layout from '../../components/layout';
import Proyecto from '../../components/proyecto';

export default function Home() {
  return (
    <div>
      <Layout donde="photo">
        <Head>
          <title>Alba Castro</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Proyecto props={{ href:"/proyectos/un-gusto-conocerte", src:"/images/un-gusto-conocerte.jpg", alt:"Un Gusto Conocerte Libro" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/un-gusto-conocerte-identidad", src:"/images/un-gusto-conocerte-identidad.jpg", alt:"Un Gusto Conocerte Marca" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/mucha-mierda", src:"/images/mucha-mierda.jpg", alt:"Mucha Mierda" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/catalalata", src:"/images/catalalata.jpg", alt:"Catalalata" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/fos", src:"/images/fos.jpg", alt:"Fos" }}></Proyecto>
          <Proyecto props={{ href:"/proyectos/meneo", src:"/images/meneo.jpg", alt:"Meneo" }}></Proyecto>
        </div>
      </Layout>
    </div>
  )
}
