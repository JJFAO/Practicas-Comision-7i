import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import Memes from '../components/Memes';

export default function Main({ currentUser }) {
    const [articles, setArticles] = useState([]);
    const { category } = useParams();
    const history = useHistory();

    useEffect(() => {
        const getNews = async () => {
            const config = {
                params: { category, country: 'ar' },
            };
            const response = await axios.get(`/top-headlines`, config);
            setArticles(response.data.articles);
        };

        getNews();
    }, [category]);

    const handleChange = (event) => {
        const { value } = event.target;
        history.push(`/news/${value}`);
    };
    
    if (currentUser === '') {
        return <Redirect to="login" />;
    }

    return (
        <div>
            <h3>Noticias</h3>
            <Formulario onChange={handleChange} />
            <Memes articles={articles} />
        </div>
    );
}

function Formulario(props) {
    return (
        <form>
            <select onChange={props.onChange}>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="general">General</option>
            </select>
        </form>
    );
}
