import { useRef, useState } from 'react'
import './App.css'
import List from './Components/List.jsx'

function App() {
    const [listProducts, setListProducts] = useState([
        {
            id: 1,
            title: 'Bread',
        },
        {
            id: 2,
            title: 'Apples',
        },
        {
            id: 3,
            title: 'Milk',
        },
        {
            id: 4,
            title: 'Eggs',
        },
        {
            id: 5,
            title: 'Butter',
        },
    ])

    const inputRef = useRef()

    const changeProduct = (id) => {
        const newProducts = listProducts.map((item) => {
            if (item.id === id) {
                item.title = '!!!' + item.title
            }
            return item
        })
        setListProducts(newProducts)
    }

    const focusInput = () => {
        inputRef.current.focus()
    }

    const addProduct = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            setListProducts([
                ...listProducts,
                { id: listProducts.length + 1, title: e.target.value },
            ])
            e.target.value = ''
        }
    }

    return (
        <>
            <h2>Список продуктов</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="Введите текст и нажмите Enter"
                onKeyDown={(e) => addProduct(e)}
            />
            <button onClick={focusInput}>Фокус</button>
            <List products={listProducts} onChangeProduct={changeProduct} />
        </>
    )
}

export default App
