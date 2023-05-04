/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink to={to}
        className = {({isActive}) => isActive ? 'text-[#fc834b]' : 'hover:text-[#78bf4d]'}>
          {children}  
        </NavLink>
    );
};

export default ActiveLink;