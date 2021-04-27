import axios from "axios"
import { useEffect, useState } from "react"

export default function News() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b87dd70e3ac44e3aa45d83ed16c8b6dd&category=health');
        setArticles(response.data.articles);
    }

    return (
        <div>
            Noticias
            {articles.map((art) => (
                <div>
                {art.author}
                </div>
            ))}
        </div>
    )
}
