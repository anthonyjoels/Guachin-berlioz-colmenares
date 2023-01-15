import './Item.css';
const Item = ({producto}) =>{

    return (<div className='row'>
        <section className='col-8'>

    <li  className="product" key={producto.id} width="200"> 
    <img alt={producto.title} src={producto.image} width="200"/>
    <h2 className="titulo">{producto.title}</h2>
    <h3 className="description">{producto.category}</h3>
    <h3 className="description">{producto.description}</h3>
    ;
    </li>
    </section>
    </div>)
};
export default Item;