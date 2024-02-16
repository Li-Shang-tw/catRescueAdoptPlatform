export default function AboutUs() {
  return (
    <div className="w-full flex items-center justify-evenly py-5">
      <div className="w-5/12">
        <img
          src="/src/assets/imgs/about.jpg"
          alt="hero"
          className="rounded-full"
        />
      </div>
      <div className=" flex flex-col items-center w-5/12">
        <h2 className="text-5xl font-bold p-8">About Us</h2>
        <p className="text-2xl p-4">
          Cat Helper
          是一個為流浪貓募款與送養的平台，為需要幫助的浪貓提供從醫療到收養的一站式服務
        </p>
        <p className="text-2xl ">
          你能夠贊助我們的浪貓的醫療費用，或是扮演更積極的角色:救援者、送養者
        </p>
      </div>
    </div>
  );
}
