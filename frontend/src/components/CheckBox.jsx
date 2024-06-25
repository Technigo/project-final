import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ColorCheckbox = () => {
  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: "#020209",
          "&.Mui-checked": {
            color: "#3B744E",
          },
        }}
      />
    </div>
  );
};