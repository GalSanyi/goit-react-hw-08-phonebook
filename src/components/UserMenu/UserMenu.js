import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';
import Button from '@mui/material/Button';

const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail);
    return (
        <>
            <span >{email}</span>
            <Button type="submit" variant="contained"  onClick={ () => dispatch(logout()) }>Выйти</Button>
        </>
    );
}
export {UserMenu};