import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateNota,
  deleteNota,
  uploadImagesToNote,
  getNotaById,
} from "../../helpers";
import { Button as ShadcnButton } from "@/components/ui/button";
import {
  SaveOutlined,
  UploadOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useMemo, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const NoteView = ({ note, onNoteDeleted }) => {
  const { uid } = useSelector((state) => state.auth);
  const queryClient = useQueryClient();

  const {
    data: notaData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["nota", uid, note?.id],
    queryFn: () => getNotaById(uid, note?.id),
    enabled: !!uid && !!note?.id,
  });

  const prevNoteId = useRef(note?.id);
  const { body, title, date, onInputChange, formState, onResetForm } = useForm(
    notaData || {}
  );

  useEffect(() => {
    if (note?.id !== prevNoteId.current) {
      onResetForm();
      prevNoteId.current = note?.id;
    }
  }, [notaData, note?.id]);

  const dataString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  // Mutación para actualizar nota
  const updateMutation = useMutation({
    mutationFn: (nota) => updateNota({ uid, nota }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nota", uid, note?.id] });
      queryClient.invalidateQueries({ queryKey: ["notas", uid] });
      Swal.fire(
        "Nota actualizada",
        "La nota se actualizó correctamente",
        "success"
      );
    },
  });

  // Mutación para eliminar nota
  const deleteMutation = useMutation({
    mutationFn: () => deleteNota({ uid, id: note.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notas", uid] });
      Swal.fire("Nota eliminada", "La nota fue eliminada", "success");
      console.log("Nota eliminada:", note);
      if (onNoteDeleted) onNoteDeleted(note);
    },
  });

  // Mutación para subir imágenes
  const uploadMutation = useMutation({
    mutationFn: ({ files }) => uploadImagesToNote({ uid, note, files }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nota", uid, note?.id] });
      queryClient.invalidateQueries({ queryKey: ["notas", uid] });
      Swal.fire(
        "Imágenes subidas",
        "Las imágenes se agregaron correctamente",
        "success"
      );
    },
  });

  const onSaveNote = () => {
    updateMutation.mutate({ ...formState, id: note.id });
    console.log("Nota guardada:", formState);
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
      deleteMutation.mutate();
    }
  };

  const onFileInputChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    uploadMutation.mutate({ files: e.target.files });
  };

  if (isLoading) return <Typography>Cargando nota...</Typography>;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

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
        mx: "auto",
      }}
    >
      <Grid item container justifyContent="space-between" alignItems="center">
        <Typography fontSize={28} fontWeight="bold" color="#6d1b7b">
          {dataString}
        </Typography>
        <Box>
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={onFileInputChange}
            style={{ display: "none" }}
          />
          <label htmlFor="fileInput">
            <IconButton
              color="primary"
              disabled={uploadMutation.isPending}
              component="span"
              sx={{
                mr: 1,
                bgcolor: "#ede7f6",
                "&:hover": { bgcolor: "#d1c4e9" },
              }}
            >
              <UploadOutlined />
            </IconButton>
          </label>
          <ShadcnButton
            onClick={onSaveNote}
            disabled={updateMutation.isPending}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg px-4 py-2 mr-2 flex items-center gap-2 transition-all duration-200"
          >
            <SaveOutlined />
            Guardar
          </ShadcnButton>

          <div className="bg-red-700">
            ¡Tailwind funcionando!
          </div>
          <Button
            onClick={onDelete}
            color="error"
            variant="outlined"
            disabled={deleteMutation.isPending}
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              boxShadow: "0px 2px 8px rgba(244,67,54,0.07)",
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
            boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
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
            boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
          }}
        />
      </Grid>

      <Grid item>
        <ImageGallery images={notaData?.imageUrls || []} />
      </Grid>
    </Grid>
  );
};
