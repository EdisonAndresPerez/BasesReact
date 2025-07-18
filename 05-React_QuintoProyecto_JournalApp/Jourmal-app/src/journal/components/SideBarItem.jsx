import { useMemo } from "react";
import { Grid, ListItem,  ListItemButton,  ListItemIcon, ListItemText, } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from '../../store/journal';
import { useDispatch } from "react-redux";

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
    console.log('Nota seleccionada:', { id, title, body, date, imageUrls });
  }

  const newTitle = useMemo(() => {
    return title.length > 17 
    ? title.substring(0,17) + '...'
    : title;
  }, [title]);

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={body} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </div>
  );
};
