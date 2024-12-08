"use client";
import { useState } from "react";
import Items from "./components/items";

export interface ItemType {
  title: string;
  desc: string;
  image: string;
}

export default function Home() {
  const [items, useItems] = useState<ItemType[]>([
    { title: "asd", desc: "desc", image: "src" },
    { title: "a", desc: "d", image: "s" },
  ]);
  return (
    <div>
      <header></header>
      <div className="w-screen bg-gradient-to-r from-purple-900 via-blue-900 to-blue-500 h-[230px] flex justify-center items-center flex-col">
        <h1 className="text-5xl absolute mb-32 font-extrabold">Search</h1>
        <input className="max-w-[40vw] min-w-96 w-full h-11 rounded-full px-6 text-black border-black border"></input>
      </div>
      <div className="gap-52 ml-40 flex mt-16">
        {items.map((item, index) => (
          <Items
            key={index}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
