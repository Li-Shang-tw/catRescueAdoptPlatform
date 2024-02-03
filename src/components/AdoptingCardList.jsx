import { Link } from "react-router-dom";
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCatergory from "../composable/interpretAgeCatergory";
import Loading from "./Loading";

export default function AdoptingCardList({ currentCats }) {
  let cardsList;
  //如果尚未有資料的話
  if (currentCats === null) {
    return <Loading />;
  } else if (currentCats === "Not found" || !currentCats) {
    return <p>暫時沒有送養貓貓的資料</p>;
  }

  cardsList = currentCats.map((item) => (
    <li
      key={item.id}
      className=" shadow  rounded-xl duration-100 hover:scale-110  hover:shadow-lg bg-white"
    >
      <Link to={`/adopt/${item.id}`}>
        <div className="relative">
          <img
            className="rounded-md rounded-b-3xl mb-2.5 "
            src={item.image ? item.image : "/src/assets/imgs/rescuephoto2.jpg"}
            alt="rescueImg"
          />
        </div>
        <div className="mx-1.5">
          <h3 className="mb-px font-bold text-lg">
            {item.name ? item.name : "可愛的貓貓"}
          </h3>
          <div>
            <span className="mb-px mr-2.5">
              {interpretAgeCatergory(item.ageCategory)}
            </span>

            <span className="mb-px">{item.breed}</span>
          </div>
          <div className="flex items-baseline mt-1">
            <p>{getLoactionName(item.location)}</p>
          </div>
        </div>
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
