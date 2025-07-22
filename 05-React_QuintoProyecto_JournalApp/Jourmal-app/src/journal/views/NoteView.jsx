import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getNotaById } from "../../helpers/getNotabyId";
import { SaveOutlined, UploadOutlined, DeleteOutline } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, IconButton, Box } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useMemo, useEffect, useRef } from "react";
import { setActiveNote, startSaveNote, startUploadingFiles, startDeleteNote } from "../../store/journal";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
  const { uid } = useSelector((state) => state.auth);
  const queryClient = useQueryClient();

  // Obtener la nota específica con TanStack Query
  const { data: notaData, isLoading, error } = useQuery({
    queryKey: ["nota", uid, note?.id],
    queryFn: () => getNotaById(uid, note?.id),
    enabled: !!uid && !!note?.id,
  });

  // Inicializar el formulario solo cuando cambie la nota activa
  const prevNoteId = useRef(note?.id);
  const { body, title, date, onInputChange, formState, onResetForm } = useForm(notaData || {});

  useEffect(() => {
    if (note?.id !== prevNoteId.current) {
      onResetForm();
      prevNoteId.current = note?.id;
    }
  }, [note?.id]);

  const dataString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);



  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = async () => {
    await dispatch(startSaveNote(formState));
    // Invalidar la query para refrescar los datos de la nota y la lista de notas
    queryClient.invalidateQueries(["nota", uid, note?.id]);
    queryClient.invalidateQueries(["notas", uid]);
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = async () => {
    const result = await Swal.fire({
      icon: "error",
      title: "¿Eliminar nota?",
      text: "Esta acción no se puede deshacer.",
      showCancelButton: true,
      confirmButtonColor: "#f44336",
      cancelButtonColor: "#8e24aa",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      await dispatch(startDeleteNote(note.id));
      // Invalidar la query de la lista de notas para actualizar SideBar
      queryClient.invalidateQueries(["notas", uid]);
    }
  };

  if (isLoading) return <Typography>Cargando nota...</Typography>;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{
        background: "#fff",
        borderRadius: 3,
        boxShadow: "0 2px 12px 0 rgba(142,36,170,0.08)",
        p: { xs: 2, sm: 4 },
        mt: 2,
        maxWidth: 800,
        mx: "auto"
      }}
    >
      <Grid item container justifyContent="space-between" alignItems="center">
        <Typography fontSize={28} fontWeight="bold" color="#6d1b7b">
          {dataString}
        </Typography>
        <Box>
          <input type="file" id="fileInput" multiple onChange={onFileInputChange} style={{ display: "none" }} />
          <label htmlFor="fileInput">
            <IconButton 
              color="primary"
              disabled={isSaving}
              component="span"
              sx={{ mr: 1, bgcolor: "#ede7f6", "&:hover": { bgcolor: "#d1c4e9" } }}
            >
              <UploadOutlined />
            </IconButton>
          </label>
          <Button
            onClick={onSaveNote}
            color="primary"
            variant="contained"
            disabled={isSaving}
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              boxShadow: "0px 2px 8px rgba(25,118,210,0.07)",
              mr: 1
            }}
            startIcon={<SaveOutlined />}
          >
            Guardar
          </Button>

          <Button
            onClick={onDelete}
            color="error"
            variant="outlined"
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              boxShadow: "0px 2px 8px rgba(244,67,54,0.07)"
            }}
            startIcon={<DeleteOutline />}
          >
            Eliminar
          </Button>
        </Box>
      </Grid>

      <Grid item>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          name="title"
          value={title || ""}
          onChange={onInputChange}
          sx={{
            mb: 2,
            backgroundColor: "#f7f7f7",
            borderRadius: 2,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.04)"
          }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body || ""}
          onChange={onInputChange}
          sx={{
            backgroundColor: "#f7f7f7",
            borderRadius: 2,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.04)"
          }}
        />
      </Grid>

      <Grid item>
        <ImageGallery images={note.imageUrls} />
      </Grid>
    </Grid>
  );
};
