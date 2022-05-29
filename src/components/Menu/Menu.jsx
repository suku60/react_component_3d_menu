import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {

    let navigate = useNavigate();

    console.log(props)


  return (
    <div className='box_menu'>
            <ul>
                <li onClick={()=>{navigate(props.href?.home)}}>Home</li>
                <li onClick={()=>{navigate(props.href?.account)}}>Account</li>
                <li onClick={()=>{navigate(props.href?.shop)}}>Shop</li>
                <li onClick={()=>{navigate(props.href?.categories)}}>Categories</li>
                <li onClick={()=>{navigate(props.href?.about)}}>About</li>
                <li onClick={()=>{navigate(props.href?.Contact)}}>Contact</li>
            </ul>
        
    </div>
    )
}
export default Menu;