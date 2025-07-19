import React from "react";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

const NavChip = ({ label, icon: Icon, selected = false, ...props }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const selectedBg = isDarkMode ? "#394457" : "#E8F0FE";

  return (
    <Chip
      label={label}
      variant="outlined"
      icon={<Icon color="primary" />}
      sx={{
        padding: "16px 14px",
        height: "40px",
        borderRadius: "20px",
        border: "none",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.08)",
        backgroundColor: selected ? selectedBg : "transparent",
        color: selected ? theme.palette.primary.main : theme.palette.text.primary,
        fontWeight: "500",
        fontSize: "14px",
        "&:hover": {
          backgroundColor: selected ? selectedBg : theme.palette.action.hover,
          borderColor: theme.palette.primary.main,
        },
        "& .MuiChip-icon": {
          marginLeft: "0px",
          marginRight: "8px",
        },
        "& .MuiChip-label": {
          paddingLeft: "0px",
          paddingRight: "0px",
        },
      }}
      {...props}
    />
  );
};

export default NavChip;
