import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../config';

export default function useHeader(type) {
    const [showMenu, setShowMenu] = useState(false);
    const [logout, setLogout] = useState(false)


    const toggleMenu =()=>{
        setShowMenu(!showMenu)
    }
    const closeMenu =()=>{
        setShowMenu(false)
    }
    const isActive =(page)=>{
        const pathname = window.location.pathname
        return pathname === page?"active":""
    }
    const toggleLogout = () => {
      setLogout(!logout)
    }
    const confirmLogout = async()=>{
      const logoutReq = await axios.post(apiBaseUrl+"/logout")
      console.log(logoutReq)
      if(!type)return window.location.replace("/login")
      if(logoutReq.data.success)window.location.replace("/"+type+"-login")
    }
  return {
    showMenu,
    toggleMenu,
    closeMenu,
    isActive,
    logout,
    confirmLogout,
    toggleLogout
  }
}
