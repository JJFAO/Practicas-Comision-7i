
export default function CardNews(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <p>autor: {props.articulo.author}</p>
        </div>
    );
}
