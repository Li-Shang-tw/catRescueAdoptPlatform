export default function Carousel({ image }) {
  return (
    <div className="bg-black mb-5">
      <img src={image} alt="image" className="w-2/5 mx-auto rounded" />
    </div>
  );
}
