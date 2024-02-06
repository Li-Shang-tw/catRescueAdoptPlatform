import Loading from "./Loading";
import CatCard from "./CatCard";

export default function AdoptingCardList({ currentCats }) {
  let cardsList;
  //如果尚未有資料的話
  if (currentCats === null) {
    return <Loading />;
  } else if (currentCats === "Not found" || !currentCats) {
    return <p>暫時沒有送養貓貓的資料</p>;
  }

  cardsList = currentCats.map((item) => (
    <li key={item.id}>
      <CatCard item={item} type="adopt" />
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
