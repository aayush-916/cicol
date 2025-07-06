import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import Nav from "./componets/Nav";
import Whatsapp from "./componets/Whatsapp";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> 
      <Nav/>
      <div style={{ marginTop: '70px' }}></div>
      <Whatsapp />
      <App />
     
    </BrowserRouter>
  </StrictMode>
);
