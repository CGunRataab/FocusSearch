import { useState } from "react";
import { ItemType } from "../page";
import Image from "next/image";

export default function Items({ username, location, name, picture }: ItemType) {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-60 h-60 relative">
        <Image
          loading="lazy"
          alt={username}
          width={400}
          height={400}
          layout="fixed"
          className="bg-white"
          src={picture.large}
        ></Image>
      </div>
      <div>{username}</div>
      <div>
        {location.city} / {location.country}
      </div>
    </div>
  );
}
