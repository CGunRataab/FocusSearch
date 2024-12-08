import { ItemType } from "../page";

export default function Items({ title, desc, image }: ItemType) {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        loading="lazy"
        alt={title}
        className="w-48 bg-white h-48"
        src={image}
      ></img>
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
}
