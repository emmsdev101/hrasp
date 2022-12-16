import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../config';

export default function useHeader() {
    const [showMenu, setShowMenu] = useState(false);


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
    const logout = async()=>{
      const logoutReq = await axios.post(apiBaseUrl+"/logout")
      console.log(logoutReq)
      if(logoutReq.data.success)window.location.replace("/login")
    }
  return {
    showMenu,
    toggleMenu,
    closeMenu,
    isActive,
    logout
  }
}
