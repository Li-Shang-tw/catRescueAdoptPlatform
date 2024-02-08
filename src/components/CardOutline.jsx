export default function CardOutline({ children, style }) {
  return (
    <div
      className={`border-4 border-black rounded-xl duration-100 hover:scale-110   bg-white ${style}`}
    >
      {children}
    </div>
  );
}
