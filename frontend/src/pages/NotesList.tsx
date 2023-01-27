import React, { useState, useEffect} from 'react';
// import notes from '../assets/data';
import ListItem from "../components/ListItem";
import List from "../components/List";
import {Note} from "../types/types";
import axios from "axios";
import AddButton from "../components/AddButton";

const NotesList = () => {
    let [notes, setNotes] = useState<Note[]>([])

    useEffect(() =>{
        fetchNotes('/api/notes/');
    }, [])

    async function fetchNotes( link: string ) {
        try {
            const response = await axios.get<Note[]>(link);
            setNotes(response.data)
        } catch(e)
        {
          console.log(e);
          console.log(link);
        }
    }


    return (
        <div className={"notes-list"}>
            <AddButton/>
            <div className={"notes-header"}>
                <h2 className={"notes-title"}>&#9782; Notes</h2>
                <p className={"notes-count"}>{notes.length}</p>
            </div>

            <div style={{height: '100%',}}>
                <List
                    items={notes}
                    renderItem={(note: Note) => <ListItem note={note} key={note.id}/>}
                />
            </div>

        </div>
    );
};
export default NotesList;
