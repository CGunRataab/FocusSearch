import { ItemType } from "../page";

export default function Items({ username, location, name, picture }: ItemType) {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        loading="lazy"
        alt={username}
        className="bg-white"
        src={picture.medium}
      ></img>
      <div>{username}</div>
      <div></div>
    </div>
  );
}
