import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyle=makeStyles({
component:{
    background:'#FFFFFF',
    color:'black'
},
container:{
    justifyContent:'center',
    '&>*':{
        padding:20,
    }
},
link:{
    textDecoration:'none',
    color:'inherit'
}
})

const Navbar = () => {
    const classes=useStyle();
    return( 
<AppBar className={classes.component}>
<Toolbar className={classes.container}>
   <Link className={classes.link} to='/'><Typography>Home</Typography></Link>
   <Typography>About</Typography>
   <Typography>Contact</Typography>
   <Link className={classes.link} to='/login'><Typography>Log in</Typography></Link>
   <Link className={classes.link} to='/signin'><Typography>Sign up</Typography></Link>
   <a href="#" onClick={()=>{
   localStorage.clear();
   window.location.href = '/';
   }}>LOGOUT</a>
</Toolbar>
</AppBar>
        );
}
 
export default Navbar;