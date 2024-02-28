

import { useState } from 'react'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  const [carItems, setCarItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalValor, setTotalValor] = useState(0);

  const produtos = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 10 },
    { id: 5, name: 'Product 5', price: 20 },
    { id: 6, name: 'Product 6', price: 30 }
  ];

  const updateCarInfo = (updatedCartItems) => {
    const totalItemCount = updatedCartItems.reduce((acc,) => acc + 1, 0);
    const totalPriceValue = updatedCartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalItem(totalItemCount);
    setTotalValor(totalPriceValue);
  };
  function addCar(produto){
    const updatedCarItems = [...carItems, produto];
    setCarItems(updatedCarItems);
    updateCarInfo(updatedCarItems);
    console.log(updatedCarItems);
  }

  const removeFromCart = (productId) => {
    const updatedCartItems = carItems.filter(item => item.id !== productId);
    setCarItems(updatedCartItems);
    updateCarInfo(updatedCartItems);
  };



  return (
  
      <div className="card">
       
        <div className='product-list-container'>
      <div className='product-list'>
        <div><h1>Produtos</h1></div>
      </div>
      <div className='product-content'>
        {produtos.map(produto =>(
            <div className="product" key={produto.id}>
              <p>{produto.name}</p>
              <p>R$ {produto.price}</p>
              <button className='button-add' onClick={()=>addCar(produto)}>+ Adicionar</button>
            </div>
          ))
        }
        </div>
</div>
      <div className='cart-info-container'>
       <div className="cart-info">
        <h2>Cart</h2>
        <p>Total Items: {totalItem}</p>
        <p>Total Price: ${totalValor}</p>
      </div>
      <div className="cart-items">
       <div className="cart-items-title"><h2>Cart Items</h2></div>
        <ul>
          {carItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <div>
              <button className='button-remove'  onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
        </div>

  )
}

export default App
