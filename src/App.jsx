import { ComicsGrid } from "./ComicsGrid";
import styles from "./App.module.css";

export function App() {
    return <div>
        <header>
            <h1 className={styles.title}> COMICS </h1>
        </header>
        <main>
            <ComicsGrid />
        </main>
    </div>;
}
