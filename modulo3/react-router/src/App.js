import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import NavReactB from './components/NavReactB';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import News from './pages/News'

export default function App() {
    return (
        <Router>
            <NavReactB />
            <Switch>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/">Home</Route>
            </Switch>
            Footer
        </Router>
    );
}
