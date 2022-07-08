import { signOut } from 'firebase/auth'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase/firebase-config'
import { signOutUser } from '../store/userSlice'
import "../components/Home.css";
import AddNote from './Module/addNote'
import NotesList from './Module/notesList'
import SingleNote from './Module/singleNote'

const Home = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.currentUser)
	if (!user) return <Navigate to='/login' />
	const handleSignOut = async () => {
		await signOut(auth)
		dispatch(signOutUser())
	}
	return (
		<>
		

<nav class="navbar">

<div class="logo">Project</div>

<ul class="nav-links">
  <div class="menu">
	<li><img src={user.photoURL} alt='profilePic' /></li>
	<li>{user.displayName}</li>
	<li className=''><button onClick={handleSignOut}>Sign out</button></li>
  </div>
</ul>
</nav>
<div>
				<AddNote/>
				<NotesList/>
				<SingleNote/>
					
			</div>
</>
	)
}

export default Home
