import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
export default function ModalSet({ btn, form }) {
  //設定modal的開關狀態與事件
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //設定modal的style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div onClick={handleOpen}>{btn}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{form}</Box>
      </Modal>
    </>
  );
}
