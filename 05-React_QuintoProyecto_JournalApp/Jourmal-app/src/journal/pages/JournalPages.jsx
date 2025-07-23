//import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { createNota } from "../../helpers/createNota";
//import { startNewNote } from '../../store/journal/thunks';

export const JournalPages = () => {
  const { uid } = useSelector((state) => state.auth);
  const [active, setActive] = useState(null);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => createNota(uid),
    onSuccess: (newNote) => {
      setActive(newNote);
      queryClient.invalidateQueries({ queryKey: ["notas", uid] });
    },
  });

  const onNoteDeleted = (note) => {
    if (active?.id === note.id) {
      setActive(null);
    }
  };

  //const dispatch = useDispatch();
  //const {isSaving, active} = useSelector(state => state.journal || { isSaving: false });
  //const onClickNewNote  =() => {
  //  dispatch(startNewNote())
  //  console.log('Crear una nueva nota');
  //}

  const onClickNewNote = () => {
    mutate();
  };

  return (
    <JournalLayout onSelectNote={setActive}>
      {active ? (
        <NoteView note={active} onNoteDeleted={() => setActive(null)} />
      ) : (
        <NothingSelectedView />
      )}
      <IconButton
        size="large"
        disabled={isPending}
        onClick={onClickNewNote}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
