import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ComicDetails.module.css";
import { getInfo } from "../utils/httpsClient";
import { Spinner } from "../components/Spinner";

export function ComicDetails() {

    const { comicId } = useParams();
    const path = "/v1/public/comics/" + comicId;
    const [isLoading, setIsLoading] = useState(true);
    const [comic, setComic] = useState();

    useEffect(() => {
        setIsLoading(true);
        getInfo(path)
            .then((info) => {
                // console.log(info.data.results[0]);
                setComic(info.data.results[0]);
                setIsLoading(false);
            })
    }, [comicId]);

    if(isLoading) {
        return <Spinner />
    }


    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.comicImage}`}
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt={comic.title} />

            <div className={`${styles.col} ${styles.comicDetails}`}>
                <p>
                    <strong> Title: </strong> {comic.title}
                </p>
                <p>
                <strong> Format: </strong> <i> {comic.format} </i>
                </p>
                <p>
                    <strong> Description: </strong> {comic.description}
                </p>
            </div>
        </div>
    )
}