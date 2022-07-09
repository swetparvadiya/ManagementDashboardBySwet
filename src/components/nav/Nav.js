import React from "react";
import { auth } from "../../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { signOutUser } from "../../store/userSlice";
import styles from "../nav/Nav.module.css";

import { signOut } from "firebase/auth";


import downarrow from "../../assets/downarrow.svg";





const Nav = (props) => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(signOutUser());
  };

  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.maincontainerright}>
          <div className={styles.maincontainerrightHeader}>
            <div className={styles.a}>
              <div className={styles.userText}>
                <p className={styles.userName}>{props.user.displayName}</p>
                <p className={styles.userText}>Surat, India</p>
              </div>
              <img
                src={props.user.photoURL}
                alt='..'
                className={styles.profileimage}
              />
              <div className={styles.dropdown}>
              <img src={downarrow} alt='nodownarrowimage' />
                  <div className={styles.dropdowncontent}>
                  <button onClick={handleSignOut}>Sign out</button>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>





  );
};

export default Nav;
