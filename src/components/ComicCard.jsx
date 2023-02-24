import { Link } from "react-router-dom";
import styles from "./ComicCard.module.css";
// import { useEffect } from "react";
// import { getSubStr } from "../utils/subStr";

export function ComicCard({ comic }) {

    // const fullDescription = (comic.description).toString(); //intentar forzar función - NO
    // const description = fullDescription.substring(0,50);

    // const description = getSubStr(comic.description);

    return (
        <li className={styles.comicCard}>
            <Link to={"/comics/" + comic.id}>
                <img
                    width={250}
                    height={350}
                    className={styles.comicImage}
                    src={comic.images.length > 0 ?
                        comic.images[0].path + "." + comic.images[0].extension :
                        "https://tse2.mm.bing.net/th?id=OIP.ewRndxkiKjqJ1JzpEG9p2QHaHa&pid=Api"}
                    alt={comic.title} />
                <div className={styles.infoCont}>
                    <p className={styles.infoTitle}>
                        {comic.title}
                    </p>
                    <p className={styles.infoDes}>
                        <strong> Description: </strong> {comic.description}
                    </p>
                </div>
            </Link>
        </li>
    );
}
