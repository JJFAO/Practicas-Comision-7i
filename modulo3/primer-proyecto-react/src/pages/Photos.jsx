import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

// 1- Consulta a la API JSONPlaceholder. Listado de fotos. (fetch())
// 2.1- Mostrar en el retorno del componente el listado. (implementar el uso de state).
// 2.2- Mapear el listado para mostrarlo en cards.
// 3- Mostrar una porción de los elementos del array. (array.slice()).

export default function Photos() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotosAxios();
    }, []); // Pasando como 2do parámetro un array vació, el código dentro del useEffect se ejecuta solo una vez.

    // const getPhotosFetch = () => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then((response) => response.json())
    //         .then((photos) => setPhotos(photos));
    // };

    const getPhotosAxios = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => setPhotos(response.data));
    };

    const slicedPhotos = photos.slice(0, 5);

    return (
        <div>
            <button onClick={getPhotosAxios}>Fetch Photos</button>
            <div className="d-flex flex-wrap">
                {slicedPhotos.map((photo) => (
                    <Card style={{ width: '18rem' }} key={photo.id}>
                        <Card.Img variant="top" src={photo.url} />
                        <Card.Body>
                            <Card.Title>{photo.title}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
