import { makeStyles } from '@mui/styles';
import React from 'react'
import { Button, Typography } from '@mui/material'
import { Container } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useHistory } from 'react-router';
import Stack from '@mui/material/Stack';


// const useStyles = makeStyles({
//     field: {
//         marginTop: 20,
//         marginBottom: 20,
//         display: 'block'
//     }
// })
const field = {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
}


function Create() {
    const history = useHistory()
    const [date, setDate] = useState(new Date('2014-08-18T21:11:54'))
    const [category,setCategory] = useState('Todo')
    const [note, setNote] = useState('')
    const [details, setDetails] = useState('')
    const [noteError, setNoteError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleChange = (newDate) => {
        setDate(newDate);
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        setNoteError(false)
        setDetailsError(false)
        if (note === ''){
        setNoteError(true)
        }
        if (details === ''){
            setDetailsError(true)
            }
        if (note && details){
            fetch('http://localhost:8000/notes',
            {
                method: 'POST',
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({ note, details, category, date })
            }).then(() => history.push('/'))
        }
        
    }

    return (
        <Container>

            
            <Typography variant='h6' color='primary' gutterBottom>
                Create a new note
            </Typography>



            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField style={field} onChange={(e) => setNote(e.target.value)} label='Note' variant='outlined' color='primary' required error={noteError} margin='dense' fullWidth></TextField>
                
                <TextField style={field} onChange={(e) => setDetails(e.target.value)} multiline rows={5} label='Details' variant='outlined' color='primary' required error={detailsError} margin='dense' fullWidth></TextField>
                
                <FormControl style={field}>
                    <FormLabel >Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
                        <FormControlLabel value="Remainder" control={<Radio />} label="Remainder" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    id="datetime-local"
                    style={field}
                    onChange={(e) => setDate(e.target.value)}
                    label="Date & Time"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />


                <Button type='submit' color='success' variant='contained' endIcon={<ArrowForwardIosIcon />}>Save</Button>
            </form>
            

            
        </Container>
    )
}

export default Create
