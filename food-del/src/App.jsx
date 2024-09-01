import React, {useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navv from "./components/Navbar/Nav";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Ordering/Order";
import Footer from "./components/Footer/Footer";
import { CartContext } from "./Context/CartContex";
import Login from "./components/Login/Login";

import "./ChatBot/ChatBot.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatBot/config";
import MessageParser from "./ChatBot/MessageParser";
import ActionProvider from "./ChatBot/ActionProvider";

function App() {
  const { food_list, setFoodList, errorMsg, setErrorMsg } =
    useContext(CartContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  function toggleChat() {
    setIsChatOpen((prev) => !prev);
  };
  function closeChat() {
    if(isChatOpen) setIsChatOpen(false);
  }

  useEffect(() => {
    fetch("http://localhost:8000/api/get-list/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Succesfull") {
          setFoodList(data.List);
        } else {
          console.error(data.status, "JAGADISH MSG");
        }
      })
      .catch((e) => console.error("Cannot fetch the list - JAGADISH MSG", e));
  }, []);

  return (
    <div className="App">
      <Login
        setModalShow={setModalShow}
        show={modalShow}
        onHide={() =>
          setModalShow(() => {
            setErrorMsg((prevState) => {
              return {
                ...prevState,
                detail: "",
                login: false,
              };
            });
            return false;
          })
        }
      />
      <Navv setModalShow={setModalShow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      {isChatOpen ? (
          <Chatbot
            config={config(closeChat)}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
      ) : (
        <button className="chatbot-toggle-button" onClick={toggleChat}>
          💬
        </button>
      )}
      <Footer />
    </div>
  );
}

export default App;
