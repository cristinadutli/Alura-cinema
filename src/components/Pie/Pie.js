import styles from "./Pie.module.css"
import logo from "./logo-alura.png"

function Pie(){
    return(
        <footer className={styles.pie}>
            <h2>Desarrollado por  <img src={logo}/></h2>
        </footer>
    )
}

export default Pie