import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import LuggageIcon from "@mui/icons-material/Luggage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import TimelineIcon from '@mui/icons-material/Timeline';
import PaidIcon from '@mui/icons-material/Paid';
import LanguageIcon from '@mui/icons-material/Language';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const DrawerSection = ({ items, selectedLabel, highlightColor, theme }) => (
  <List>
    {items.map((item) => {
      const isSelected = item.label === selectedLabel;
      return (
        <ListItem
          key={item.label}
          button
          sx={{
            padding: "12px 20px",
            backgroundColor: isSelected ? highlightColor : undefined,
            borderTopRightRadius: isSelected ? "20px" : undefined,
            borderBottomRightRadius: isSelected ? "20px" : undefined,
            "&:hover": {
              backgroundColor: isSelected ? highlightColor : theme?.palette?.action?.hover,
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            },
          }}
        >
          <ListItemIcon sx={{ color: isSelected ? theme?.palette?.primary?.main : undefined }}>
            <item.icon color={isSelected ? "inherit" : "default"} fontSize="medium" />
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            sx={{
              "& .MuiListItemText-primary": {
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                color: isSelected ? theme?.palette?.primary?.main : undefined,
              },
            }}
          />
        </ListItem>
      );
    })}
  </List>
);

const NavigationDrawer = ({ open, onClose }) => {
  const theme = useTheme();

  const mainNavigationItems = [
    { label: "Travel", icon: LuggageIcon },
    { label: "Explore", icon: TravelExploreIcon },
    { label: "Flights", icon: FlightIcon },
    { label: "Hotels", icon: HotelIcon },
    { label: "Vacation rentals", icon: HouseIcon },
  ];

  const preferencesItems = [
    { label: "Tracked flight prices", icon: TimelineIcon },
    { label: "Price guarantee", icon: PaidIcon },
    { label: "Change language", icon: LanguageIcon },
    { label: "Change currency", icon: PriceChangeIcon },
    { label: "Change location", icon: EditLocationOutlinedIcon },
  ];

  const supportAndSettingsItems = [
    { label: "Flights settings", icon: SettingsOutlinedIcon },
    { label: "Feedback", icon: FeedbackOutlinedIcon },
    { label: "Help", icon: HelpOutlineOutlinedIcon },
  ];

  const isDarkMode = theme.palette.mode === "dark";
  const flightsListItemBgColor = isDarkMode ? "#394457" : "#E8F0FE";
  const drawerContent = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DrawerSection
        items={mainNavigationItems}
        selectedLabel="Flights"
        highlightColor={flightsListItemBgColor}
        theme={theme}
      />
      <hr style={{ border: `1px solid ${theme.palette.divider}`, margin: "8px 0" }} />
      <DrawerSection items={preferencesItems} theme={theme} />
      <div style={{ marginTop: 'auto' }}>
        <hr style={{ border: `1px solid ${theme.palette.divider}`, margin: "8px 0" }} />
        <DrawerSection items={supportAndSettingsItems} theme={theme} />
      </div>
    </div>
  );

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, 
      }}
      slotProps={{
        paper: {
          sx: {
            width: 270,
            height: "calc(100vh - 64px)",
            top: "72px",
            left: 0,
            backgroundColor: theme.palette.background.secondary,
            color: theme.palette.text.primary,
            borderRight: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.shadows[4],
            position: "fixed",
          }
        }
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default NavigationDrawer;
