import { Box,Button,FormControl,InputBase,makeStyles, TextareaAutosize } from "@material-ui/core";
import {AddCircle }from '@material-ui/icons';
import { useState } from "react";
import { CreatePost } from "../../service/api";
import {useNavigate} from 'react-router-dom';


const useStyle=makeStyles({
    container:
    {
        padding:'0 100px'
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    textfield:{
        flex:1,
        margin:'0 30px',
        fontSize:25
    },
    textarea:{
        width:'100%',
        marginTop:50,
    border:'none',
    fontSize:18,
    '&:focus-visible':{
        outline:'none'
    }
    }
});
const initialValue={
    title:"",
    description:"",
    picture:"",
    username:'deepakthakur',
    categories:"All",
    createdDate:new Date()
}
const Createview = () => {
    const navigate = useNavigate();
    const [post,setPost]=useState(initialValue);
    const classes=useStyle();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const handleChange=(e)=>{
        setPost
        ({
              ...post,
        [e.target.name]:e.target.value
        })
    }
    const savePost=async()=>{
    await CreatePost(post);
    navigate('/')
    }
    return ( 
        <>
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt='banner'/>
            <FormControl className={classes.form}>
            <AddCircle fontSize="large" color="action"/>

            <InputBase onChange={(e)=>handleChange(e)} placeholder="title" name="title" className={classes.textfield} />
            <Button varient="contained" onClick={savePost} color="primary">Publish</Button>
            </FormControl>
            <TextareaAutosize
             onChange={(e)=>handleChange(e)} 
            minRows={5}
            name="description"
            placeholder="Tell your story"
            className={classes.textarea}
            />
        </Box>
        </>
     )
}
 
export default Createview;