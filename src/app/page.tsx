"use client";
import { useEffect, useState } from "react";
import Items from "./components/items";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export interface ItemType {
  username: string;
  location: { city: string; country: string };
  name: Object;
  picture: { medium: string; large: string };
}

export default function Home() {
  const [items, setItems] = useState<any>();
  const [bar, setBar] = useState<string>();

  const searchBar = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchBar);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api", { method: "GET" }).then((res) =>
        res.json()
      );
      setItems(res);
    };
    fetchData();
  }, []);

  const searchData = async () => {
    const result = await fetch(`/api/search?q=${params.get("q")}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setItems(res.result));
  };
  // const uploadData = async () => {
  //   const res = await fetch("/api", { method: "POST" });
  //   const result = await res.json();
  //   useItems(result.data);
  // };

  const handleSearch = (inpt: any) => {
    if (inpt.key == "Enter") {
      if (bar) {
        params.set("q", bar);
      } else {
        params.delete("q");
      }
      replace(`${pathname}?${params.toString()}`);
      searchData();
    }
  };

  return (
    <div className="overflow-x-hidden">
      <header></header>
      <div className="w-screen bg-gradient-to-r from-purple-900 via-blue-900 to-blue-500 h-[230px] flex justify-center items-center flex-col">
        <h1 className="text-5xl absolute mb-32 font-extrabold">Search</h1>
        <input
          placeholder={searchBar.get("q")?.toString()}
          onChange={(e) => setBar(e.currentTarget.value)}
          onKeyDownCapture={(el) => handleSearch(el)}
          className="max-w-[40vw] min-w-96 w-full h-11 rounded-full px-6 text-black border-black border"
        ></input>
      </div>
      <div className="gap-32 ml-40 flex mt-16 flex-wrap">
        {items?.map((item: any, index: any) => (
          <Items
            key={index}
            username={item.username}
            location={item.location}
            name={item.name}
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
