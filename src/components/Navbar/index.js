import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NiceIcon, Siwtch} from './NavElements';
import { useParams } from 'react-router-dom';


const Navbar = () => {
    return (
    <>
        <Nav>
            <NavLink to="/">
                <NiceIcon className="fas fa-tasks"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to ="/Weather" activeStyle>
                    <NiceIcon className="fas fa-sun"/>
               </NavLink>
            </NavMenu>
        </Nav>
    </>
    );
};

export default Navbar
