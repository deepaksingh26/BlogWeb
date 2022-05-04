import { makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from '@material-ui/core';
const useStyle=makeStyles({
    image:{
background:`url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
height:'50vh',
width:'100%',
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
'& :first-child':{
    fontSize:70,
    color:'#FFFFFF'
},
'& :last-child':{
    fontSize:20,
    color:'#FFFFFF',
    lineHeight:1
}
}
});
const Banner = () => {
    const classes=useStyle();
    return ( 
       <Box className={classes.image}>
        <Typography>BLOG</Typography>
        <Typography>Code For Interview</Typography>
       </Box>
     );
}
 
export default Banner;