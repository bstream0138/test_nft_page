import React from "react";
import { useEffect, useState } from "react";
import NFTCard from "./NFTCard";

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

  
const NFTs = () => {
    const [nftData, setNftData] = useState(null);

    useEffect(() => {
        fetchNFTData().then(data => setNftData(data));
      }, []);
    
    return (
    <ul className="grid grid-cols-3 gap-4">
        {nftData && nftData.map((url, i) => <NFTCard key={i} nft={url} />)}
    </ul>
    );
};

export default NFTs;
