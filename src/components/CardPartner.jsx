import CardOutline from "./CardOutline";
export default function CardPartner({ image, style }) {
  return (
    <CardOutline style={style}>
      <img src={image} alt="" className="w-full" />
    </CardOutline>
  );
}
