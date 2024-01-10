// import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import UserCard from "../components/UserCard";
import CardInUserPage from "../components/CardInUserPage";
import CardItemInUserPage from "../components/CardItemInUserPage";
import AccountSetting from "../components/AccountSetting";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
import PersonIcon from "@mui/icons-material/Person";

export default function UserProfile() {
  //比對id與登入者的id是否相同
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  console.log(currentUser);
  // const { id } = useParams();
  return (
    <div>
      <div className="mb-10 flex justify-center ">
        <div className="w-1/2">
          <UserCard currentUser={currentUser} />
        </div>
      </div>
      <AccountSetting />

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
