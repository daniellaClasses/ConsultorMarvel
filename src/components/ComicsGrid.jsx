import { useEffect, useState } from "react";
import { getInfo } from "../utils/httpsClient";
import { ComicCard } from "./ComicCard";
import styles from "./ComicsGrid.module.css";
import { Spinner } from "../components/Spinner";

export function ComicsGrid() {

    const [comics, setComics] = useState([]);
    const path = "/v1/public/comics";

    const [isLoading, setIsLoading] = useState(true);

    //Hacemos un fecth para obtener todos los comics desde la API
    useEffect(() => {
        setIsLoading(true);
        getInfo(path)
        .then((info) => {
            setComics(info.data.results);
            // console.log(info.data.results);
            setIsLoading(false);
        })

    }, []);

    if(isLoading){
        return <Spinner />
    }

    return (
        <ul className={styles.comicsGrid}>
            {comics.map((comic) => (
                <ComicCard key={comic.id} comic={comic} />
            ))}
        </ul>
    );
}