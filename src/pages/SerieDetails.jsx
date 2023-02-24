import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./SerieDetails.module.css";
import { getInfo } from "../utils/httpsClient";
import { Spinner } from "../components/Spinner";

export function SerieDetails() {

    const { serieId } = useParams();
    const path = "/v1/public/series/" + serieId;
    const [isLoading, setIsLoading] = useState(true);
    const [serie, setSerie] = useState();

    useEffect(() => {
        setIsLoading(true);
        getInfo(path)
            .then((info) => {
                // console.log(info.data.results[0]);
                setSerie(info.data.results[0]);
                setIsLoading(false);
            })
    }, [serieId]);

    if(isLoading) {
        return <Spinner />
    }


    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.serieImage}`}
                src={serie.thumbnail.path + "." + serie.thumbnail.extension}
                alt={serie.title} />

            <div className={`${styles.col} ${styles.serieDetails}`}>
                <p>
                    <strong> Title: </strong> {serie.title}
                </p>
                <p>
                <strong> Rating: </strong> <i> {serie.rating} </i>
                </p>
                <p>
                    <strong> Description: </strong> {serie.description}
                </p>
            </div>
        </div>
    )
}