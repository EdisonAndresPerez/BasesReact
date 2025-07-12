import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography, Box } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const initialRegisterForm = {
  name: "",
  email: "",
  password: "",
};
// ¡IMPORTANTE! Declarar fuera del componente:
const formValidation = {
  email: [
    (value) => value.includes("@"),
    "El correo debe tener un @"
  ],
  password: [
    (value) =>
      value.length >= 6 &&
      /[A-Z]/.test(value) &&
      /\d/.test(value),
    "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número"
  ],
  name: [
    (value) => value.trim().length > 0,
    "El nombre es obligatorio"
  ],
};


export const RegisterPages = () => {
  const {
    formState,
    name,
    email,
    password,
    onInputChange,
    isFormValid,
    isNameValid,
    isEmailValid,
    isPasswordValid,
    formErrors,
  } = useForm(initialRegisterForm, formValidation);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    // Aquí iría la lógica para crear la cuenta
    console.log(formState);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="name"
              value={name}
              onChange={onInputChange}
              error={!isNameValid}
              helperText={formErrors.name}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!isEmailValid}
              helperText={formErrors.email}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!isPasswordValid}
              helperText={formErrors.password}
            />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" mt={4} mb={2}>
              <Button
                type="submit"
                variant="contained"
                 onClick={() => console.log("Click en CREAR CUENTA")}
                sx={{
                  px: 6,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  backgroundColor: "#2d2654",
                  boxShadow: "0 4px 12px rgba(45,38,84,0.15)",
                  "&:hover": {
                    backgroundColor: "#1a1836",
                  },
                }}
              >
                CREAR CUENTA
              </Button>
            </Box>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
