import React, {FC, useEffect, useState} from 'react';
import {Note} from "../types/types";
import {useParams, Link, useNavigate} from "react-router-dom";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';
import axios from "axios";


const NotePage: FC = () => {
    const {id} = useParams<string>();
    let [note, setNote] = useState<Note | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        fetchNote()
    }, [])


    async function fetchNote() {
        await axios.get<Note>(`/api/notes/${id}/`).then(response => {
            if (response.status === 200) {
                setNote(response.data);
            }
        })
    }

    async function updateNote() {
        await axios.put(`/api/notes/${id}/update/`, {
            body: note!.body,
            updated: Date.now().toString(),
        })
    }

    function deleteNote() {
        axios.delete(`/api/notes/${id}/delete/`);
        navigate("/");
    }

    let handleSubmit = () => {
        if (note?.id !== 'new' && !note?.body) {
            deleteNote();
        } else if (note?.id !== 'new') {
            updateNote();
        }
        console.log(note);
        navigate("/");
    }

    if (note !== null)
        return (
            <div className={"note"}>
                <div className={"note-header"}>
                    <h3>
                        <ArrowLeft onClick={handleSubmit}/>
                    </h3>

                    <button onClick={deleteNote}>Delete</button>
                </div>
                <textarea onChange={event => {
                    setNote(prevState => ({...prevState!, body: event.target.value}))
                }}
                          value={note!.body}>

                </textarea>
            </div>

        );
    else return (
        <div className={"note"}>
            <div className={"note-header"}>
                <h3>
                    <Link to={"/"}>
                        <ArrowLeft/>
                    </Link>
                </h3>
            </div>
        </div>

    );

};

export default NotePage;
