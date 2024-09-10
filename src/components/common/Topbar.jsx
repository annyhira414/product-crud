import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = ({ title }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        maxWidth: "auto",
        ml: sizeConfigs.sidebar.width,
        boxShadow: "1px",
        borderRadius: "5px",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
        top: "10px",
        left: "50px",
        right: "20px",
        height: "50px",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
