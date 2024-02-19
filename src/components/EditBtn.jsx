import Button from "@mui/material/Button";
export default function EditBtn({ children }) {
  return (
    <>
      <Button variant="outlined" color="error" disabled>
        <span className="font-semibold">{children}</span>
      </Button>
    </>
  );
}
