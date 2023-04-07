import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {ReactComponent as AddIcon} from "../assets/add.svg";
import axios from "axios";
import {Note} from "../types/types";

const AddButton: FC = () => {
    const navigate = useNavigate();

    let createNote = async () => {
        const response = await axios.post<Note>(`/api/notes/add/`, {
            body: "aerbea",
            updated: "2023-01-26T21:20:38.141546Z",
            created: "2023-01-26T21:20:38.141546Z"
        })
        console.log("Hi!")
        navigate("/" + response.data.id);
    }


    return (
        <div className={"floating-button"} onClick={createNote}>
            <AddIcon />
        </div>
    );
};

export default AddButton;
