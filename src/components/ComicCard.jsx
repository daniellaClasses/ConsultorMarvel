import { Link } from "react-router-dom";
import styles from "./ComicCard.module.css";

export function ComicCard({ comic }) {
    // console.log(styles);


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
                <div>
                    <p>
                        {comic.title}
                    </p>
                    <p>
                        <strong> Description: </strong> {comic.description}
                    </p>
                </div>
                {/*  -> Añadir un p para meter las descripciones, revisar la API */}
            </Link>
        </li>
    );
}
