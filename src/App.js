import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Componts/Post';
import { Container } from 'react-bootstrap';
import Comments from './Componts/Comments';
import Albums from './Componts/Albums';
import Todos from './Componts/Todos';
import Home from './Componts/Home';
import Users from './Componts/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photos from './Componts/Photos';

function App() {
  return (
    // <Container></Container>
    <>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/Post" element={<Post/>} />
          <Route path="/Comments" element={<Comments/>} />
          <Route path="/Albums" element={<Albums/>} />
          <Route path="/Photos" element={<Photos/>} />
          <Route path="/Todos" element={<Todos/>} />
          <Route path="/Users" element={<Users/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
    
    
  );
}

export default App;
