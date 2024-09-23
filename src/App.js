import Header from "./Components/Header";

import Footer from "./Components/Footer";

import "./Styles/keyframes.css";
import "./Styles/login.css";

import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const pages = [
  { title: "home", id: 1 },
  { title: "login", id: 2 },
];

export const CartContext = createContext();
export const CartListContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [page, setPage] = useState(pages[0]);
  const [cartNo, setCartNo] = useState(() => {
    const savedCartNo = sessionStorage.getItem("cartNo");
    return savedCartNo ? JSON.parse(savedCartNo) : 0;
  });

  const [cartList, setCartList] = useState(() => {
    const savedCart = sessionStorage.getItem("cartList");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cartNo", JSON.stringify(cartNo));
  }, [cartNo]);

  useEffect(() => {
    sessionStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      <CartContext.Provider value={{ cartNo, setCartNo }}>
        <CartListContext.Provider value={{ cartList, setCartList }}>
          <Header isLogin={login} cartNo={cartNo} />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </CartListContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
