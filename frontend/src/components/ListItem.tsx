import React, { FC, } from 'react';
import { Link } from 'react-router-dom'
import {Note} from "../types/types";

interface Data {
    note: Note
}


const ListItem: FC<Data> = ({note}) => {
    return (
        <Link to={`/${note.id}/`}>
            <div className={"notes-list-item"}>
                <h3>{note.body}</h3>
            </div>
        </Link>
    );
}

export default ListItem;