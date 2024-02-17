import Loading from "./Loading";
import CatCard from "./CatCard";

export default function AdoptingCardList({ currentData }) {
  //如果尚未有資料的話
  if (currentData === null) {
    return <Loading />;
  } else if (currentData === "Not found" || !currentData) {
    return <p>暫時沒有送養貓貓的資料</p>;
  }

  const cardsList = currentData?.map((item) => (
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
