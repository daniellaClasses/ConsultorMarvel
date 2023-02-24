import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { ComicsGrid } from "./components/ComicsGrid";
import { ComicDetails } from "./pages/ComicDetails";
import { CharactersGrid } from "./components/CharactersGrid";
import { CharacterDetails } from "./pages/CharacterDetails";

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
                        <ComicsGrid />
                    </Route>
                    <Route exact path="/series/:serieId">
                        <ComicDetails />
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
