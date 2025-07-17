import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)", // Morado suave degradado
            borderBottomRightRadius: 24,
            boxShadow: "2px 0 12px 0 rgba(142,36,170,0.10)",
          },
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, mb: 1 }}>
          <Avatar sx={{ bgcolor: "#8e24aa", width: 40, height: 40, fontWeight: "bold", fontSize: 22 }}>
            {displayName ? displayName[0].toUpperCase() : "U"}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" noWrap component="div" fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              Bienvenido <span role="img" aria-label="saludo">👋</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "#6d1b7b", fontWeight: "bold" }}>
              {displayName}
            </Typography>
          </Box>
        </Toolbar>
        <Divider sx={{ mb: 1 }} />

        <List sx={{ px: 1 }}>
          {notes.map((notes) => (
            <SideBarItem
              key={notes.id}
              title={notes.title}
              body={notes.body}
              id={notes.id}
              date={notes.date}
              imageUrls={notes.imageUrls}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
