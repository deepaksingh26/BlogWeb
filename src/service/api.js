import axios from 'axios';
const url='http://localhost:7000';

export const CreatePost=async (post)=>{
try{
    return await axios.post(`${url}/create`,post)
}
catch(err)
{
    console.log(err);
}
}
export const getAllPosts=async()=>
{
    try
    {
     const res= await axios.get(`${url}/posts`);
     return res.data;
    }
    catch(e) 
    {    
        console.log(`error while calling getAllPosts`,e);
    }
}
export const getPost = async (id) => {
try
{
    console.log(`ye getPost baali id hai `);
// console.log(`suno na suno na sun lo na ${id}`);
const responce=await axios.get(`${url}/post/${id}`);
console.log("response k baad bala console",id);

// localStorage.setItem('pid',id);

console.log(`Hlwww from api.js 28 number ${responce}`);
return responce.data;
}catch(e)
{
 console.log("error while calling getPost API",e);
} 
}