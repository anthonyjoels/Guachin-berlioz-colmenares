import './Item.css';
const Item = ({producto}) =>{

    return (<div className='row'>
        <section className='col-8'>

    <li  className="product" key={producto.id} width="200"> 
    <img alt={producto.title}
    src={`/images/${producto.imageId}`}  width="200"/>


    <h2 >{producto.title}</h2>
    <h3 >{producto.categoryId}</h3>
    <h3 >{producto.description}</h3>
    ;
    </li>
    </section>
    </div>)
};
export default Item;