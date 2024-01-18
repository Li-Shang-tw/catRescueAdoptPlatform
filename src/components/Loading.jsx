import CircularProgress from "@mui/material/CircularProgress";
export default function Loading() {
  return (
    <div className="flex justify-center mt-20">
      <CircularProgress color="inherit" size={100} />
    </div>
  );
}
