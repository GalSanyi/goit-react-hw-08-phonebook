

import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'redux/PrivateRoute';
import PublicRoute from 'redux/PublicRoute';
import { Suspense,  useEffect } from 'react';
import { lazy } from 'react';
import { HomePage } from './views/HomePage/HomePage';
import { Layout } from './Layout/Layout';
import {NotFountPage} from './views/NotFountPage/NotFountPage.js';
// import LoaderSpinner from './LoaderSpinner';
import CircularProgress from '@mui/material/CircularProgress';
const RegisterPage = lazy(() => import('./views/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./views/ContactsPage/ContactsPage'));


export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(getCurrentUser);

  },[dispatch]);
  return (
    <div>
      <Suspense fallback={<CircularProgress color="inherit" />}>
        <Routes>
          <Route path='/' element={<Layout/>}>


          <Route  index element={<PublicRoute>
            <HomePage/>
          </PublicRoute>}/>

          <Route  path='register' element={<PublicRoute restricted>
            <RegisterPage/>
          </PublicRoute>}/>

          <Route  path='login' element={<PublicRoute restricted>
            <LoginPage/>
          </PublicRoute>}/>


          
          


          <Route path="/contacts" element={<PrivateRoute>
                <ContactsPage />
            </PrivateRoute> } />


          <Route path='*' element={<NotFountPage/>}/>

          </Route>
        </Routes>
      </Suspense>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <Filter />

      <h2>Contacts</h2>
      <ContactList /> */}
    </div>
  );
}
