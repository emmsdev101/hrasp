import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../../config';

export default function useHeader(type) {
    const [showMenu, setShowMenu] = useState(false);
    const [logout, setLogout] = useState(false)
    const [showHeader, setShowHeader] = useState(true)
    const [changePassword, setChangePassword] = useState(false)


    useEffect(()=>{
      let pathname = window.location.pathname
      const newpath = pathname.split("/",3)
      if(newpath[2] === 'conference'){
        setShowHeader(false)
        console.log("hide header")
      }else setShowHeader(true)
    },[])
    const {tab} = useParams()

    const toggleMenu =()=>{
        setShowMenu(!showMenu)
    }
    const closeMenu =()=>{
        setShowMenu(false)
    }
    const isActive =(page)=>{
        let pathname = window.location.pathname

        if(tab){
          pathname.replace("/"+tab,"")
        }

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
    const handleChangePassword = () => {
      setChangePassword(!changePassword)
      setShowMenu(!showMenu)
    }
  return {
    showMenu,
    toggleMenu,
    closeMenu,
    isActive,
    logout,
    confirmLogout,
    toggleLogout,
    showHeader,
    handleChangePassword,
    changePassword
  }
}
