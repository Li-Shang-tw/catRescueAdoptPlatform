import CardOutline from "./CardOutline";
export default function CardInUserPage({ title, children }) {
  return (
    <>
      <div className="flex justify-center font-medium pb-10">
        <CardOutline style="w-1/2 px-5 py-4">
          <h3 className="text-xl font-bold mb-5">{title}</h3>
          {children}
        </CardOutline>
      </div>
    </>
  );
}
