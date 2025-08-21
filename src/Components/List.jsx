import {useRef, useState} from "react";

const List = ({listProducts}) => {
    const [products,setProducts] = useState(listProducts)
    const inputRef = useRef()

    const changeProduct = (id) =>{
        const newProducts = products.map((item) => {
            if (item.id === id) {
                item.title = '!!!' + item.title;
            }
            return item;
        });
        setProducts(newProducts);
    }

    const focusInput = () => {
        inputRef.current.focus()
    }


    const addProduct = (e) => {
        if (e.key === "Enter" && e.target.value.trim() !== '') {
            setProducts([...products, {id: products.length + 1, title: e.target.value}])
            e.target.value = ""
        }
    }

    return (
        <>
            <h2>Список продуктов</h2>
            <input ref={inputRef} type="text"  placeholder="Введите текст и нажмите Enter" onKeyDown={e => addProduct(e)}/>
            <button onClick={focusInput}>Фокус</button>
            <ul>
                {products.map(product=> <li key={product.id}>{product.title} <button onClick={() =>{changeProduct(product.id)}}>изменить</button></li>)}
            </ul>
        </>
    )
}

export default List