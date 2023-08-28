import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const item = [
    {
      price: 0,
      name: "Add Product 1",
      quantity: 0,
    },
    {
      price: 0,
      name: "Add Product 2",
      quantity: 0,
    },
  ];
  let [x, setProductList] = useState(item);
  let [y, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    // + button to increment
    let newProductList = [...x];
    let newtotalAmount = y;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    // - button to decrement
    let newProductList = [...x];
    let newtotalAmount = y;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };

  const resetQuantity = () => {
    // reset function
    let newProductList = [...x];
    newProductList.map((item) => {
      item.quantity = 0;
    });
    setProductList = newProductList;
    settotalAmount(0);
  };

  const removeItem = (index) => {
    //Remove item
    let newProductList = [...x];
    let newtotalAmount = y;
    newtotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {  // Add itemm
    let newProductList = [...x];
    newProductList.push({
      price: price,
      name: name,
      quantity:0
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />

      <main className="container mt-3">
        <AddItem 
        addItem={addItem}
        />

        <ProductList
          x={x}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer y={y} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
