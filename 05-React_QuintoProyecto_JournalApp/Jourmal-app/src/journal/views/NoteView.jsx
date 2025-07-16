import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, IconButton } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { useEffect } from "react";
import { setActiveNote, startSaveNote, startUploadingFiles, startDeleteNote } from "../../store/journal";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dataString = useMemo(() => {
    console.log("Fecha de la nota:", date);
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire(" nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote(formState));
    console.log("Guardando nota:", formState);
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    console.log(target.files);
     dispatch(startUploadingFiles(target.files));
  };

 const onDelete = () => {
  dispatch(startDeleteNote(note.id));
};



  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dataString}
        </Typography>
      </Grid>
      <Grid item>
        <input type="file" id="fileInput" multiple onChange={onFileInputChange} style={{ display: "none" }} />
        <label htmlFor="fileInput">
          <IconButton 
            color="primary"
            disabled={isSaving}
            component="span">
            <UploadOutlined />
          </IconButton>
        </label>

        <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <Grid>
        <button
        onClick={onDelete}
        >Eliminar</button>
      </Grid>

      <ImageGallery images={note.imageUrls} />
    
    </Grid>
  );
};
