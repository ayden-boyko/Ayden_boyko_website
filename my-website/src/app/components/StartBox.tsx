"use client";

import { useState, useEffect } from "react";

const StartBox = () => {
  const [cardcount, setCardCount] = useState(0);
  useEffect(() => {
    setCardCount(Math.floor(Math.random() * 100));
  });

  return (
    <div className="bg-black">
      <p> {cardcount}</p>
    </div>
  );
};

export default StartBox;
