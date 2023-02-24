import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
    return (
        <div className={styles.headerCont}>
            <Link to="/"> <h1 className={styles.title}> MARVEL </h1> </Link>
            <div className={styles.navCont}>
                {/* Navegación */}
                <Link to="/comics"> <h3 className={styles.comicLink}> COMICS </h3> </Link>
                <Link to="/characters"> <h3 className={styles.characterLink}> CHARACTERS </h3> </Link>
                <Link to="/series"> <h3 className={styles.seriesLink}> SERIES </h3> </Link>
            </div>
        </div>
    )
}
