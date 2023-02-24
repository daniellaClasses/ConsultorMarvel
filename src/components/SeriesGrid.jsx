import { useEffect, useState } from "react";
import { getInfo } from "../utils/httpsClient";
import { SerieCard } from "./SerieCard";
import styles from "./SeriesGrid.module.css";
import { Spinner } from "../components/Spinner";

export function SeriesGrid() {

    const [series, setSeries] = useState([]);
    const path = "/v1/public/series";

    const [isLoading, setIsLoading] = useState(true);

    //Hacemos un fecth para obtener todos las series desde la API
    useEffect(() => {
        setIsLoading(true);
        getInfo(path)
        .then((info) => {
            setSeries(info.data.results);
            // console.log(info.data.results);
            setIsLoading(false);
        })

    }, []);

    if(isLoading){
        return <Spinner />
    }

    return (
        <ul className={styles.seriesGrid}>
            {series.map((serie) => (
                <SerieCard key={serie.id} serie={serie} />
            ))}
        </ul>
    );
}