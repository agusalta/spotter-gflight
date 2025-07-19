import * as React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import CheckIcon from "@mui/icons-material/Check";
import { useDarkMode } from "../../context/DarkModeContext";

const modeOptions = [
  {
    value: "system",
    label: "Use device default",
    icon: <SettingsBrightnessIcon fontSize="small" />,
  },
  {
    value: "dark",
    label: "Dark Theme",
    icon: <WbSunnyOutlinedIcon fontSize="small" />,
  },
  {
    value: "light",
    label: "Light Theme",
    icon: <DarkModeIcon fontSize="small" />,
  },
];

export default function DarkModeToggle() {
  const { mode, setMode } = useDarkMode();
  const current =
    modeOptions.find((opt) => opt.value === mode) || modeOptions[0];
  return (
    <Select
      value={mode}
      onChange={(e) => setMode(e.target.value)}
      variant="standard"
      disableUnderline
      IconComponent={null}
      sx={{
        minWidth: 40,
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          p: 0,
        },
      }}
      renderValue={() => current.icon}
      MenuProps={{
        PaperProps: {
          sx: {
            minWidth: 320,
            maxWidth: 380,
            minHeight: 120,
          },
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      }}
      aria-label="Select a theme"
    >
      <ListSubheader
        sx={{
          fontWeight: 600,
          fontSize: 14,
          color: "text.primary",
          bgcolor: "background.paper",
        }}
      >
        Appearance
      </ListSubheader>
      <Divider />
      {modeOptions.map((opt) => (
        <MenuItem
          key={opt.value}
          value={opt.value}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {mode === opt.value && <CheckIcon fontSize="small" sx={{ mr: 1 }} />}
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  );
}
