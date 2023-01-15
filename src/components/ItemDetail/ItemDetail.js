import "../Item/Item.css"
const ItemDetail = ({product}) => {
    return (
        <div width="200" className="product">
             
            <img alt="{product.title}" src="{product.image}" width="200"/>
            <h2 className="titulo">{product.title}</h2>
            <h3 className="description"> {product.category}</h3>
            <h3 className="description">{product.description}</h3>
            
        </div>
    );
};
export default ItemDetail;