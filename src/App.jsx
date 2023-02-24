import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { ComicsGrid } from "./components/ComicsGrid";
import { ComicDetails } from "./pages/ComicDetails";
import { CharactersGrid } from "./components/CharactersGrid";
import { CharacterDetails } from "./pages/CharacterDetails";
import { SeriesGrid } from "./components/SeriesGrid";
import { SerieDetails } from "./pages/SerieDetails";

export function App() {
    return (
        <Router>
            <header>
                <Header />
            </header>
            <main>

                <Switch>
                    <Route exact path="/comics">
                        <ComicsGrid />
                    </Route>
                    <Route exact path="/comics/:comicId">
                        <ComicDetails />
                    </Route>
                    <Route exact path="/characters">
                        <CharactersGrid />
                    </Route>
                    <Route exact path="/characters/:characterId">
                        <CharacterDetails />
                    </Route>
                    <Route exact path="/series">
                        <SeriesGrid />
                    </Route>
                    <Route exact path="/series/:serieId">
                        <SerieDetails />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                    {/* <Route path="/error"> 404 </Route> */}
                </Switch>
            </main>
        </Router>
    );
}
