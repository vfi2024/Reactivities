import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props= {
    activity?: Activity
    closeForm: () => void
}

export default function ActivityForm({activity, closeForm}: Props){
    
    const handleSubmit = (event : FormEvent<HTMLFormElement>) => { 
        event.preventDefault();

        const formData= new FormData(event.currentTarget);

        const data: {[key: string]: FormDataEntryValue}={}
        formData.forEach((value,key)=>{
            data[key]=value;
        })

        console.log(event);
    }
    
    return (
        <Paper sx={{borderRadius:3, padding:3}}>
        
         <Typography variant="h5" gutterBottom color="primary">
            Create activity
         </Typography>
         <Box  component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
            <TextField label='Title' name="title" defaultValue={activity?.title} />
            <TextField label='Description' name="description" defaultValue={activity?.description} multiline rows={3} />
            <TextField label='Category' name="category" defaultValue={activity?.category} />
            <TextField label='Date'  type="date" name="date"  defaultValue={activity?.date}/>
            <TextField label='City' name="city"  defaultValue={activity?.city}/>
            <TextField label='Venue' name="venue" defaultValue={activity?.venue} />
         </Box>
         <Box display='flex' justifyContent='end' gap={3}>
              <Button color='inherit' onClick={closeForm} >Cancel</Button>
              <Button type="submit" color='success' variant="contained">Submit</Button>
         </Box>

        </Paper>
        
    )
}