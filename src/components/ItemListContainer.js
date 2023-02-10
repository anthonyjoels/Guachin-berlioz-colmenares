
import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import { Form, useParams } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([]);
   
    const [Loading, setLoading] = useState(true);
    const{category} = useParams();
    
    const ComponentToRender = Loading === true ? Loading : ItemList;

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "items");


       
            if(category){
                const newCofiguration = query (querySnapshot, where ("categoryId", "==", category));
                getDocs(newCofiguration)
            .then((response)=> {
                const data = response.docs.map ((doc)=>{
                    return {id: doc.id , ...doc.data()};
                })
                console.log (data);
                setProducts (data);
            }) 
            .catch(error=> console.log (error));
            } else {
                getDocs(querySnapshot)
            .then((response)=> {
                const data = response.docs.map ((doc)=>{
                    return {id: doc.id , ...doc.data()};
                })
                console.log (data);
                setProducts (data);
            }) 
            .catch(error=> console.log (error));
            }
            
     
       
    };
    
 

    useEffect(()=>{
    getProducts();
    }, [category]);
    

    console.log(greeting)
    return 
        <div>{Loading ? <Loading />  :  <ItemList productos={products} /> } </div>;
};
export default ItemListContainer;