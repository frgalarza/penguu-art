import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pannel}>
        <header>
          <h1>Pengu Art ❤</h1>
          <Image/>
        </header>
      </div>
    </main>
  )
}
