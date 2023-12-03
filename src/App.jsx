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
      "QmPM1JHfJg8c27CYWJ4wtojtmGMFeUrY5nz1E3d9czNtgG",
      "QmRjkfSiQhgVMH3uuaadarTLpL9AfhTCspcdJrdwCHrUgv",
      "QmVEGQmXG1jak4P9wkLmkGwupKU6yCK9LL6a6698YwtXMF",
      "QmTRF1iaR7k2AxvS98w49mGAie1he4LkroxehbSrdkTNBq",
      "QmcGBYTBmG8H1GfCKyJDhKTqjp4LypQf4ouxHnzwcWbiVw",
      "Qmah7UenrND7dG9cuAz86hRvYHUDjKBZrLd5LGZ5qaYLVJ"
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="mb-12 text-2xl font-bold">BCS4 Developers!</h1>
      <ul className="grid grid-cols-3 gap-4">
        {nftData && nftData.map((url, i) => {
          return <NFTCard key={i} nft={url} />;
        })}
      </ul>
    </div>
  );
};

export default App;
