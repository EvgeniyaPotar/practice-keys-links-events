
const List = ({products, onChangeProduct}) => {

    return (
            <ul>
                {products.map(product=> <li key={product.id}>{product.title} <button onClick={() =>{onChangeProduct(product.id)}}>изменить</button></li>)}
            </ul>
    )
}

export default List