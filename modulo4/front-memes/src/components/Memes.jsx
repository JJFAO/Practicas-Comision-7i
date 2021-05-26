import Card from './Card'

export default function Memes({ currentUser, articles }) {


    // if (currentUser === '') {
    //     return <Redirect to="login" />
    // }

    return (
            <div className="d-flex flex-wrap">
                {articles.map((art) => (
                    <Card articulo={art} key={art.url} />
                ))}
            </div>
    );
}
