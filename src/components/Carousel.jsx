export default function Carousel({ image }) {
  return (
    <div className="bg-black mb-5 flex justify-center">
      {image ? (
        <img src={image} alt="image" className="w-2/5 mx-auto rounded" />
      ) : (
        <img
          className="w-2/5  rounded-lg"
          src="/src/assets/imgs/rescuephoto2.jpg"
          alt="fakeImage"
        />
      )}
    </div>
  );
}
