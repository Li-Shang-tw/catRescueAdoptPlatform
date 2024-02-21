import banner from "../assets/imgs/banner.jpg";

export default function Hero() {
  return (
    <div
      className="w-full flex flex-col   sm:flex-row   sm:flex items-center pb-5 rounded-b-3xl"
      style={{ backgroundColor: "#ffe9d2" }}
    >
      <div className="w-2/3">
        <h2 className="xl:text-5xl  text-4xl  font-bold p-8 text-center">
          提供浪貓醫療與收養
        </h2>
        <p className="xl:text-2xl  text-xl text-center p-8">
          我們的使命是為流浪貓提供最好的照顧，並尋找一個溫暖的家。
        </p>
      </div>
      <div className="w-2/3">
        <img src={banner} alt="hero" className="rounded-full" />
      </div>
    </div>
  );
}
