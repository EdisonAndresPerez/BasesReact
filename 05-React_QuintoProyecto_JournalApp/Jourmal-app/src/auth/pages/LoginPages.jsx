import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPages = () => {

const {status} = useSelector( state => state.auth)



  const dispatch = useDispatch();
  const {email, password, onInputChange} = useForm({
    email: '',
    password: ''
  });

const isAuthenticating = useMemo(() => status === 'checking', [status] )


const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication(email, password));
}

const onGoogleSignIn = () => {
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
                <Button
                 type='submit'
                  variant="contained"
                  disabled={isAuthenticating}
                   fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                 onClick={ onGoogleSignIn}
                  variant="contained"
                  disabled={isAuthenticating}
                   fullWidth startIcon={<Google />}>
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