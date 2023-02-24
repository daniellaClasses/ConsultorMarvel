import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
    return (
        <div className={styles.headerCont}>
            <Link to="/"> <h1 className={styles.title}> MARVEL </h1> </Link>
            <Link to="/comics"> <h3> COMICS </h3> </Link>
            <Link to="/characters"> <h3> CHARACTERS </h3> </Link>
            <Link to="/series"> <h3> SERIES </h3> </Link>
            
        </div>
    )
}
