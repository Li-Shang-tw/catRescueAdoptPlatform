// import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import UserCard from "../components/UserCard";
import CardInUserPage from "../components/CardInUserPage";
import CardItemInUserPage from "../components/CardItemInUserPage";
//引入icon
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import KeyIcon from "@mui/icons-material/Key";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";

export default function UserProfile() {
  //比對id與登入者的id是否相同
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  console.log(currentUser);
  // const { id } = useParams();
  return (
    <div>
      <div className="mb-10">
        <UserCard currentUser={currentUser} />
      </div>

      <CardInUserPage title="帳戶">
        <div>
          <CardItemInUserPage>
            <div>
              <ModeEditIcon />
              <span className="ml-2">修改個人資料</span>
            </div>
          </CardItemInUserPage>

          <CardItemInUserPage>
            <div>
              <KeyIcon />
              <span className="ml-2">重設密碼</span>
            </div>
          </CardItemInUserPage>
        </div>
      </CardInUserPage>
      <CardInUserPage title="我的專案">
        <div>
          <Link to={`/rescue/myproject/${currentUser.id}`}>
            <CardItemInUserPage>
              <div>
                <MedicationIcon />
                <span className="ml-2">救援專案</span>
              </div>
            </CardItemInUserPage>
          </Link>
          <Link to={`/adopt/myproject/${currentUser.id}`}>
            <CardItemInUserPage>
              <div>
                <CastleIcon />
                <span className="ml-2">送養專案</span>
              </div>
            </CardItemInUserPage>
          </Link>
        </div>
      </CardInUserPage>
      <CardInUserPage title="我的成就">
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
        </div>
      </CardInUserPage>
    </div>
  );
}
