export default function Hero() {
  return (
    <div
      className="w-full flex items-center"
      style={{ backgroundColor: "#ffe9d2" }}
    >
      <div className="w-2/3">
        <h2 className="text-5xl font-bold p-8">提供浪貓醫療與收養</h2>
        <p className="text-2xl p-8">
          我們的使命是為流浪貓提供最好的照顧，並尋找一個溫暖的家。
        </p>
      </div>
      <div className="w-2/3">
        <img
          src="/src/assets/imgs/banner.jpg"
          alt="hero"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
