import Link from "next/link"
import styles from './ButtunBack.module.css'

export default function ButtonBack(){
    return(
        <>
            <Link href='/' className={styles.button}>Inicio</Link>
        </>
    )
}