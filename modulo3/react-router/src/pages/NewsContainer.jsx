import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsList from '../components/NewsList'

export default function NewsContainer() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('entertainment');

    useEffect(() => {
        getNews();
    }, [category]);

    const getNews = async () => {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?apiKey=bb4af6c6f5c34c9ea5feb50daa586299&category=${category}`
        );
        setArticles(response.data.articles);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value);
    };

    return (
        <div>
            <h3>Noticias</h3>
            <Formulario onChange={handleChange} />
            <NewsList articles={articles} />
        </div>
    )
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
    )
}