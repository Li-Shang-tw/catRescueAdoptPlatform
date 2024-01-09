import CardInUserPage from "../components/CardInUserPage";
import CardItemInUserPage from "../components/CardItemInUserPage";
import ModalSet from "./ModalSet";
import EditFormForPersonalInfo from "../components/EditFormForPersonalInfo";

//引入icon
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import KeyIcon from "@mui/icons-material/Key";

export default function AccountSetting() {
  return (
    <>
      <CardInUserPage title="帳戶">
        <div>
          <ModalSet
            btn={
              <CardItemInUserPage>
                <div>
                  <ModeEditIcon />
                  <span className="ml-2">修改個人資料</span>
                </div>
              </CardItemInUserPage>
            }
            form={
              <div>
                <EditFormForPersonalInfo />
              </div>
            }
          />
          <ModalSet
            btn={
              <CardItemInUserPage>
                <div>
                  <KeyIcon />
                  <span className="ml-2">重設密碼</span>
                </div>
              </CardItemInUserPage>
            }
            form={
              <div>
                <h1>重設密碼</h1>
              </div>
            }
          />
        </div>
      </CardInUserPage>
    </>
  );
}
