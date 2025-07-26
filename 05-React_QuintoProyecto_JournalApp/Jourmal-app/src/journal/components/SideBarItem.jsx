import { useMemo } from "react";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [], onSelectNote }) => {
  const onClickNote = () => {
    if (onSelectNote) {
      onSelectNote({ id, title, body, date, imageUrls });
    }
    console.log('Nota seleccionada:', { id, title, body, date, imageUrls });
  };

  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 25
    ? body.substring(0, 25) + '...'
    : body;
  }, [body]);




  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={newBody} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </div>
  );
};
