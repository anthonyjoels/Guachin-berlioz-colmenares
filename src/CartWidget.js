import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import carrito from './assets/img/carrito.png';

const CartWidget = () => {
    return(
        <img className="logo_header  " src={carrito}>
            </img>
    );
};
export default CartWidget;