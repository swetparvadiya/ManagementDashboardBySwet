import { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
} from "firebase/firestore";
import { add, titleChange } from "../../acions/index";
import { app } from "../../firebase/firebase";

import addProject from "../../assets/addProject.svg";
import styles from "./Addnote.module.css";
import cross from "../../assets/x.svg";

function AddNote() {
  const [added, setAdded] = useState(false);

  const db = getFirestore(app);

  const title = useSelector((store) => store.title);

  const body = useSelector((store) => store.body);

  useEffect(() => {
    const getData = async () => {
      const snapshot = await getDocs(collection(db, "Notes"));
      snapshot.forEach((doc) => {
        const { title, date } = doc.data();
        dispatch(add(doc.id, title, date));
      });
    };
    try {
      getData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const dispatch = useDispatch();

  const boxref = createRef();

  const handleShowBox = () => {
    boxref.current.style.display = "flex";
  };

  const handleCloseBox = () => {
    boxref.current.style.display = "none";
  };

  const handleSubmit = (e) => {
    let d = new Date();
    let d_date = `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDay()} (${d.getHours()}:${d.getUTCMinutes()})`;
    addToDB(title, body, d_date);
    //dispatch(add(id,title,body,d_date));
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
    handleCloseBox();
    dispatch(titleChange(""));
  };

  const addToDB = async (title, body, date) => {
    const addRef = await addDoc(collection(db, "Notes"), {
      title: title,
      date: date,
    });
    showDataAfterSubmit(addRef.id);
  };

  const showDataAfterSubmit = async (id) => {
    const docRef = await getDoc(doc(db, "Notes", id));

    if (docRef.exists()) {
      const { title, body, date } = docRef.data();
      dispatch(add(docRef.id, title, body, date));
    }
  };

  const handleTitleChange = (e) => {
    dispatch(titleChange(e.target.value));
  };





  return (
    <div className="add-note">
      <div>
        <span className={styles.project}>My project</span>
            <img onClick={handleShowBox} src={addProject} className={styles.image12} alt="adddProject" />
      </div>
      
      <div>
        {added ? (
          <p style={{ color: "green" }} className={styles.note}>
            <b>NOTE ADDED SUCCESSFULLY</b>
          </p>
        ) : null}
      </div>
      <div ref={boxref} className={styles.side}>
      <img src={cross} className={styles.cross} onClick={handleCloseBox} />
        <div>
              <input
              required
                type="text"
                placeholder="Project Name"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />

              <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>


        </div>
  );
}

export default AddNote;
