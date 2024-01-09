export default function interpretAgeCatergory(code) {
  switch (code) {
    case "1":
      return "幼貓";
    case "2":
      return "成貓";

    default:
      return "未知年龄";
  }
}
