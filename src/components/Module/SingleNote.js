import Side from "../../assets/settings.svg";
import { createRef } from "react";
import "./Singlenote.css";

import { deleteDoc, doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { remove, titleChange } from "../../acions/index";
import { app } from "../../firebase/firebase";

const SingleNote = (props) => {
  const db = getFirestore(app);

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(remove(props.id));

    delDoc();
  };

  const boxref = createRef();

  const handleCloseBox = () => {
    boxref.current.style.display = "none";
  };

  const delDoc = async (id) => {
    const del = await deleteDoc(doc(db, "Notes", props.id));
  };

  const handleEdit = (e) => {
    const box = document.querySelector(".add-note-form");
    const box_title = document.querySelector("#title");

    const getData = async () => {
      const data = await getDoc(doc(db, "Notes", props.id));

      if (data.exists()) {
        box.style.display = "flex";
        dispatch(titleChange(data.data().title));
        box_title.focus();
        dispatch(remove(props.id));
      }
    };

    getData();
  };

  return (
    <div>
      <li className="lili #something">
        {props.title}
        <button id="delete" onClick={handleEdit}>
          E
        </button>
        <button id="delete" onClick={handleDelete}>
          D
        </button>
        <div className="add-note-form" ref={boxref}>
          <span className="material-symbols-outlined" onClick={handleCloseBox}>
          </span>
        </div>
      </li>
    </div>
  );
};

export default SingleNote;
