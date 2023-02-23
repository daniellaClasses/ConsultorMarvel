import styles from "./ComicCard.module.css";

export function ComicCard({ comic }) {
    console.log(styles);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + comic.poster_path;
    return (
        <li className={styles.comicCard}>
            <img
            width={230}
            height={345}
            className={styles.comicImage}
            src={imageUrl}
            alt={comic.title} />
            <div>{comic.title} </div>
        </li>
    );
}