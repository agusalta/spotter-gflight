import React from "react";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

const NavChip = ({ label, icon: Icon, ...props }) => {
  const theme = useTheme();

  return (
    <Chip
      label={label}
      variant="outlined"
      icon={<Icon color="primary" />}
      sx={{
        padding: "16px 14px",
        height: "40px",
        borderRadius: "20px",
        borderColor: theme.palette.divider,
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        fontWeight: "500",
        fontSize: "14px",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
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
