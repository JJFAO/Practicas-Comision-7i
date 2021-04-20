import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Contador from './components/Contador';
import FormPersonas from './components/FormPersonas';
import NavReactB from './components/NavReactB';
import Photos from './pages/Photos';
import { useState } from 'react';

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
    const [section, setSection] = useState('Fotos');
    console.log("🚀 - App - section", section);

    return (
        <div className="">
            {/* <Nav /> */}
            <NavReactB setSection={setSection} />

            {section === 'Cards' && (
                <div className="container d-flex">
                    {articulos.map((articulo) => (
                        <Card
                            imagen={articulo.image}
                            titulo={articulo.titulo}
                            descripcion={articulo.descripcion}
                        />
                    ))}
                </div>
            )}
            {section === 'Contador' && <Contador />}

            {section === 'Formulario' && <FormPersonas />}

            {section === 'Fotos' && <Photos />}
        </div>
    );
}
