import Image from 'next/image'
import styles from './page.module.css'
import icono from '../public/penguu icono.png'

export default function Home() {
  return (
    <main className={styles.main}>
        <header className={styles.pannel}>
          <h1 className={styles.title}>Penguu Art ❤</h1>
          <Image src={icono} height={"200"} width={"400"} alt='penguu icon'/>
          <h2 className={styles.subTitle}>Comisiones abiertas</h2>
        </header>
        <div className={styles.lists}>
          <ul  className={styles.ul}>
            <li><button className={styles.button}>Sobre mi</button></li>
            <li><button className={styles.button}>Mis trabajos</button></li>
            <li><button className={styles.button}>Precios</button></li>
            <li><button className={styles.button}>Terminos y condiciones</button></li>
          </ul>
          <ul className={styles.ul}>
            <li><a href="">TikTok</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Twitter</a></li>
          </ul>
        </div>
    </main>
  )
}
