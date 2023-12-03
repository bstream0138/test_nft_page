
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Title from "./component/Title";
import MenuBar from "./component/MenuBar";
import NFTs from './component/NFTs'; // NFTs 컴포넌트
import ToDo from './component/ToDo'; // ToDo 컴포넌트

export const {
  REACT_APP_PIN_ACCESS_KEY,
  REACT_APP_PIN_SECRET_ACCESS_KEY,
} = process.env;

const App = () => {
  const [currentTab, setCurrentTab] = useState('NFTs');


  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Title />
        <MenuBar currentTab={currentTab} />
        <Routes>
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </div>
    </Router>
    
  );
};


export default App;
