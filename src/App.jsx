import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import BodyContent from "./components/BodyContent";
import { SidebarProvider } from "./components/ContextApi/SidebarContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./components/content/DashBoard";
import ProductsMangement from "./components/content/ProductsMangement";
import OrdersManagement from "./components/content/OrdersManagement";

function App() {
  return (
    <>
      <SidebarProvider>
        <Router>
          <Navbar />
          <SideBar />
          <Routes>
            <Route path="" element={<BodyContent />} />

            <Route path="products" element={<ProductsMangement />} />
            <Route path="orders" element={<OrdersManagement />} />
          </Routes>
        </Router>
      </SidebarProvider>
    </>
  );
}

export default App;
