import { ComicsGrid } from "./components/ComicsGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ComicDetails } from "./pages/ComicDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
    return (
        <Router>
            <header>
                {/* <Link to="/"> Home </Link>
                <br />
                <Link to="/comic"> Comic </Link> 
                //CREAR COMPONENTE HEADER
                */}
                <Link to="/"> <h1 className={styles.title}> MARVEL </h1> </Link>

            </header>
            <main>
                {/* <ComicsGrid /> */}

                {/* <Routes>
                    {<Route path="/comics/:comicId" element={<ComicDetails />}/> }
                    <Route path="/"> Home </Route>
                    <Route path="/comic">
                    <div> COMIC </div>
                    </Route>
                    {/<Route path="/" element={<LandingPage />} /> }
                </Routes> */}

                <Switch>
                    <Route exact path="/comics/:comicId"> 
                    <ComicDetails /> 
                    </Route>
                    <Route path="/"> 
                    <LandingPage /> 
                    </Route>
                    {/* <Route path="/"> 404 </Route> */}
                </Switch>
            </main>
        </Router>
    );
}
