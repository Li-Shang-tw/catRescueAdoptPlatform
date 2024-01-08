import CardInUserPage from "../components/CardInUserPage";
import CardItemInUserPage from "../components/CardItemInUserPage";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
//引入icon
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import KeyIcon from "@mui/icons-material/Key";

export default function AccountSetting() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  //開啟修改個人資料的modal
  const [openEditInfo, setOpenEditInfo] = useState(false);
  const handleOpenEditInfo = () => setOpenEditInfo(true);
  const handleCloseEditInfo = () => setOpenEditInfo(false);
  //開啟修改密碼的modal
  const [openPasswordReset, setOpenPasswordReset] = useState(false);
  const handleOpenPasswordReset = () => setOpenPasswordReset(true);
  const handleClosePasswordReset = () => setOpenPasswordReset(false);

  return (
    <div>
      <CardInUserPage title="帳戶">
        <div>
          <div onClick={handleOpenEditInfo}>
            <CardItemInUserPage>
              <div>
                <ModeEditIcon />
                <span className="ml-2">修改個人資料</span>
              </div>
            </CardItemInUserPage>
          </div>
          <div onClick={handleOpenPasswordReset}>
            <CardItemInUserPage>
              <div>
                <KeyIcon />
                <span className="ml-2">重設密碼</span>
              </div>
            </CardItemInUserPage>
          </div>
        </div>
      </CardInUserPage>

      <Modal
        open={openEditInfo}
        onClose={handleCloseEditInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>編輯個人資料</h1>
        </Box>
      </Modal>

      <Modal
        open={openPasswordReset}
        onClose={handleClosePasswordReset}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>重設密碼</h1>
        </Box>
      </Modal>
    </div>
  );
}
