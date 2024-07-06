import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = () => {
    const [count,setCount]=useState(0)
    const [form,setForm]=useState({
      title:'',
      description:'',
      price:'',
      category:'',
    })
    function valueAdd()
    {
       console.log(form)
    }
    function valueCap(e)
    {
      // console.log(e)
       setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >   
        
      <div>
    
        <TextField
          required
          label="TITLE"
          name='title'
          value={form.title}
          onChange={valueCap}
        />
        <TextField
        
          label="DESCRIPTION"
          name='description'
          value={form.description}
          onChange={valueCap}
        />
        <TextField
          label="PRICE"
          name='price'
          value={form.price}
          onChange={valueCap}
          
          />
         <TextField
          label="CATEGORY"
          value={form.category}
          name='category'
          onChange={valueCap}
          
        />
    </div>
    <div>
        <Button variant='contained'onClick={(valueAdd)}>ADD PRODUCT</Button>
        <br />
    </div>
    </Box>
  )
}

export default Add