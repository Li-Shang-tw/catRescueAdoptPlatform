export default function interpretGender(genderCode) {
  switch (genderCode) {
    case "0":
      return "未知";
    case "1":
      return "男生";
    case "2":
      return "女生";
  }
}
