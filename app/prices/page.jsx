import styles from './page.module.css'
import Product from "./Product"
import data from './data.json'
import ButtonBack from '@/Components/ButtonBack/ButtonBack'

export default function Prices(){
    const priceUnit = data.unit
    const pricePacks = data.packs
    const priceEmblems = data.emblems

    return <section className={styles.section}>
        <header><h1 className={styles.title}>Precios</h1></header>
        <section className={styles.sectionPrice}>
            <div className={styles.subtitle}>
                <h3>POR UNIDAD</h3>
            </div>
            
            {/* <p>Emotes: 8 $USD</p>
            <p>Emotes Animados: 10 $USD <i>{'(animaciones básicas. Por ejemplo: saludo o risa)'}</i></p> */}
            {priceUnit.map((prod, i)=>{
                return (
                    <Product data={prod} key={i}/>
                )
            })}
        </section>
        <section className={styles.sectionPrice}>
        <div className={styles.subtitle}>
                <h3>PACKS</h3>
            </div>
            {
                pricePacks.map((prod, i) => {
                    return(
                        <Product data={prod} key={i}/>
                    )
                })
            }
        </section>
        <section className={styles.sectionPrice}>
        <div className={styles.subtitle}>
                <h3>EMBLEMAS</h3>
        </div>
            {
                priceEmblems.map((prod, i) => {
                    return(
                        <Product data={prod} key={i}/>
                    )
                })
            }
        </section>
        {/* TODO boton para volver */}
        <div className={styles.divBack}>
            <ButtonBack />
        </div>     
    </section>
}