import React, { useState} from 'react';
import {History } from 'react-router-dom';
import axios  from 'axios';

export default function SignUp() {
//  const history= useHistory();
  const [data,setData]=useState({
    fName: "",
    email: "",
    phone:"",
    pass: "",
    cpass:"",
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
const PostData=async(e)=>{
e.preventDefault();
const {fName,email,phone,pass,cpass}=data;
console.log(data);
const found =await axios.post("http://localhost:7000/register",{
  fName:fName,
  email:email,
  phone:phone,
  pass:pass,
  cpass:cpass
});
console.log("hey hiii");
console.log(found);
if(found.status===422||!found)
{
  window.alert("Invalid Registration");
  console.log("Invalid Registration");
}else{
  window.alert(" Registration Sucessful");
  console.log("Registration Done");
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
          <form method="POST" onSubmit={PostData}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name='fName' value={data.fName} onChange={fire} placeholder="Enter your first name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={fire} placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="phone" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={fire} placeholder="9131595022" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" name='pass' value={data.pass} onChange={fire} placeholder="Enter your password" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Cinform Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" name='cpass' value={data.cpass} onChange={fire} placeholder="Cinform your password" />
            </div>
            <div className="col-12">
              <button className='btn btn-outline-primary' type='submit'>Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
} 
