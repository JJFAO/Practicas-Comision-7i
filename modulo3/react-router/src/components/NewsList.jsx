import CardNews from './CardNews'

export default function NewsList({ currentUser, articles }) {


    // if (currentUser === '') {
    //     return <Redirect to="login" />
    // }

    return (
            <div className="d-flex flex-wrap">
                {articles.map((art) => (
                    <CardNews articulo={art} key={art.url} />
                ))}
            </div>
    );
}
