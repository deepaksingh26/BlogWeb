import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Delete ,Edit}from '@material-ui/icons';
import  {Link, useParams} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import {getPost} from '../../service/api';

const useStyle=makeStyles({
container:{
    padding:'0 100px',
  
},
image:{
    width:'100%',
    height:'50vh',
    objectFit:'cover'
},
icons:{
    float:'right',
},
icon:{
    margin:5,
    border:'3px solid #878787',
    borderRadius:10,
},
heading:{
    fontSize:30,
    fontWeight:600,
    textAlign:'center',
},
subheading:{
color:'#878787',
display:'flex',
margin:'20px 0'
}
})

const Detailview = (match) => {
    const classes=useStyle();
    const params=useParams();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const [post,setPost]=useState({});
    useEffect(()=>{
        const fetchData = async () => {
           try
           {
            console.log("hlw from fetchDara");
            console.log(params.id);
            let data =  await getPost(params.id);
            setPost(data);
           }catch(err)
           {
           console.log('error from use  useEffects');
           }
        }
        fetchData();
    },[])
    return ( 
        <>
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture||url} alt='banner'/>
            <Box className={classes.icons}>
               <Link to='/update' ><Edit className={classes.icon} color='primary'/></Link>
                <Delete className={classes.icon} color='error'/>
            </Box>
            <Typography className={classes.heading}>
                {post.title}
            </Typography>
            <Box className={classes.subheading}>
                <Typography>Author:<span style={{fontWeight:600}}>{post.username}</span></Typography>
                <Typography style={{marginLeft:'auto'}}>{post.createdDate}</Typography>
            </Box>
            <Typography >{post.description}</Typography>
        </Box>
        </>
     );
}
 
export default Detailview;