import { Fab, Zoom } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useState } from "react";


const CreateArea = ({ addNote }) => 
{
    const [isExpanded, setIsExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""

    })

    const expand = () => {
        setIsExpanded(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };



const submitNote = (event) => {
    event.preventDefault();
    addNote(note);
    setNote({
        title: "",
		content: ""
    });
};


return (
    <div>
        <form className="create-note">
            {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />}
            <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onClick={expand} value={note.content} onChange={handleChange} />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <Add />
                </Fab>
            </Zoom>
        </form>
    </div>
);
};


export default CreateArea;
