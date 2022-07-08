import { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {addDoc, collection, getDoc, getDocs, getFirestore,doc} from "firebase/firestore";
import { add, titleChange } from "../../acions/index";
import { app } from "../../firebase/firebase";


function AddNote() {

    const [added,setAdded] = useState(false);

    const db = getFirestore(app);

    //title store state
    const title = useSelector(store => store.title);

    //body store state
    const body = useSelector(store => store.body);

    useEffect(() => {
        const getData = async () => {

            const snapshot = await getDocs(collection(db,"Notes"));
            snapshot.forEach((doc) => {
                const {title,body,date} = doc.data();
                dispatch(add(doc.id,title,body,date))
            })
        }
        try {
            getData();
        } catch(err) {
            console.log(err.message);
        }
    },[]) ;

    const dispatch = useDispatch();

    const boxref = createRef();

    const handleShowBox = () => {
        boxref.current.style.display = "flex";
    }

    const handleCloseBox = () => {
        boxref.current.style.display = "none";
    }

    const handleSubmit = (e) => {
        let d = new Date()
        let d_date = `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDay()} (${d.getHours()}:${d.getUTCMinutes()})`;
        addToDB(title,body,d_date);
        //dispatch(add(id,title,body,d_date));
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        },2000);
        handleCloseBox();
        dispatch(titleChange(""));
    }

    const addToDB = async (title,body,date) => {
        const addRef = await addDoc(collection(db,"Notes"),{
            title: title,
            body: body,
            date: date
        });
        showDataAfterSubmit(addRef.id);
    }

    const showDataAfterSubmit = async (id) => {
        const docRef = await getDoc(doc(db,"Notes",id));
        
        if (docRef.exists()) {
            const {title,body,date} = docRef.data();
            dispatch(add(docRef.id,title,body,date));
        }
    }


    const handleTitleChange = (e) => {
        dispatch(titleChange(e.target.value));
    }

    return ( 
        <div className="add-note">
            <button className="addNote" onClick={handleShowBox}>
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
            {
                added ? <p style={{color: "green"}}><b>NOTE ADDED SUCCESSFULLY</b></p> : null
            }
            <div className="add-note-form" ref={boxref}>
                <span className="material-symbols-outlined" onClick={handleCloseBox}>
                    close
                </span>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title" id="title" value={title} onChange={handleTitleChange}/>
                <label htmlFor="body">Body</label>
                
                <button onClick={handleSubmit}>
                    Submit Note
                </button>
            </div>
        </div>
     );
}

export default AddNote;