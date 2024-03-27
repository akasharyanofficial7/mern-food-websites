import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  const totalPrice = itemCount > 0 ? price * itemCount : price;

  return (
    <div className="food-item">
      <div className="food-item-img-container relative">
        <img className="food-item-image rounded-2xl" src={image} alt={name} />
        {!itemCount ? (
          <img
            className="add bottom-4 right-2 absolute"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter flex justify-between bottom-4 right-2 bg-gray-200 p-2 rounded-full absolute">
            <img
              onClick={() => setItemCount((prev) => Math.max(0, prev - 1))}
              src={assets.remove_icon_red}
            />
            <p className="px-2 items-center font-semibold">{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-6">
        <div className="food-item-name-rating flex justify-between items-center mb-4">
          <p className="font-semibold">{name}</p>
          <img className="h-5" src={assets.rating_starts} />
        </div>
        <p className="food-item-desc text-sm text-gray-600">
          {description.slice(0, 65) + "..."}
        </p>
        <div className="flex justify-between items-center">
          <p className="food-item-price text-red-500 font-semibold">
            ${totalPrice}
          </p>
          {/* <p className="text-gray-500">Qty: {itemCount}</p> */}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
