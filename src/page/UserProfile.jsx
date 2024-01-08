// import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

import UserCard from "../components/UserCard";
import CardInUserPage from "../components/CardInUserPage";
import CardItemInUserPage from "../components/CardItemInUserPage";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import KeyIcon from "@mui/icons-material/Key";

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
    </div>
  );
}
