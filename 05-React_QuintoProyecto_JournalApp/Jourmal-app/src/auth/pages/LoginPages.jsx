import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPages = () => {

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: '',
    password: ''
  });


const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication(email, password));
}

const onGoogleSignIn = () => {
  // lógica de inicio de sesión con Google aquí
  console.log('Google Sign In');
  dispatch(startGoogleSignIn())

}




  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
          <Grid item xs={12} sx={{ width: '100%' }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              name="email"
              value={email}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ width: '100%' }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
               name='password'
               value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button type='submit' variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button  onClick={ onGoogleSignIn} variant="contained" fullWidth startIcon={<Google />}>
                  Google
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ width: '100%' }}>
            <Grid container justifyContent="flex-end">
              <Link component={RouterLink} color="inherit" to="/auth/register" underline="hover">
                Crear Una Cuenta
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}