import { ComicCard } from "./ComicCard";
import comics from "./movies.json";
import styles from "./ComicsGrid.module.css";


export function ComicsGrid() {

    return (
        <ul className={styles.comicsGrid}>
            {comics.map((comic) => (
                <ComicCard key={comic.id} comic={comic} />
            ))}
        </ul>
    );
}