import itemCount from './ItemCount/ItemCount'
import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([]);
    const{category} = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const getProducts = fetch ('https://fakestoreapi.com/products',{
        method: 'GET',
     
        })


    useEffect(()=> {
        if(category){const removeCharacters = category?.includes ('%20') ? category.replace('%20', ''): category
        const filterProducts = products.filter((product)=> product.category === removeCharacters)
        setFilteredProducts(filterProducts)}
        
    },[category])







    
    
    const addProduct =fetch ('https://fakestoreapi.com/products',{
        method: 'POST',
        body: JSON.stringify({
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category : 'electronic',
        })
    });

    useEffect(()=>{
    getProducts
    .then((res) =>{
        return res.json()
    })
    .then((response)=> {
        setProducts(response);
    })
    .catch((error) => console.log(error));},[])

    useEffect (()=> {
        addProduct
        .then((response)=>response.json)
        .then((productoCreado)=> {
            console.log(productoCreado);
        })
    })
    

    console.log(greeting)
    return (
        <div>
            
            <ItemList productos={category ? filteredProducts : products} />
            <h1> {greeting}</h1>
        </div>
    );
};
export default ItemListContainer;