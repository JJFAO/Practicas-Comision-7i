import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import NewsList from '../components/NewsList';

export default function NewsContainer() {
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

    return (
        <div>
            <h3>Noticias</h3>
            <Formulario onChange={handleChange} />
            <NewsList articles={articles} />
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
