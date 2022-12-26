
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar';


import './App.css';

function App() {
  const greeting = 'BIENVENIDOS';
  return (
    <div className=" ">
      <div className="row "> 
      <div className="col header ">
      <NavBar />
      </div>
      
      </div>






      <header className="">
      
      <ItemListContainer greeting = {greeting} />
  
      </header>
    </div>
    
  
  );
}

export default App;
