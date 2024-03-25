import Image from "next/image"
import styles from './Product.module.css'

export default function Product(props){
    const { name, img, priceUsd, priceArs, description } = props.data

    return <article className={styles.article}>
        <header className={styles.header}>
            <h3>{name}</h3>
            {img? <Image className={styles.img} src={img} width='100' height="100"/> : null}
        </header>
        <div className={styles.content}>
            <p><span className={styles.money}>USD</span>{priceUsd}</p>
            <p><span className={styles.money}>ARS</span>{priceArs}</p>
            <p>{description}</p>
        </div>
        <a href="https://ig.me/m/penguu.art" target="_blank" className={styles.link}>Lo quiero!</a>
    </article>
}

