import CardOutline from "./CardOutline";
export default function CardService({ children, title, image }) {
  return (
    <CardOutline style="w-5/12">
      <div className="flex flex-col items-center pb-5">
        <img src={image} alt="" className="w-full" />
        <h2 className="text-3xl font-bold p-4">{title}</h2>

        {children}
      </div>
    </CardOutline>
  );
}
