import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  let navigate = useNavigate();
  const [data,setData]=useState({
    email: "",
    pass: "",
  });
  const fire = (event) =>{
    const {name, value}= event.target;        //I have destructered the object wrong
    setData((preVal)=>{
      return(
        {
          ...preVal,
          [name]: value,
        }
      )
    })
}
const submitEve=async(e)=>
{   
    e.preventDefault();
    const res=await axios.post(`http://localhost:7000/getuser`,
    data
    );
    localStorage.setItem("jwttoken", res.data);
    console.log(res.data);
  if(res.status===400||!res)
  {
    window.alert('Invalid credentials not get response');
  }
  else
  {
    window.alert('Login Sucessfull');
    navigate('/');
  }
}
    return (  
        <>
         <div className="my-5">
        <h1 className='text-center'> SignUp </h1>
      </div>  
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form  method="POST" >
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name='email' onChange={fire} placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" name='pass' onChange={fire} placeholder="Enter your password" />
            </div>
            <div className="col-12">
              <button className='btn btn-outline-primary' onClick={submitEve} type='submit'>Log in</button>
            </div>
            </form>
          </div>
        </div>
      </div>
        </>
    );
}
export default Login;