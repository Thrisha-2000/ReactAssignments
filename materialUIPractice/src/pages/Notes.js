import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper } from '@mui/material'
import NoteCard from '../components/NoteCard'
import { useHistory } from 'react-router'
import Create from './Create'

function Notes() {
    const [notes, setNotes] = useState([])
    
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    },[])

    const handleDelete = async(id) => {
        await fetch('http://localhost:8000/notes/' + id,
        {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes) 
    }

    

    

    return (
        <Container>
            <Grid container>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
                        <NoteCard note={note} deleteFunction={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Notes
