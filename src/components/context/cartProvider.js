import {useState} from 'react';
import { cartContext } from './cartContext';

const cartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

const addItem = (item, quantity) => {
    const newProduct = {
        name: item.title,
        price : item.price,
        quantity : item.quantity,
        category: item.category,
        stock: item.stock
    };
    setCart ([...cart, newProduct]);
};
return (
    <cartContext.Provider value= {{cart, addItem}}>
        {/*App.js*/}
        {children}
    </cartContext.Provider>
);
};
export default cartProvider;