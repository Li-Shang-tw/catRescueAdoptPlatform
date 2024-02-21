export default function CardOutline({ children, style }) {
  return (
    <div className={`border-4 border-black rounded-xl    bg-white ${style}`}>
      {children}
    </div>
  );
}
