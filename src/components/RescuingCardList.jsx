import Chip from "@mui/material/Chip";

import Loading from "./Loading";
import CatCard from "./CatCard";

export default function Card({ currentData }) {
  if (!currentData) {
    return <Loading />;
  } else if (currentData === "Not foun") {
    return <p>暫時沒有救援貓貓的專案</p>;
  }

  const cardsList = currentData?.map((item) => (
    <li key={item.id}>
      <CatCard item={item} type="rescue" />
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
