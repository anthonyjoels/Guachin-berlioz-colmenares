import logo from './logo.svg';
import ItemListContainer from './components/ItemListContainer'
import './App.css';

function App() {
  const greeting = 'BIENVENIDOS';
  return (
    <div className="App">
      <header className="App-header">
       <ItemListContainer greeting = {greeting} />
      </header>
    </div>
    
  
  );
}

export default App;
