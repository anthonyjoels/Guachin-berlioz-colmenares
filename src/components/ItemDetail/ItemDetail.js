import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import {cartContext} from '../context/cartContext'
import  Item from "../Item/Item.css"




const ItemDetail = ({product}) => {
    const {addItem} = useContext(cartContext);
    const {contador, setContador} = useState(1);
    const stock = 5;

    const getNumeroCualquiera = (numero) => {};
    return (
        <div width="200" className="product">
             
            <img alt="{product.title}" src={`../../../public/images/${product.imageId}`} width="200"/>
            <h2 className="titulo">{product.title}</h2>
            <h3 className="description"> {product.categoryId}</h3>
            <h3 className="description">{product.description}</h3>
            <ItemCount
            contador = {contador}
            actualizaValor={setContador}
            stock={product.stock}
            getNumeroCualquiera
            />
        
        <div>
        <button onClick={()=> addItem(product,contador)}>
            agregar al carrito {'  '}
        </button>
        </div>
        </div>
    );
};
export default ItemDetail;