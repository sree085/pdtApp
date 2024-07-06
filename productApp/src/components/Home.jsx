import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



const Home = () => {
    
    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get(' https://fakestoreapi.com/products').then((res)=>{
     
      setRows(res.data)
    })
    },[])
    return (
    <div>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
                {rows.map((row)=>(
        <Grid item xs={3}>

        <Card key={row.title} sx={{ maxWidth: 345 }}>
        
        <CardMedia
            sx={{ height: 300 }}
            image={row.image}
            title={row.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Item : {row.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Price : {row.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Category : {row.category}
            </Typography>
        </CardContent>
        </Card>

        </Grid>
        ))}
        </Grid>
        
        </Box>

            </div>
        )
}




export default Home