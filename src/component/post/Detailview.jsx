import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Delete ,Edit}from '@material-ui/icons';
import  {Link, useParams,useNavigate} from 'react-router-dom'
import { useState } from "react";
import { useEffect} from "react";
import {getPost} from '../../service/api';
import axios from "axios";

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
    const navigate=useNavigate();
    var id=params.id;
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const [post,setPost]=useState({});

    useEffect(()=>{
        const fetchData = async () => {
           try
           {
            console.log("hlw from fetchDara");
            console.log(params.id);
            let data =  await getPost(params.id);
            console.log(data)
            setPost(data);
           }catch(err)
           {
           console.log('error from use  useEffects');
           }
        }
        fetchData();
    },[])

    //delete post
    const deletepost = async () => {
        console.log("deletepost")
        console.log(id);
        const res=await axios.post("https://blog-app79.herokuapp.com/delete",{id:id})
        if(res.data==="success")
        {
            navigate("/");
        }
     }

    //hide button
    const [check,setCheck]=useState(false);
    useEffect(async ()=>{
        const x=localStorage.getItem('id');
        console.log('here 80 detailview',x);
        const res=await axios.post("https://blog-app79.herokuapp.com/name",{id:x})
        console.log('res',res);
        let n=res.data.n;
        if(post && (n===post.username)) {
            setCheck(true)
            console.log(post.username,n)
        }
    },[post]);
    return ( 
        <>
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture||url} alt='banner'/>
            <Box className={classes.icons}>
               <Link to='/update' ><Edit className={classes.icon} color='primary'/></Link>      
               {console.log(check)}   
                {check ?<Delete className={classes.icon} onClick={deletepost}  color='error'/>:null} 
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