import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
    <AuthLayout title="Crear cuenta">

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Nombre completo" 
              type="text" 
              placeholder='Nombre completo' 
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
              sx={{
                borderRadius: 2,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.07)",
                backgroundColor: "#f7f7f7",
              }}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder='correo@google.com' 
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
              sx={{
                borderRadius: 2,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.07)",
                backgroundColor: "#f7f7f7",
              }}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder='Contraseña' 
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted  }
              helperText={ passwordValid }
              sx={{
                borderRadius: 2,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.07)",
                backgroundColor: "#f7f7f7",
              }}
            />
          </Grid>
          
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '': 'none' }
            >
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button 
                disabled={ isCheckingAuthentication }
                type="submit"
                variant='contained' 
                fullWidth
                sx={{
                  borderRadius: 2,
                  fontWeight: "bold",
                  backgroundColor: "#8e24aa", // Morado suave
                  boxShadow: "0px 2px 8px rgba(142,36,170,0.07)",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#6d1b7b",
                  },
                }}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid 
            container 
            justifyContent="center" 
            sx={{ mt: 1, mx: "auto", width: "fit-content" }}
          >
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link
              component={RouterLink}
              color="primary"
              to="/auth/login"
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              ingresar
            </Link>
          </Grid>
        </Grid>


      </form>

    </AuthLayout>
  )
}