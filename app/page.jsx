'use client'

import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.css'
import icono from '../public/penguu icono.png'
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { MdFace3 } from "react-icons/md";
import { useEffect, useState } from 'react';

export default function Home() {
  const [fade, setFade] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setFade(false)
    }, 150)
  }, [])

  return (
    <main className={fade ? `${styles.main} ${styles.fade}` : styles.main}>
        <header className={styles.pannel}>
          <Image className={styles.figure} src={icono} height={"300"} width={"600"} alt='penguu icon'/>
          <h2 className={styles.title}>Comisiones abiertas</h2>
          <ul className={`${styles.ul} ${styles.social}`}>
            <li className={styles.li_soc}><a className={styles.a_soc} href="https://www.tiktok.com/@penguu.art" target='_blank'><FaTiktok /></a></li>
            <li className={styles.li_soc}><a className={styles.a_soc} href="https://www.instagram.com/penguu.art/?hl=es-la" target='_blank'><FiInstagram/></a></li>
            <li className={styles.li_soc}><a className={styles.a_soc} href="https://twitter.com/penguu_art" target='_blank'><FaXTwitter/></a></li>
          </ul>
        </header>
        <div className={fade ? `${styles.content} ${styles.fade}` : styles.content}>
          <h1 className={styles.title}>Penguu Art ❤</h1>
          <ul  className={styles.ul}>
            <li className={styles.li}><Link href="/about" className={styles.button}><MdFace3 className={styles.icon}/>✦ Sobre mi ✦</Link></li>
            <li className={styles.li}><Link href="/portfolio" className={styles.button}><FaPaintBrush className={styles.icon}/>✦ Comisiones ✦</Link></li>
            <li className={styles.li}><Link href="/prices" className={styles.button}><FaSackDollar className={styles.icon}/>✦ Precios ✦</Link></li>
            <li className={styles.li}><Link href="/temrm-and-conditions" className={styles.button}><FaHandshake className={styles.icon}/>✦ Terminos y condiciones ✦</Link></li>
          </ul>
        </div>
    </main>
  )
}
