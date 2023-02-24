
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CharacterDetails.module.css";
import { getInfo } from "../utils/httpsClient";
import { Spinner } from "../components/Spinner";

export function CharacterDetails() {

    const { characterId } = useParams();
    const path = "/v1/public/characters/" + characterId;
    const [isLoading, setIsLoading] = useState(true);
    const [character, setCharacter] = useState();

    useEffect(() => {
        setIsLoading(true);
        getInfo(path)
            .then((info) => {
                // console.log(info.data.results[0]);
                setCharacter(info.data.results[0]);
                setIsLoading(false);
            })
    }, [characterId]);

    if(isLoading) {
        return <Spinner />
    }


    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.characterImage}`}
                src={ character ?
                    character.thumbnail.path + "." + character.thumbnail.extension :
                    "https://tse2.mm.bing.net/th?id=OIP.ewRndxkiKjqJ1JzpEG9p2QHaHa&pid=Api"}
                alt={character.title} />

            <div className={`${styles.col} ${styles.characterDetails}`}>
                <p>
                    <strong> Title: </strong> {character.name}
                </p>
                {/* <p>
                <strong> Format: </strong> <i> {character.format} </i>
                </p> */}
                <p>
                    <strong> Description: </strong> {character.description}
                </p>
            </div>
        </div>
    )
}