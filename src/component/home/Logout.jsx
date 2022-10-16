import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function Logout() {
    let navigate = useNavigate();
    useEffect(async()=>{
        console.log("logginf outtt");
        const response= await axios.post('/logout')
        console.log(response)
    })
  return (
    <div>

    </div>
  )
}