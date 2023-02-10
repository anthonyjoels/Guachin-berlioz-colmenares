import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { collection, addDoc, getFirestore , doc, updateDoc} from "firebase/firestore";

const Cart=() =>{
const{cart, removeItem, clear} = useContext(cartContext);
const[order, setOrder]= useState ({});
const db= getFirestore();


useEffect (()=> {
    setOrder(
        {
    
            buyer: {
                name: "a",
                phone:"a",
                email:"a"
            },
            items: cart.map((product)=>{
                const {name, price, id} = product;
                return{name, price,id,};
            }),
            total: cart.reduce((acc, item) =>acc+ curr.price * curr.quantity,0),
            
    }
    );
},[cart]);


if (cart.length === 0){
    return <h1>No hay productos disponibles</h1>;}

    const updateStockProducts = () => {
cart.forEach ((product) => {
const querySnapshot = doc(db, "items", product.id);
updateDoc(querySnapshot,{
    categoryId: product.category,
    description: product.description,
    imageId: product.image,
    price:product.price,
    stock:product.stock - product.quantity,
    title:product.name
}) 
.then(()=> {}) 
.catch((error) => console.log(error))
})
    };




const createOrder= () => {

const querySnapshot = collection (db, "orders");
addDoc (querySnapshot, order)

.then((response)=>{
    updateStockProducts();
    alert("orden creada "+ response.id);})
.catch (error =console.log(error) )
};

return (
    <div style={{padding: '40px', witdth: '500px',}}>
        <ul>
            {cart.map((product) => (
                <li key={product.id}>
                    <div 
                    style={{
                        display: 'flex',
                        flexDirection:'row',
                        justifyContent: 'space-between',
                    }}>
                        <img
                        alt ={product.id}
                        src={`/images/${product.image}`}
                        witdth = "50px"
                        />
                        
                        <h2>{product.name}</h2>
                        <h3 > {product.category}</h3>
                        <h3 >{product.quantity}</h3>
                        <h2>{product.price}</h2>
                        <button
                        onClick={()=> removeItem(product.id)}
                        style= {{height: "20px"}}
                    > eliminar del carrito
                    </button>

                    </div>
                </li>
            ))}
        </ul>
        <div style={{marginTop: "150px"}}>
            <button onClick={()=> clear ()}> vaciar carrito</button>
        </div>
        <div style={{marginTop: "150px"}}>
            <button onClick={()=> createOrder ()}> Crear Orden</button>
        </div>
    </div>
)};

export default Cart;