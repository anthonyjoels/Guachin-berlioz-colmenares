
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element= {<ItemListContainer/>} />
      <Route path="/category/:category" element= {<ItemListContainer/>} />
      <Route path="item/:id" element ={<ItemDetailContainer/>} />
      
    </Routes>
    </BrowserRouter>

   
  
  );
}

export default App;
