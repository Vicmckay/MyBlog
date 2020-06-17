import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header></Header>
      </div>
      <NavigationMenu></NavigationMenu>
      <div className={"container"}>
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
