


import { useEffect, useState } from "react";
import { List, ListItem, Typography } from "@mui/material";
import axios from "axios";

function App() {


const [activities, setActivities] =useState<Activity[]>([]);

useEffect(() => {

axios.get<Activity[]>('https://localhost:5001/api/activities')
.then(response=> setActivities(response.data))

return ()=>{}
}, [])

  return (
    <div>

    <Typography  variant="h3"> Reactivities  </Typography>
    <List>
      {activities.map((activity) => (
        <ListItem key={activity.id}>{activity.title}</ListItem>
      ))}
    </List>  
    
 </div> 

  
  )
}

export default App
