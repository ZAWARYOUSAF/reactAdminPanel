import React,{useState} from 'react'
import "./New.scss"

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UploadFileIcon from '@mui/icons-material/UploadFile';


const New = ({inputs,title}) => {
  const[file, setFile]= useState("");
  
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
      <Navbar/>
      <div className='top'><h1>{title}</h1></div>
      <div className='bottom'>
        <div className='left'>
          <img src= {file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""/>
        </div>
        <div className='right'>
        <form>
        <div className='formInput'>
            <label htmlFor="file" >Image: <UploadFileIcon className='icon'/></label>
            <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
          </div>

          {inputs.map((input)=>( <div className='formInput' key={input.id}>
            <label>{input.label}</label>
            <input type={input.type} placeholder={input.placeholder}/>
          </div>))}

          {/* <div className='formInput'>
            <label>Name and SurName</label>
            <input type="text" placeholder="John Joe"/>
          </div>
          <div className='formInput'>
            <label>Email</label>
            <input type="Email" placeholder="JohnJoe@gmail.com"/>
          </div>
          <div className='formInput'>
            <label>Phone</label>
            <input type="text" placeholder="+92 345 23578"/>
          </div>
          <div className='formInput'>
            <label>Password</label>
            <input type="password"/>
          </div>
          <div className='formInput'>
            <label>Address</label>
            <input type="text" placeholder="18 Cillion Lahore Punjab"/>
          </div>
          <div className='formInput'>
            <label>Country</label>
            <input type="text" placeholder="Pakistan"/>
          </div> */}
        <button>Send</button>
        </form></div>
      </div>
      </div>
    </div>
  )
}
export default New
