import 'bootstrap/dist/css/bootstrap.min.css';
import NavReactB from './components/NavReactB';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import Main from './pages/Main';
import Register from './pages/Register';
import axios from 'axios';
import ScrollToTop from './components/ScrollToTop';
import { Nav } from 'react-bootstrap';

const localToken = JSON.parse(localStorage.getItem('token'))?.token || '';

export default function App() {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localToken);

    useEffect(() => {
        if (token) {
            const request = async () => {
                const headers = { 'x-auth-token': token };
                const { data } = await axios.get('/auth', { headers });
                setUser(data);
            };
            request();
        }
    }, [token]);

    const logout = () => {
        localStorage.removeItem('token');
        setUser({});
        setToken('');
    };

    return (
        <div className="fix-footer">
            <Router>
                <Route>
                    <ScrollToTop></ScrollToTop>
                </Route>
                <NavReactB userName={user.nombre} logout={logout} />
                <Switch>
                    <Route exact path="/login">
                        <Login setUser={setUser} setToken={setToken} />
                    </Route>

                    <Route exact path="/news/:category">
                        <div style={{height: '2000px'}}></div>
                        <Main currentUser={user} />
                    </Route>

                    <Route exact path="/register">
                        <Register setToken={setToken} />
                    </Route>

                    <Route path="/" exact>
                        <div style={{height: '2000px'}}></div>
                        Home
                    </Route>

                    <Route path="/">404</Route>
                </Switch>
            <footer className="mt-auto bg-dark text-light footer text-center">
                <h3>Footer</h3>
                <Nav.Link to="/" exact as={NavLink} activeClassName="active">
                        Home
                    </Nav.Link>
                    <Nav.Link to="/news/general" as={NavLink} activeClassName="active">
                        Noticias
                    </Nav.Link>
            </footer>
            </Router>
        </div>
    );
}
