import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddNote from './Module/addNote';
import NotesList from "./Module/notesList";

const Managemodule = () => {

    const user = useSelector((state) => state.user.currentUser)
	if (!user) return <Navigate to='/login' />


  return (
    <div>
      <AddNote/>
      <NotesList/>
    </div>
  )
}

export default Managemodule;