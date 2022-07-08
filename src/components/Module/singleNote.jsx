import { deleteDoc , doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {  remove, titleChange } from "../../acions/index";
import { app } from "../../firebase/firebase";


function SingleNote(props) {

    const db = getFirestore(app);

    const dispatch = useDispatch();

    const handleEdit = (e) => {
        const box = document.querySelector(".add-note-form")
        const box_title = document.querySelector("#title");

        const getData = async () => {
            const data = await getDoc(doc(db,"Notes",props.id));
            
            if (data.exists()) {
                box.style.display = "flex";
                dispatch(titleChange(data.data().title));
                box_title.focus();
                dispatch(remove(props.id));
            }
        }

        getData();
    }

    const handleDelete = (e) => {
        dispatch(remove(props.id));

        delDoc();
    }

    const delDoc = async (id) => {
        const del = await deleteDoc(doc(db,"Notes",props.id));
    }

    return ( 
        <div className="single-note">
            <h3>{props.title}</h3>
            <p id="text">{props.data}</p>
            <div className="single-note-date">
                <p>Created on: <b>{props.date}</b></p>
                <div className="single-note-date-btn">
                    <button className="material-symbols-outlined" id="edit" onClick={handleEdit}>
                        edit_note
                    </button>
                    <button className="material-symbols-outlined" id="delete" onClick={handleDelete}>
                        delete
                    </button>
                </div>
            </div>
        </div>
     );
}

export default SingleNote;