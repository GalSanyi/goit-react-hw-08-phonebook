import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';

import TextField from '@mui/material/TextField';



export default function Filter() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      {contacts.length > 1 && (
        <div>
      
           
            <TextField
             autoFocus
        margin='dense'
         variant="standard"
          label=" Find contacts by names"
              type="text"
              value={filter}
              onChange={handleChange}
             
            />
        
        </div>
      )}
    </>
  );
}
