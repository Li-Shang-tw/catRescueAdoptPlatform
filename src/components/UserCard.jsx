import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";

export default function UserCard({ currentUser }) {
  function getLoactionName() {
    if (currentUser.location === "keelung") {
      return "基隆";
    } else if (
      currentUser.location === "taipei-city" ||
      currentUser.location === "taipei"
    ) {
      return "台北市";
    } else if (currentUser.location === "new-taipei") {
      return "新北市";
    } else if (currentUser.location === "taoyuan") {
      return "桃園市";
    } else if (
      currentUser.location === "hsinchu-city" ||
      currentUser.location === "hsinchu"
    ) {
      return "新竹市";
    } else if (currentUser.location === "hsinchu-county") {
      return "新竹縣";
    } else if (currentUser.location === "miaoli") {
      return "苗栗縣";
    } else if (
      currentUser.location === "taichung-city" ||
      currentUser.location === "taichung"
    ) {
      return "台中市";
    } else if (currentUser.location === "changhua") {
      return "彰化縣";
    } else if (currentUser.location === "nantou") {
      return "南投縣";
    } else if (currentUser.location === "yunlin") {
      return "雲林縣";
    } else if (
      currentUser.location === "chiayi-city" ||
      currentUser.location === "chiayi"
    ) {
      return "嘉義市";
    } else if (currentUser.location === "chiayi-county") {
      return "嘉義縣";
    } else if (
      currentUser.location === "tainan-city" ||
      currentUser.location === "tainan"
    ) {
      return "台南市";
    } else if (
      currentUser.location === "kaohsiung-city" ||
      currentUser.location === "kaohsiung"
    ) {
      return "高雄市";
    } else if (currentUser.location === "pingtung") {
      return "屏東縣";
    } else if (currentUser.location === "yilan") {
      return "宜蘭縣";
    } else if (currentUser.location === "hualien") {
      return "花蓮縣";
    } else if (currentUser.location === "taitung") {
      return "台東縣";
    } else if (currentUser.location === "penghu") {
      return "澎湖縣";
    } else if (currentUser.location === "kinmen") {
      return "金門縣";
    } else if (currentUser.location === "lienchiang") {
      return "連江縣";
    } else {
      return "其他";
    }
  }

  return (
    <>
      <div className="flex justify-center font-medium ">
        <div className="w-1/2 flex justify-around border-2 px-10 py-4 rounded-xl ">
          <div>
            <Avatar
              alt={currentUser.name}
              src={currentUser.avatar}
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div>
            <p className="mb-2 text-xl">{currentUser.name}</p>
            <div>
              <span className="mr-2 mb-1">
                {currentUser.role === "rescuer" ? "救援者" : "認養者"}
              </span>
              {currentUser.role === "rescuer" ? (
                <MedicationIcon />
              ) : (
                <CastleIcon />
              )}
            </div>
            <p className="mb-1">{getLoactionName()}</p>
            <p className="mb-1">{currentUser.email}</p>
            <div className="flex">
              <p className="mr-3">救援數: {currentUser.rescueCats.length}</p>
              <p>認養數: {currentUser.adoptCats.length}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
