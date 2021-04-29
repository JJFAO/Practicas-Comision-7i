import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import NavReactB from './components/NavReactB';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './app.css';
import News from './pages/News'
import Login from './pages/Login';
import { useState } from 'react';

export default function App() {
    const [user, setUser] = useState('');

    return (
        <Router>
            <NavReactB />
            <Switch>
                <Route path="/login">
                    <Login setUser={setUser} />
                </Route>
                <Route path="/news">
                    <News currentUser={user} />
                </Route>
                <Route path="/" exact>Home</Route>
                <Route path="/">404</Route>
            </Switch>
            Footer
        </Router>
    );
}
