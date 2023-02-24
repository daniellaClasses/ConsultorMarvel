import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.css";

export function CharacterCard({ character }) {
    return (
        <li className={styles.characterCard}>
            <Link to={"/characters/" + character.id}>
                <img
                    width={250}
                    height={250}
                    className={styles.characterImage}
                    src={character.thumbnail.path + "." + character.thumbnail.extension}
                    alt={character.name} />
                <div className={styles.infoCont}>
                    <p className={styles.infoTitle}>
                        {character.name}
                    </p>
                    <p className={styles.infoDes}>
                        <strong> Description: </strong> {character.description}
                    </p>
                </div>
            </Link>
        </li>
    );
}
