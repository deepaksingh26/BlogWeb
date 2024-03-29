import { Box,makeStyles,Typography } from "@material-ui/core";


const useStyle=makeStyles({
container:{
    height:350,
    margin:10,
    borderRadius:10,
    border:'2px solid #d3ced',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    boxShadow: '0px 1px  #888',
    // width:'20%',
    '&>*':{
        padding:'0 5px 5px 5px'
    }
},
image:{
    minHeight:"150px" ,
    width:'100%',
    borderRadius:'10 px 10px 0 0'
},
text:{
    color:'#878787',
    fontSize:12
},
heading:{
    fontSize:18,
    fontWeight:600,
    display: "block",
  textOverflow: "ellipsis",
  wordWrap: "break-word",
  overflow: "hidden",
  maxHeight: '1.8em',
  lineHeight: "1.8em"
},
detail:{
    fontSize:14,
    wordBreak:'break-word'
},
description: {
    display: "block",
  textOverflow: "ellipsis",
  wordWrap: "break-word",
  overflow: "hidden",
  maxHeight: '5.4em',
  lineHeight: "1.8em",
  maxWidth: "100%"
 }
})
const Post = ({post}) => {
    const classes=useStyle();
    const url=post.picture ||'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    return ( 
        <>
        <Box className={classes.container}>
           <img src={url} alt='wrapper' className={classes.image} />
           <Typography className={classes.text}>{post.categories}</Typography>
           <Typography className={classes.heading}>{post.title}</Typography>
           <Typography className={classes.text}>Author:{post.username}</Typography>
           <Typography className={classes.description}>{post.description}</Typography>
        </Box>
        </>
     );
}
 
export default Post;