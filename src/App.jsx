import {useEffect, useRef, useState} from 'react'
import './App.css'
import List from "./Components/List.jsx";

function App() {
  const [listProducts, setListProducts] = useState([
      {
          id:1,
          title: 'Bread'
      },
      {
          id:2,
          title: 'Apples'
      },
      {
          id:3,
          title: 'Milk'
      },
      {
          id:4,
          title: 'Eggs'
      },
      {
          id:5,
          title: 'Butter'
      },
  ])

  return (
    <>
      <List listProducts = {listProducts} />
    </>
  )
}

export default App
