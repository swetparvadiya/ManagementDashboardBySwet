import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AddNote from './Module/AddNote'
import NotesList from './Module/NotesList'
import SingleNote from './Module/SingleNote'
import Nav from './nav/Nav';
import Sidebar from './sidebar/Sidebar';
import Sidebarbody from './sidebarbody/Sidebarbody';
import Body from './body/Body';

import styles from "./Home.module.css";

const Home = () => {
	
	const user = useSelector((state) => state.user.currentUser)
	if (!user) return <Navigate to='/login' />
	
	return (
		<>
		<div>
			<Nav user={user} />
			 <Sidebar/> 
			 <div className={styles.menu}>
			 <Sidebarbody/>
			 <AddNote />
			<NotesList/> 	
			 </div>
			 <div className={styles.main}>
				<Body/>
			 </div>

					
		</div>
</>
	)
}

export default Home
