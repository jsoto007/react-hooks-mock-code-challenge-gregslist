import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";



function ListingsContainer( { searchData }) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setData(data))
  }, [])

  function handleDeleItem(deletedItem) {
    const updatedItems = data.filter((item) => item.id !== deletedItem.id)
    setData(updatedItems)
  }

  const updatedDisplayItems = data.filter((item) => {
     return (item.description.includes(searchData))
  })


  return (
    <main>
      <ul className="cards">
        {updatedDisplayItems.map((item) => {
          return (
            <ListingCard 
              data={item} 
              key={item.id}
              onDelete={handleDeleItem}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
