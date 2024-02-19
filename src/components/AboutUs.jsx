export default function AboutUs() {
  return (
    <div
      className="w-full  flex flex-col   sm:flex-row sm:justify-evenly   sm:flex items-center   rounded-b-3xl
   py-5"
    >
      <div className="w-10/12 sm:w-5/12">
        <img
          src="/src/assets/imgs/about.jpg"
          alt="hero"
          className="rounded-full"
        />
      </div>
      <div className=" flex flex-col items-center w-10/12 sm:w-5/12">
        <h2 className="xl:text-5xl     text-4xl  font-bold p-8 text-center">
          About Us
        </h2>
        <p className="xl:text-2xl  text-xl py-4 text-center">
          Cat Helper
          是一個為流浪貓募款與送養的平台，為需要幫助的浪貓提供從醫療到收養的一站式服務
        </p>
        <p className="xl:text-2xl  text-xl text-center">
          你能夠贊助我們的浪貓的醫療費用，或是扮演更積極的角色:救援者、送養者
        </p>
      </div>
    </div>
  );
}
