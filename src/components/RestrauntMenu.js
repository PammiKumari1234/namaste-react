import React from "react";
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const menu = [
    { id: 1, name: "Margherita Pizza", price: "$12" },
    { id: 2, name: "Pasta Carbonara", price: "$15" },
    { id: 3, name: "Butter Chicken", price: "$10" },
    { id: 4, name: "Fried Rice", price: "$8" },
  ];

  return (
    <div className="">
      <div className="flex flex-wrap flex-col justify-center items-center p-4 m-4">
        <p className="text-xl font-bold mb-5">Restaurant ID: {resId}</p>
        <p className="text-xl font-bold mb-5">Menu</p>
      </div>
      <ul className="flex flex-col flex-wrap m-6 p-6">
        {menu.map((item) => (
          <li key={item.id} className="flex items-center justify-between pb-6 border border-solid border-black w-full m-5 px-5 py-4 rounded-lg bg-gradient-to-r from-red-100 to-yellow-100 font-bold">
          <span>{item.name} - {item.price}</span>
          <button className="font-bold px-2 py-1 bg-white ">Add</button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
