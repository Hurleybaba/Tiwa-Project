import Header from "./Components/Header";

import Footer from "./Components/Footer";
import "./Styles/media.css";
import "./App.css";
import "./Styles/keyframes.css";
import "./Styles/login.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const pages = [
  { title: "home", id: 1 },
  { title: "login", id: 2 },
];

function App() {
  const [login, setLogin] = useState(false);
  const [page, setPage] = useState(pages[0]);
  console.log(page);

  return (
    <>
      <Header isLogin={login} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
