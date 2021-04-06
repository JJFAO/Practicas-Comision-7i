import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Card from './components/Card';

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

function App() {
    const image1 =
        'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    const image2 =
        'https://images.unsplash.com/photo-1617206685607-fc9045cb3e5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

    return (
        <div className="">
            <Nav />
            {/* <Card imagen={image1} /> */}
            {/* <Card imagen={image2} /> */}

            {articulos.map((articulo) => (
                <Card imagen={articulo.image} titulo={articulo.titulo} descripcion={articulo.descripcion} />
            ))}
        
        
        </div>
    );
}

export default App;
