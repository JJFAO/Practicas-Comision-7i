import './card.css';

export default function Card({articulo}) {
    return (
        <div className="container py-5">
            <div className="card fondo" style={{ width: '18rem' }}>
                <img src={articulo.urlImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{articulo.title}</h5>
                    <button className="btn btn-primary">
                        Go somewhere
                    </button>
                </div>
            </div>
        </div>
    );
}
