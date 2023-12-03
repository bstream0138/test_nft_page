import React from "react";

const NFTCard = ({ nft }) => {
    console.log("URI", nft);

    return (
        <div className="NFT">
        <img src={nft} alt="NFT" />
        </div>
    );
};

export default NFTCard;
