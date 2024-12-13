"use client";
import { useEffect, useState } from "react";
import Items from "./components/items";

export interface ItemType {
  username: string;
  location: Object;
  name: Object;
  picture: Object
}

export default function Home() {
  const [items, useItems] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api", { method: "GET" }).then((res) =>
        res.json()
      );
      useItems(res);
    };
    fetchData();
  }, []);
  // const uploadData = async () => {
  //   const res = await fetch("/api", { method: "POST" });
  //   const result = await res.json();
  //   useItems(result.data);
  // };
  console.log(items);
  return (
    <div>
      <header></header>
      <div className="w-screen bg-gradient-to-r from-purple-900 via-blue-900 to-blue-500 h-[230px] flex justify-center items-center flex-col">
        <h1 className="text-5xl absolute mb-32 font-extrabold">Search</h1>
        <input className="max-w-[40vw] min-w-96 w-full h-11 rounded-full px-6 text-black border-black border"></input>
      </div>
      <div className="gap-52 ml-40 flex mt-16">
        {items?.map((item: any, index: any) => (
          <Items
            key={index}
            username={item.username}
            location={item.location}
            name = {item.name}
            picture={item.picture}
          />
        ))}
      </div>
      {/* <button
        className="w-screen bg-white h-screen"
        onClick={uploadData}
      ></button> */}
    </div>
  );
}
