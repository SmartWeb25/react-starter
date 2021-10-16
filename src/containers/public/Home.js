import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

export default function UserSignin() {
  return (<div className="home">
    <AppBar>
      <Toolbar className="toolbar">
        <Typography variant="h4" color="inherit">Title</Typography>
        <div style={{marginLeft: 'auto'}}>
          <IconButton color="inherit" size="small" href="/signin">
            Sign in
          </IconButton>
          <IconButton color="inherit" size="small" href="/signup">
            Sign up
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    <Container fixed>
      <div className="overlay-box">
        <Typography variant="h1" color="inherit" align="center">Title</Typography>  
      </div>   
    </Container>
  </div>
  );
}