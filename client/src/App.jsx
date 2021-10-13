import { Switch, Route } from "react-router-dom";
import CreateEvent from "./pages/create-event";
import EventList from "./pages/event-list";
import styles from "./styles/App.module.css";

function App() {
    return (
        <div className="App">
            <div className={styles.appContainer}>
                <div className={styles.contentContainer}>
                    <Switch>
                        <Route exact path="/" component={EventList} />
                        <Route path="/create" component={CreateEvent} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
