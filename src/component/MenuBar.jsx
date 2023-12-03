import React from "react";
import { Link } from "react-router-dom";

const MenuBar = ({ currentTab }) => {
  return (
    <div className="menu-bar flex justify-center space-x-4">
      <Link to="/nfts" className={currentTab === 'NFTs' ? 'active' : ''}>NFTs</Link>
      <Link to="/todo" className={currentTab === 'ToDo' ? 'active' : ''}>ToDo</Link>
    </div>
  );
};

export default MenuBar;
