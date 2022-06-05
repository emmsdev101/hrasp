import React, { useEffect, useState } from 'react'

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
  return {
    showMenu,
    toggleMenu,
    closeMenu,
    isActive
  }
}
