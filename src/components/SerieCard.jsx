import { Link } from "react-router-dom";
import styles from "./SerieCard.module.css";

export function SerieCard({ serie }) {

    return (
        <li className={styles.serieCard}>
            <Link to={"/series/" + serie.id}>
                <img
                    width={280}
                    height={350}
                    className={styles.serieImage}
                    src={serie.thumbnail.path + "." + serie.thumbnail.extension}
                    alt={serie.title} />
                <div className={styles.infoCont}>
                    <p className={styles.infoTitle}>
                        {serie.title}
                    </p>
                    <p className={styles.infoDes}>
                        <strong> Description: </strong> {serie.description}
                    </p>
                </div>
            </Link>
        </li>
    );
}
