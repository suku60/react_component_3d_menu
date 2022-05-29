import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {

    let navigate = useNavigate();


  return (
    <div className='box_menu'>
            <ul>
                <li style={{zIndex: "6"}}
                onClick={()=>{navigate(props.href?.home)}}>
                  <p className='li_text'>Home</p>
                </li>
                <li style={{zIndex: "5"}}
                onClick={()=>{navigate(props.href?.account)}}>
                  <p className='li_text'>Account</p>
                </li>
                <li style={{zIndex: 4}}
                onClick={()=>{navigate(props.href?.shop)}}>
                  <p className='li_text'>Shop</p>
                </li>
                <li style={{zIndex: 3}}
                onClick={()=>{navigate(props.href?.categories)}}>
                  <p className='li_text'>Categories</p>
                </li>
                <li style={{zIndex: 2}}
                onClick={()=>{navigate(props.href?.about)}}>
                  <p className='li_text'>About</p>
                </li>
                <li style={{zIndex: 1}}
                onClick={()=>{navigate(props.href?.contact)}}>
                  <p className='li_text'>Contact</p>
                </li>
            </ul>
        
    </div>
    )
}
export default Menu;