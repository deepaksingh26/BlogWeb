import Post from "./Post";
import { Link, useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import {getAllPosts} from '../../service/api.js';
const Posts = () => {
    const [p,setP]=useState([]);
   useEffect(async()=>{
       const data= await getAllPosts();
       console.log(data);
       setP(data);
    },[]);
    return (
        p.map((post,index) => (
        <Grid item lg={2} sm={4} xs={12} key={index}>
        <Link to={`/details/${p[index]._id}`} style={{textDecoration:'none',color:'inherit'}}>
        <Post post={post}/>
        </Link>
        </Grid>
        ))
     )
}
 
export default Posts;