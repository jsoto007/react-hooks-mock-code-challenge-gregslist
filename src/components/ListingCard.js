import React, { useState } from "react";

function ListingCard( { onData } ) {
  const [favorite, setFavorite] = useState(false)
  const {image, location, description} = onData

  function handleFavoriteClick() {
    setFavorite((favorite) => !favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">${}</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button  onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
