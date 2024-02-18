import Button from "@mui/material/Button";
export default function LogOut() {
  return (
    <div className="text-center">
      <h4 className="font-bold mb-5">你確定要登出嗎?</h4>
      <Button variant="contained" color="error">
        <span className="font-semibold">登出</span>
      </Button>
    </div>
  );
}
