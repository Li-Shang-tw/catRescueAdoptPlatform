import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Sort({ sort }) {
  const [option, setOption] = useState("timeDes");
  function handleOptionChange(e) {
    sort(e.target.value);
    setOption(e.target.value);
  }
  return (
    <div className="flex justify-end mb-2">
      <Box sx={{ minWidth: 120 }}>
        <FormControl>
          <InputLabel id="sort-select-label"> 排序</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={option}
            label="Sort"
            onChange={handleOptionChange}
          >
            <MenuItem value={"timeDes"}>新>舊(時間)</MenuItem>
            <MenuItem value={"timeAsc"}>舊>新(時間)</MenuItem>
            <MenuItem value={"riskDes"}>高>低(危險度)</MenuItem>
            <MenuItem value={"riskAsc"}>低>高(危險度)</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
