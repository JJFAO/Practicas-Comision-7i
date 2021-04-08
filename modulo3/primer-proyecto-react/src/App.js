import { useState } from 'react';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Contador from './components/Contador';
import FormPersonas from './components/FormPersonas';

const articulos = [
    {
        image: 'https://fotos.perfil.com/2019/01/01/trim/1280/720/10-toyota-corolla.jpg',
        titulo: 'Corola',
        descripcion: 'Modelo 2019',
    },
    {
        image: 'https://fotos.perfil.com/2019/01/01/trim/1280/720/10-toyota-corolla.jpg',
        titulo: 'Hilux',
        descripcion: 'Modelo 2020',
    },
    {
        image: 'https://fotos.perfil.com/2019/01/01/trim/1280/720/10-toyota-corolla.jpg',
        titulo: 'Etios',
        descripcion: 'Modelo 2021',
    },
];

export default function App() {
    const [articles, setArticles] = useState(articulos);

    return (
        <div className="">
            <Nav />
            <div className="container d-flex">
                {articles.map((articulo) => (
                    <Card
                        imagen={articulo.image}
                        titulo={articulo.titulo}
                        descripcion={articulo.descripcion}
                    />
                ))}
            </div>
            <Contador />
            <FormPersonas />
        </div>
    );
}
