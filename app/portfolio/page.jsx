import Image from "next/image"
import styles from './page.module.css'
import data from './data.json'
import ButtonBack from "@/Components/ButtonBack/ButtonBack"

export default function Portfolio(){
    let arrayComs = []
    for (let i = 0; i < 15; i++) {
        arrayComs.push(
            <figure className={styles.figure}  key={i}>
                <Image className={styles.divFigure} src={data.data[0].url} alt={data.data[0].name} fill sizes="{max-width: 400px}, 300px"/>
            </figure>
        )        
    }

    return <section className={styles.section}>
        <header className={styles.header}><h1>Mis Comisiones</h1></header>
        {/* {
        data.map(comission => {
            <figure className={styles.figure}>
                <Image className={styles.divFigure} src={comission.url} alt={comission.name} key={id} fill sizes="{max-width: 400px}, 300px"/>
            </figure>
        })} */}
        {arrayComs}
        <div className={styles.divBack}>
            <ButtonBack />
        </div>        
    </section>
}