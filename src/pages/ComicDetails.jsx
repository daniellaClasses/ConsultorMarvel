import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ComicDetails.module.css";
import { getInfo } from "../utils/httpsClient";

export function ComicDetails() {

    const { comicId } = useParams();
    const path = "/v1/public/comics/" + comicId;
    const [comic, setComic] = useState();

    useEffect(() => {
        getInfo(path)
            .then((info) => {
                console.log(info);
                console.log(info.data.results[0]);
                setComic(info.data.results[0]);
            })
    }, [comicId]);

    if (!comic) {
        return null;
    }


    // const imageUrl = "https://image.tmdb.org/t/p/w500" + comic.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.comicImage}`}
                // src={imageUrl}
                // src={console.log(comic.description)}
                src={ comic ?
                    comic.thumbnail.path + "." + comic.thumbnail.extension :
                    "https://tse2.mm.bing.net/th?id=OIP.ewRndxkiKjqJ1JzpEG9p2QHaHa&pid=Api"}
                alt={comic.title} />

            <div className={`${styles.col} ${styles.comicDetails}`}>
                <p>
                    <strong> Title: </strong> {comic.title}
                </p>
                <p>
                    <strong> Description: </strong> {comic.description}
                </p>
            </div>
        </div>
    )
}