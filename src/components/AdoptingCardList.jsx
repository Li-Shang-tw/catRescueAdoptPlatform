import { Link } from "react-router-dom";
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCatergory from "../composable/interpretAgeCatergory";
import Loading from "./Loading";
import Avatar from "@mui/material/Avatar";

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
      className=" border-4 border-black rounded-xl duration-100 hover:scale-110   bg-white"
    >
      <Link to={`/adopt/${item.id}`}>
        <div className="flex flex-col items-center ">
          {/* <Avatar
            alt="貓貓"
            src="/src/assets/imgs/rescuephoto2.jpg"
            sx={{ width: 250, height: 250 }}
          /> */}
          <img
            className=" mb-2.5 rounded-b-sm"
            src="/src/assets/imgs/rescuephoto2.jpg"
            alt="rescueImg"
          />

          <div className="my-5 flex flex-col items-center">
            <h3 className="mb-px font-bold text-2xl">
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
