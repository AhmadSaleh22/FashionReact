import React, { createContext, useState } from "react";
import {
  Women1,
  Women2,
  Women3,
  Women4,
  Man1,
  Man2,
  Man3,
  Man4,
} from "../SliderWomen/img.jsx";

export const DataContext = createContext();

export function ContextProvider(props) {
  const [products, setProducts] = useState([
    {
      _id: "1",
      src: `${Women1}`,
      sale: "sale",
      title: "Coat",
      description: "Guangzhou sweater",
      price: "23",
      prevPrice: "$34",
    },

    {
      _id: "2",
      src: `${Women2}`,
      title: "Shoes",
      description: "Guangzhou sweater",
      price: "34",
    },
    {
      _id: "3",
      src: `${Women3}`,
      title: "Towel",
      description: "Pure Pineapple",
      price: "13",
    },
    {
      _id: "4",
      src: `${Women4}`,
      title: "Towel",
      description: "Converse Shoes",
      price: "14",
    },
  ]);

  const [productsMen, setProductsMen] = useState([
    {
      _id: "5",
      src: `${Man1}`,
      sale: "sale",
      title: "Coat",
      description: "Guangzhou sweater",
      price: "23",
      prevPrice: "$34",
    },

    {
      _id: "6",
      src: `${Man2}`,
      title: "Shoes",
      description: "Guangzhou sweater",
      price: "34",
    },
    {
      _id: "7",
      src: `${Man3}`,
      title: "Towel",
      description: "Pure Pineapple",
      price: "13",
    },
    {
      _id: "8",
      src: `${Man4}`,
      title: "Towel",
      description: "Converse Shoes",
      price: "14",
    },
  ]);
  const [cart, setCart] = useState([]);

  function addCart(id) {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });

      setCart([...cart, ...data]);
      console.log(...cart, ...data);
    }
  }
  const value = {
    products: [products, setProducts],
    productsMen: [productsMen, setProductsMen],
    cart: [cart, setCart],
    addCart,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
