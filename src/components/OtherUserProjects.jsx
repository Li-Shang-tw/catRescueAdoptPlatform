export default function OtherUserProjects({ projectList, type }) {
  //當以載入的資料為空時，顯示暫無資料
  if (projectList && projectList.length === 0) {
    return <p>暫無資料</p>;
  }

  return <>有資料</>;
}
