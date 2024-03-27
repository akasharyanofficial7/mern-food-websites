import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";
import { useState } from "react";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>

      <p className="explore-menu-text">
        Explore our menu Explore our menu Explore our menu Explore our menu
        Explore our menu Explore our menu.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr class="border-t border-gray-300 " />
    </div>
  );
};

export default ExploreMenu;
