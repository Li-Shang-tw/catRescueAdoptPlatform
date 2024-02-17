import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import { useState } from "react";

import OtherUserProjects from "./OtherUserProjects";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs({ rescueList, adoptList, id }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="救援中" {...a11yProps(0)} />
          <Tab label="送養中" {...a11yProps(1)} />
          <Tab label="救援歷史" {...a11yProps(2)} />
          <Tab label="送養歷史" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OtherUserProjects
          projectList={rescueList}
          type="rescuing"
          userId={id}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <OtherUserProjects
          projectList={adoptList}
          type="adopting"
          userId={id}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <OtherUserProjects
          projectList={rescueList}
          type="rescued"
          userId={id}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <OtherUserProjects projectList={adoptList} type="adopted" userId={id} />
      </CustomTabPanel>
    </Box>
  );
}
