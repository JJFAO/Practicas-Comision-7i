export default function Card(props) {
    return (
        <div className="container py-5">
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
}
