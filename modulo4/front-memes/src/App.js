import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import NavReactB from './components/NavReactB';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './pages/Login';
import { useState } from 'react';
import Main from './pages/Main';
import Register from './pages/Register';

export default function App() {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    return (
        <div className="fix-footer">
            <Router>
                <NavReactB />
                <Switch>
                    <Route path="/login">
                        <Login setUser={setUser} />
                    </Route>

                    <Route path="/news/:category">
                        <Main currentUser={user} />
                    </Route>

                    <Route path="/register">
                        <Register setToken={setToken} />
                    </Route>

                    <Route path="/" exact>
                        Home
                    </Route>

                    <Route path="/">404</Route>
                </Switch>
            </Router>
            <footer className="mt-auto footer">Footer</footer>
        </div>
    );
}
