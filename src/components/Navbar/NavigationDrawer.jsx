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

const NavigationDrawer = ({ open, onClose }) => {
  const theme = useTheme();

  const navigationItems = [
    { label: "Travel", icon: LuggageIcon },
    { label: "Explore", icon: TravelExploreIcon },
    { label: "Flights", icon: FlightIcon },
    { label: "Hotels", icon: HotelIcon },
    { label: "Vacation rentals", icon: HouseIcon },
  ];

  const drawer = (
    <div>
      <List sx={{ paddingTop: "16px" }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            button
            sx={{
              padding: "12px 24px",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ListItemIcon>
              <item.icon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: "500",
                  fontSize: "14px",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
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
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          height: "calc(100vh - 64px)",
          top: "64px", 
          left: 0,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderRight: `1px solid ${theme.palette.divider}`,
          boxShadow: theme.shadows[4],
          position: "fixed",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default NavigationDrawer;
