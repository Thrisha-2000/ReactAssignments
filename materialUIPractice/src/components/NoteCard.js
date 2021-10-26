import { makeStyles } from '@mui/styles';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Container, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {format} from 'date-fns'
import SimpleDateFormat from 'date-fns'


const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === 'Remainder'){
                return '1px solid blue'
            }
            if (note.category === 'Todo'){
                return '1px solid pink'
            }
            if (note.category === 'Other'){
                return '1px solid green'
            }
        },

        marginTop: 20,
        marginBottom: 20
    }
    
})

function NoteCard({ note, deleteFunction, editFunction }) {
    const classes = useStyles(note)
    return (
        <Container>
            <Card elevation={2} className={classes.test}>
                <CardHeader 
                    action={
                        
                        <IconButton onClick={() => deleteFunction(note.id)}>
                            <DeleteIcon color='secondary' />
                        </IconButton>
                    }
                    title={note.note}
                    subheader={(note.date).replace('T', ' ')}
                />

                <CardContent>
                    <Typography variant='body2' color='secondary'>
                        {note.details}
                    </Typography>
                </CardContent>

                
                    
            </Card>
        </Container>
    )
}

export default NoteCard
