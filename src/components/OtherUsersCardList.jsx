import { Link } from "react-router-dom";

import Loading from "./Loading";
import UserCard from "./UserCard";

export default function OtherUsersCardList({ currentCats }) {
  let cardsList;
  //如果尚未有資料的話
  if (currentCats === null) {
    return <Loading />;
  } else if (!currentCats || currentCats === "Not foun") {
    return <p>暫時沒有用戶資料</p>;
  }

  cardsList = currentCats.map((item) => (
    <li key={item.id}>
      <Link to={`/otherUser/${item.id}`}>
        <UserCard user={item} style="flex-col py-4" />
      </Link>
    </li>
  ));

  return (
    <>
      <ul className="grid  gap-4 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 mb-4">
        {cardsList}
      </ul>
    </>
  );
}
