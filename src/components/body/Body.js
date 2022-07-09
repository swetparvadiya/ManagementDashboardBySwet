import React from 'react'
import styles from "./Body.module.css";


import users from "../../assets/users.svg";
import inviteuser from "../../assets/inviteuser.svg";
import editIcon from "../../assets/editIcon.svg";
import linkIcon from "../../assets/linkIcon.svg";
import Filter from './Filter';





const Body = () => {
  return (
    <div>
        <div className={styles.main2}>
            <div className={styles.mobile}>
                <p >Mobile App</p>
                    <img  className={styles.image} src={editIcon} alt='noediticonimage' />
                    <img  className={styles.image} src={linkIcon} alt='nolinkiconimage' />
            </div>
            <div className={styles.invite}>
                <img
                src={inviteuser}
                alt='noinviteuserimage'
                className={styles.invite2}
                />
                <p className={styles.invite3}>Invite</p>
                <img
                src={users}
                alt='nousersimage'
                className={styles.invite4}
                />
            </div>
        </div>
        <Filter/>
    </div>
  )
}

export default Body;