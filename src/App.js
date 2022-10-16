import { Box } from "@material-ui/core";
import Home from "./component/home/Home";
import Navbar from "./component/Navbar";
import Detailview from "./component/post/Detailview";
import { Routes,Route, BrowserRouter} from "react-router-dom";
import Createview from "./component/post/Createview";
import Updateview from "./component/post/Updateview";
import Login from "./component/home/Login";
import Logout from "./component/home/Logout";
import SignUp from "./component/home/Signup";

const  App=()=>{
  return (
    <BrowserRouter>
    <Navbar/>
     <Box style={{marginTop:64}} >
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/details/:id' element={<Detailview />} />
        <Route exact path='/create' element={<Createview />}/>
        <Route exact path='/update' element={<Updateview/>}/>
        <Route exact path='/delete' element={<Updateview/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/signin' element={<SignUp/>}/>
     </Routes>
     </Box>
     </BrowserRouter>
       );
}

export default App;

