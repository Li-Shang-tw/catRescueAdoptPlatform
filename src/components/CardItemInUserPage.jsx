import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CardItemInUserPage({ children }) {
  return (
    <>
      <div className="flex justify-between  items-center py-2 duration-100 hover:bg-yellow-400 hover:rounded-xl hover:p-2">
        <div className="text-lg">{children}</div>
        <ArrowForwardIosIcon />
      </div>
    </>
  );
}
