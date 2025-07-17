import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';


export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }


  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` },
            background: "linear-gradient(90deg, #e3f0fd 0%, #bbdefb 100%)", // Azul suave
            boxShadow: "0 2px 12px 0 rgba(25,118,210,0.10)"
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography 
                    variant='h6' 
                    noWrap 
                    component='div' 
                    sx={{ fontWeight: "bold", letterSpacing: 1, color: "#6d1b7b" }} // Morado oscuro igual al Sidebar
                >
                    JournalApp
                </Typography>

                <Box>
                    <IconButton 
                        onClick={ onLogout }
                        sx={{
                            backgroundColor: "rgba(244,67,54,0.10)", // Rojo claro
                            color: "#f44336", // Rojo Material UI
                            ml: 1,
                            "&:hover": {
                                backgroundColor: "rgba(244,67,54,0.20)",
                            }
                        }}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Box>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}