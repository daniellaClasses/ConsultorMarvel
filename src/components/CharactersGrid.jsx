import { useEffect, useState } from "react";
import { getInfo } from "../utils/httpsClient";
import { CharacterCard } from "./CharacterCard";
import styles from "./CharactersGrid.module.css";
import { Spinner } from "../components/Spinner";

export function CharactersGrid() {


    const [characters, setCharacters] = useState([]);
    const path = "/v1/public/characters";

    const [isLoading, setIsLoading] = useState(true);

    //Hacemos un fecth para obtener todos los personajes desde la API
    useEffect(() => {
        setIsLoading(true);
        getInfo(path)
        .then((info) => {
            setCharacters(info.data.results);
            console.log(info.data.results);
            setIsLoading(false);
        })

    }, []);

    if(isLoading){
        return <Spinner />
    }

    return (
        <ul className={styles.charactersGrid}>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </ul>
    );
}