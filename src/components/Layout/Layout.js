// import { Navigation } from "components/Navigation/Navigation";
// import { AuthNav } from "components/AuthNav/AuthNav";
// import {  Outlet } from "react-router-dom"
// import { UserMenu } from "components/UserMenu/UserMenu";
// import { useSelector } from "react-redux";
// import { isAuthenticated } from "redux/auth/auth-selectors";

// const Layout=()=>{
//     const isLoggedIn = useSelector(isAuthenticated);
//     return (

//         <>
//        <Navigation/>
//        {isLoggedIn ? <UserMenu/> :     <AuthNav/>}
   
       
//         <Outlet/>
//         </>

//     )

// }
// export {Layout};

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import {  Outlet } from "react-router-dom"
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { isAuthenticated } from "redux/auth/auth-selectors";
const Layout=()=>{
    const isLoggedIn = useSelector(isAuthenticated);
  return (
    <Container fixed >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation/>
  
   
          </Typography>
          <Button color="inherit"> {isLoggedIn ? <UserMenu/> : <AuthNav/>}    </Button>
        </Toolbar>
      </AppBar>
             <Outlet/>
    </Box>
    </Container>
  );
}
export {Layout};
