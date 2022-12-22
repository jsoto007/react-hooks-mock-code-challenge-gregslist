import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setData(data))
  }, [])

  return (
    <main>
      <ul className="cards">
        {data.map((item) => {
          return (
            <ListingCard 
              onData={item} 
              key={item.id}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
