import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import LuggageIcon from "@mui/icons-material/Luggage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import DarkModeToggle from "./DarkModeToggle";
import NavChip from "./NavChip";
import NavigationDrawer from "./NavigationDrawer";

export default function Navbar() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          padding: "4px",
        }}
      >
        <Toolbar
          sx={{ height: "64px !important", minHeight: "64px !important" }}
        >
          {/* Left section - Menu button and Logo */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: "8px" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "400",
              fontSize: "22px",
              lineHeight: "28px",
            }}
          >
            Google
          </Typography>

          {/* Center section - Navigation chips */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              fontWeight: "500",
              marginLeft: "40px",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              '@media (max-width:1000px)': {
                display: 'none',
              },
            }}
          >
            <NavChip label="Travel" icon={LuggageIcon} />
            <NavChip label="Explore" icon={TravelExploreIcon} />
            <NavChip label="Flights" icon={FlightIcon} selected />
            <NavChip label="Hotels" icon={HotelIcon} />
            <NavChip label="Vacation rentals" icon={HouseIcon} />
          </Stack>

          {/* Right section - User controls and profile */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ marginLeft: "auto" }}
          >
            <DarkModeToggle />
            <IconButton
              size="large"
              color="inherit"
              aria-label="Google apps"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginLeft: "8px",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <AppsIcon />
            </IconButton>
            <Avatar
              sx={{
                width: "32px",
                height: "32px",
                fontSize: "16px",
                marginLeft: "8px",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              A
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <NavigationDrawer open={drawerOpen} onClose={handleDrawerToggle} />
      {/* Espacio para que el contenido no quede oculto detrás del AppBar */}
      <div style={{ paddingTop: "64px" }} />
    </>
  );
}
