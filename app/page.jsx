import Image from 'next/image'
import styles from './page.module.css'
import icono from '../public/penguu icono.png'
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className={styles.main}>
        <header className={styles.pannel}>
          <Image className={styles.figure} src={icono} height={"300"} width={"600"} alt='penguu icon'/>
          <h2 className={styles.title}>Comisiones abiertas</h2>
          <ul className={`${styles.ul} ${styles.social}`}>
            <li><a href="https://www.tiktok.com/@penguu.art" target='_blank'><FaTiktok /></a></li>
            <li><a href="https://www.instagram.com/penguu.art/?hl=es-la" target='_blank'><FiInstagram/></a></li>
            <li><a href="https://twitter.com/penguu_art" target='_blank'><FaXTwitter/></a></li>
          </ul>
        </header>
        <div className={styles.content}>
          <h1 className={styles.title}>Penguu Art ❤</h1>
          <ul  className={styles.ul}>
            <li className={styles.li}><button className={styles.button}>Sobre mi</button></li>
            <li className={styles.li}><button className={styles.button}>Mis trabajos</button></li>
            <li className={styles.li}><button className={styles.button}>Precios</button></li>
            <li className={styles.li}><button className={styles.button}>Terminos y condiciones</button></li>
          </ul>
        </div>
    </main>
  )
}
