import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CardOutline from "./CardOutline";

export default function ListOfDonater({ rescueProject }) {
  //排除初次render時，rescueProject還沒有資料的情況
  if (!rescueProject) return <></>;
  if (!rescueProject.DonateRecord) return <></>;
  const donaterList = rescueProject.DonateRecord.map((donater) => (
    <li className="flex justify-between px-4 py-3 shadow" key={donater.name}>
      <p>
        <VolunteerActivismIcon className="mr-2" />
        {donater.name}
      </p>
      <p>{donater.amount}</p>
    </li>
  ));

  return (
    <div className="mt-5">
      <CardOutline>
        <h3 className="text-lg font-bold p-4">捐款者名單</h3>
        <ul>{donaterList}</ul>
      </CardOutline>
    </div>
  );
}
