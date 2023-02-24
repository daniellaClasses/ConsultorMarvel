import { useEffect, useState } from "react";
import { getInfo } from "../utils/httpsClient";
import { ComicCard } from "./ComicCard";
// import comics from "./movies.json";
import styles from "./ComicsGrid.module.css";



export function ComicsGrid() {


    const [comics, setComics] = useState([]);
    const path = "/v1/public/comics";

    //Hacemos un fecth para obtener todos los comics desde la API
    useEffect(() => {
        getInfo(path)
        .then((info) => {
            setComics(info.data.results);
            // console.log(info.data.results);
        })

    }, []);

    return (
        <ul className={styles.comicsGrid}>
            {comics.map((comic) => (
                <ComicCard key={comic.id} comic={comic} />
            ))}
        </ul>
    );
}