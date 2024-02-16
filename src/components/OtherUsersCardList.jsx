import { Link } from "react-router-dom";

import Loading from "./Loading";
import UserCard from "./UserCard";
import Nodata from "./NoData";

export default function OtherUsersCardList({ currentCats }) {
  let cardsList;
  //如果尚未有資料的話
  if (currentCats === null) {
    return <Loading />;
  } else if (currentCats?.length === 0 || currentCats === "Not foun") {
    return <Nodata />;
  }
  console.log(currentCats);
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
