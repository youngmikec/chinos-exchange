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
                <nav className='flex flex-row '>
                    <div className=' navbar flex flex-row   my-4 '>
                        
                          <ul  className='flex flex-row justify-evenly ml-52'> 
                              <li className='mr-10 flex flex-row'>
                                Add new post</li>
                                <AiOutlinePlus className=' self-center'/>
                               <li>Add content</li>     
                          </ul>

                        
                        <div className="">
                              <input type="text" placeholder='Search.....' className='inp-search pl-5' onChange={(e)=>setSearch(e.target.value)}/>
                              <CiSearch id='icon' className={toggle ? 'search pl-2 text-white':'search pl-2 text-black'}/>

                        </div>
                    </div>
                    <div className='justify-around  flex flex-row'>
                        <CiBellOn className='icon-notification self-center'/>
                                <img src={logo} alt="logo" className='' width='width: 36' height='height: 34'  />
                    </div>
                </nav>

                <div className='container'>

                </div>
            </div>
        </>
    )
}

export default Dashboard;


