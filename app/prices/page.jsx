import Image from "next/image"
import styles from './page.module.css'

export default function Prices(){
    return <section className={styles.section}>
        <header><h1>Precios</h1></header>
        <section>
            <h3>POR UNIDAD:</h3>
            <p>Emotes: 8 $USD</p><Image width='364' height='210' alt="example" src="https://i.pinimg.com/originals/53/bb/92/53bb92f7fe69073825e2db764ed9c264.gif" />
            <p>Emotes Animados: 10 $USD <i>{'(animaciones básicas. Por ejemplo: saludo o risa)'}</i></p>
        </section>
        <section>
            <h3>PACK AFILIADO:</h3>
            <p>Contiene 5 emotes formato PNG y un emote animado formato GIF: 40 $USD</p>
        </section>
        <section>
            <h3>EMBLEMAS DE SUB</h3>
            <p>Emblemas personalizados por unidad: 7 $USD</p>
            <p>Emblemas personalizados por pack de 6: 35 $USD</p>
            <p>Pack de emblemas listos para descargar: 15 $USD</p>
        </section>
        {/* TODO boton para volver */}
    </section>
}