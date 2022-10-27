import React,{useState,useEffect} from 'react';


// image

import logo from "../../assets/images/arash.png";

//  icons
import {AiOutlinePlus} from 'react-icons/ai';

import{CiSearch} from 'react-icons/ci';
import {CiBellOn} from 'react-icons/ci'
// style 

import "./style.css"
const Dashboard = () => {
const[ toggle, setToggle] = useState(true);
const [search,setSearch]=useState('');
useEffect(()=>{
    if(!search){
        setToggle(false);
    }else{
        setToggle(true);
    }

},[search])
    return (
        <>
            <div>
                <nav>
                    <div className='navbar flex flex-row justify-center my-5'>
                        
                          <ul  className='flex flex-row justify-evenly mr-52'> 
                              <li className='mr-10 flex flex-row'>
                                Add new post</li>
                                <AiOutlinePlus className=' self-center'/>
                               <li>Add content</li>     
                          </ul>

                        
                        <div className="">
                              <input type="text" placeholder='Search.....' className='inp-search pl-5' onChange={(e)=>setSearch(e.target.value)}/>
                              <CiSearch className={toggle ? 'search pl-2 text-white':'search pl-2 text-black '}/>

                        </div>


                                 <CiBellOn className='icon-notification'/>
                                <img src={logo} alt="logo" className='absolute  right-5'  />
                    </div>
                </nav>

                <div className='container'>

                </div>
            </div>
        </>
    )
}

export default Dashboard;


