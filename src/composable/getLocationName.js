function getLoactionName(location) {
  if (location === "keelung") {
    return "基隆";
  } else if (location === "taipei-city" || location === "taipei") {
    return "台北市";
  } else if (location === "new-taipei") {
    return "新北市";
  } else if (location === "taoyuan") {
    return "桃園市";
  } else if (location === "hsinchu-city" || location === "hsinchu") {
    return "新竹市";
  } else if (location === "hsinchu-county") {
    return "新竹縣";
  } else if (location === "miaoli") {
    return "苗栗縣";
  } else if (location === "taichung-city" || location === "taichung") {
    return "台中市";
  } else if (location === "changhua") {
    return "彰化縣";
  } else if (location === "nantou") {
    return "南投縣";
  } else if (location === "yunlin") {
    return "雲林縣";
  } else if (location === "chiayi-city" || location === "chiayi") {
    return "嘉義市";
  } else if (location === "chiayi-county") {
    return "嘉義縣";
  } else if (location === "tainan-city" || location === "tainan") {
    return "台南市";
  } else if (location === "kaohsiung-city" || location === "kaohsiung") {
    return "高雄市";
  } else if (location === "pingtung") {
    return "屏東縣";
  } else if (location === "yilan") {
    return "宜蘭縣";
  } else if (location === "hualien") {
    return "花蓮縣";
  } else if (location === "taitung") {
    return "台東縣";
  } else if (location === "penghu") {
    return "澎湖縣";
  } else if (location === "kinmen") {
    return "金門縣";
  } else if (location === "lienchiang") {
    return "連江縣";
  } else {
    return "其他";
  }
}

export { getLoactionName };
