import React from "react";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import DataCard from "./component/DataCard";
import DateData from "./date.json";
import NFTCard from "./component/NFTCard";


export const {
  REACT_APP_PIN_ACCESS_KEY,
  REACT_APP_PIN_SECRET_ACCESS_KEY,
} = process.env;


export const fetchNFTData = async () => {
  try {
    const ipfsHashes = [
      "Qmah7UenrND7dG9cuAz86hRvYHUDjKBZrLd5LGZ5qaYLVJ",
      "Qme3XDsTUHSBYP8X6aLa5U3rAmWQhS9ynpnTQtroHqWUex"
    ];

    const imageUrls = ipfsHashes.map(hash => 
      `https://gateway.pinata.cloud/ipfs/${hash}`);

    return imageUrls;
  } catch (error) {
    console.error('이미지를 불러오는데 실패했습니다:', error);
    return [];
  }
};

const App = () => {
  const [nftData, setNftData] = useState(null);

  useEffect(() => {
    fetchNFTData().then(data => setNftData(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-12 text-2xl font-bold">2023년 11월</h1>
      <ul className="grid grid-cols-7 gap-4">
        <li className="w-32 h-32"></li>
        {nftData && nftData.map((v, i) => {
          return <NFTCard key={i} nft={v} />;
        })}
      </ul>
      <ul className="grid grid-cols-7 gap-4">
        <li className="w-32 h-32"></li>
        <li className="w-32 h-32"></li>
        {DateData.map((v, i) => {
          return <DataCard key={i} date={v.date} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
};

export default App;