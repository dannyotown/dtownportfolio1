import React from "react";
import MainBody from "./components/MainBody";
import HeaderAnimation from "./components/Header/HeaderAnimation";
import Header from "./components/Header/Header";

function App() {
  const time = new Date().getTime();
  console.log(time);
  return (
    <>
      <Header />
      <HeaderAnimation />
      <MainBody />
    </>
  );
}

export default App;
