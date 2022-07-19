  
 import Typography from '@mui/material/Typography';
  import Stack from '@mui/material/Stack';
  import { NavLink } from "react-router-dom";

  const AuthNav = () => {
    return (
       
        <Stack direction="row" spacing={2}>
        <NavLink to='/register'><Typography variant="inherit"   color='#fff'> Registration</Typography></NavLink>
<NavLink to='/login'><Typography variant="inherit"   color='#fff'> Login</Typography></NavLink>

</Stack>




    );
}
export {AuthNav};