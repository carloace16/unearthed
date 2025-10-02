import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GiftDetails = () => {
  const [gift, setGift] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchGiftById = async () => {
      const response = await fetch(`http://localhost:3001/gifts/${id}`);
      const data = await response.json();
      setGift(data);
    };
    fetchGiftById();
  }, [id]);

  if (!gift) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gift-details">
      <img src={gift.image} alt={gift.name} />
      <h2>{gift.name}</h2>
      <p>
        <strong>Price:</strong> {gift.pricepoint}
      </p>
      <p>
        <strong>Audience:</strong> {gift.audience}
      </p>
      <p>
        <strong>Description:</strong> {gift.description}
      </p>
      <p>
        <em>
          Submitted by: {gift.submittedby} on{" "}
          {new Date(gift.submittedon).toLocaleDateString()}
        </em>
      </p>
    </div>
  );
};

export default GiftDetails;
