import rescueData from "../assets/rescueData.json";
import { Pane, Badge } from "evergreen-ui";
import { HeartIcon } from "evergreen-ui";

export default function Card() {
  const cardsList = rescueData.map((item) => (
    <li
      key={item.id}
      //決定邊框顏色的className
      className={
        item.riskLevel === "高"
          ? "border-red-700 border-2 hover:scale-110 shadow border-2 rounded-xl"
          : item.riskLevel === "中"
          ? "border-yellow-700 border-2 hover:scale-110 shadow border-2 rounded-xl"
          : item.riskLevel === "低"
          ? "border-green-700 border-2 hover:scale-110 shadow border-2 rounded-xl"
          : "border-gray-400 border-2 hover:scale-110 shadow border-2 rounded-xl"
      }
    >
      <div className="relative">
        <img
          className="rounded-md rounded-b-3xl mb-2.5 "
          src={
            item.images[0] ? item.images[0] : "src/assets/imgs/rescuephoto2.jpg"
          }
          alt="rescueImg"
        />
        <HeartIcon
          size={29}
          color="gray200"
          className="absolute top-2 right-2"
        />
      </div>
      <div className="mx-1.5">
        <h3 className="mb-px font-bold text-lg">
          {item.name ? item.name : "待救援的貓貓"}
        </h3>
        <div>
          <span className="mb-px mr-2.5">{item.ageCategory}</span>
          <span className="mb-px">{item.location}</span>
        </div>
        <div className="flex ">
          <Pane>
            {item.riskLevel === "高" && (
              <Badge color="red" marginRight={8}>
                高
              </Badge>
            )}
            {item.riskLevel === "中" && (
              <Badge color="yellow" marginRight={8}>
                中
              </Badge>
            )}
            {item.riskLevel === "低" && (
              <Badge color="green" marginRight={8}>
                低
              </Badge>
            )}
            {item.riskLevel === "" && (
              <Badge color="neutral" marginRight={8}>
                未分類
              </Badge>
            )}
          </Pane>
          <p className="mb-5">{item.symptoms}</p>
        </div>
      </div>
    </li>
  ));
  return (
    <>
      <ul className="grid  gap-4 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2">
        {cardsList}
      </ul>
    </>
  );
}
