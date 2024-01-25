import { useEffect, useState } from "react";
import { getCatAPI } from "../callAPI";
export default function OtherUserProjects({ projectList, type }) {
  //設定初始狀態
  const [projects, setProjects] = useState([]);
  //用useEffect來取得資料
  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        projectList.map(async (id) => {
          const cat = await getCatAPI(id);
          return cat;
        })
      );
      //按照type來篩選資料

      let filterCats = [];
      switch (type) {
        case "rescuing":
          filterCats = data.filter((item) => item.state === "1");
          break;
        case "adopting":
          filterCats = data.filter((item) => item.state === "3");
          break;
        case "rescued":
          filterCats = data.filter((item) => item.state === "2");
          break;
        case "adopted":
          filterCats = data.filter((item) => item.state === "4");
          break;
      }
      console.log(filterCats);
      setProjects(filterCats);
    };
    fetchData();
  }, []);

  //當以載入的資料為空時，顯示暫無資料
  if (projectList && projectList.length === 0) {
    return <p>暫無資料</p>;
  }
  return <>有資料</>;
}
