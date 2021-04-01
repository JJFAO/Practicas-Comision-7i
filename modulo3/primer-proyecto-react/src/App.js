import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Card from './components/Card';

function App() {
  const image1 = "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const image2 = "https://images.unsplash.com/photo-1617206685607-fc9045cb3e5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

    return (
        <div className="">
          <Nav />
          <Card imagen={image1} />
          <Card imagen={image2} />
        </div>
    );
}

export default App;
