import React, { useState } from "react";

function ListingCard( { data, onDelete } ) {
  const [favorite, setFavorite] = useState(false)

  const {image, location, description, id} = data

  function handleFavoriteClick() {
    setFavorite((favorite) => !favorite)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`,
     {
      method: "DELETE",
    })
      .then((resp) => resp.json)
      .then(() => onDelete(data))

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
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
