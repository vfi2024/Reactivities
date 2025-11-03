


import { useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import Navbar from "./NavBar";
import ActivityDashBoard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
const [activities, setActivities] =useState<Activity[]>([]);
const [selectedActivity, setSelectedActivity] =  useState<Activity | undefined>(undefined);
const [editMode, setEditMode]= useState(false);

useEffect(() => {

  axios.get<Activity[]>('https://localhost:5001/api/activities')
.then(response=> setActivities(response.data))

return ()=>{}
}, [])

const handleSelectActivity =  (id: string) => {
  setSelectedActivity(activities.find(x=>x.id===id))
}


const handleCancelSelectActivity = () => {
  setSelectedActivity(undefined);
}

const handleOpenForm =(id?: string) => {
if (id) handleSelectActivity(id);
else handleCancelSelectActivity();
setEditMode(true);
}

const handleFormClose=() => {
  setEditMode(false);
}

const handleSubmitForm = (activity:Activity) => {
  if (activity.id) {
    setActivities(activities.map(x=>x.id === activity.id ? activity :x))
  }
  else{
    setActivities ([...activities,  {...activity, id: activities.length.toString()}])
  }
}


return (
    <Box sx={{bgcolor: '#eceeee'}}>
   <CssBaseline />
   <Navbar openForm={handleOpenForm} />

   <Container maxWidth='xl' sx={{mt:3}}>
    <ActivityDashBoard 
     activities={activities} 
     selectActivity={handleSelectActivity}
     cancelSelectActivity={handleCancelSelectActivity}
     selectedActivity={selectedActivity}
     editMode={editMode}
     openForm={handleOpenForm}
     closeForm={handleFormClose}
     submitForm={handleSubmitForm}
     />
   </Container>
      
 </Box>   
  )
  
}

export default App
