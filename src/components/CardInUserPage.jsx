export default function CardInUserPage({ title, children }) {
  return (
    <>
      <div className="flex justify-center font-medium mb-10">
        <div className="w-1/2 border-2 px-10 py-4 rounded-xl bg-white">
          <h3 className="text-xl font-bold mb-5">{title}</h3>
          {children}
        </div>
      </div>
    </>
  );
}
