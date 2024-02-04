// import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import UserCard from "../components/UserCard";
import CardInUserPage from "../components/CardInUserPage";
import CardItemInUserPage from "../components/CardItemInUserPage";
import AccountSetting from "../components/AccountSetting";
import CastleIcon from "@mui/icons-material/Castle";
import CastleOutlinedIcon from "@mui/icons-material/CastleOutlined";
import MedicationIcon from "@mui/icons-material/Medication";
import PersonIcon from "@mui/icons-material/Person";
import CheckUserLogin from "../components/CheckUserLogin";
import ModalSet from "../components/ModalSet";
import RequestingAdoptsModal from "../components/RequestingAdoptsModal";

export default function UserProfile() {
  //比對id與登入者的id是否相同
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  //當currentUser為空值時，不執行下面的程式碼
  if (!currentUser) {
    return (
      <>
        <CheckUserLogin />
      </>
    );
  }
  return (
    <div style={{ backgroundColor: "#ffe9d2" }} className="pt-7">
      <CheckUserLogin />
      <div className="mb-10 flex justify-center ">
        <div className="w-1/2">
          <UserCard user={currentUser} style="justify-around" />
        </div>
      </div>
      <AccountSetting />
      {currentUser && currentUser.role === "rescuer" ? (
        <>
          <CardInUserPage title="我的專案">
            <div>
              <Link to={`/myproject/${currentUser.id}?type=rescue`}>
                <CardItemInUserPage>
                  <div>
                    <MedicationIcon />
                    <span className="ml-2">救援專案</span>
                  </div>
                </CardItemInUserPage>
              </Link>
              <Link to={`/myproject/${currentUser.id}?type=adopt`}>
                <CardItemInUserPage>
                  <div>
                    <CastleIcon />
                    <span className="ml-2">送養專案</span>
                  </div>
                </CardItemInUserPage>
              </Link>
              <Link to={`/requestProject/${currentUser.id}`}>
                <CardItemInUserPage>
                  <div>
                    <CastleIcon />
                    <span className="ml-2">被請求的送養專案</span>
                  </div>
                </CardItemInUserPage>
              </Link>
            </div>
          </CardInUserPage>
          <CardInUserPage title="我的成就">
            <div>
              <Link to={`/myAchievement/${currentUser.id}/?q=rescue`}>
                <CardItemInUserPage>
                  <div>
                    <MedicationIcon />
                    <span className="ml-2">救援專案</span>
                  </div>
                </CardItemInUserPage>
              </Link>
              <Link to={`/myAchievement/${currentUser.id}/?q=adopt`}>
                <CardItemInUserPage>
                  <div>
                    <CastleIcon />
                    <span className="ml-2">送養專案</span>
                  </div>
                </CardItemInUserPage>
              </Link>
            </div>
          </CardInUserPage>
        </>
      ) : (
        <CardInUserPage title="我的專案與成就">
          <div>
            <ModalSet
              btn={
                <CardItemInUserPage>
                  <div>
                    <CastleOutlinedIcon />
                    <span className="ml-2">請求中的專案</span>
                  </div>
                </CardItemInUserPage>
              }
              form={<RequestingAdoptsModal />}
            />

            <CardItemInUserPage>
              <div>
                <CastleIcon />
                <span className="ml-2">已認養專案</span>
              </div>
            </CardItemInUserPage>
          </div>
        </CardInUserPage>
      )}

      <CardInUserPage title="追蹤的專案/用戶">
        <div>
          <Link to={`/rescue/myproject/${currentUser.id}/?q=achievement`}>
            <CardItemInUserPage>
              <div>
                <MedicationIcon />
                <span className="ml-2">救援專案</span>
              </div>
            </CardItemInUserPage>
          </Link>
          <Link to={`/adopt/myproject/${currentUser.id}/?q=achievement`}>
            <CardItemInUserPage>
              <div>
                <CastleIcon />
                <span className="ml-2">送養專案</span>
              </div>
            </CardItemInUserPage>
          </Link>
          <Link to={`/adopt/myproject/${currentUser.id}/?q=achievement`}>
            <CardItemInUserPage>
              <div>
                <PersonIcon />
                <span className="ml-2">追蹤的用戶</span>
              </div>
            </CardItemInUserPage>
          </Link>
        </div>
      </CardInUserPage>
    </div>
  );
}
