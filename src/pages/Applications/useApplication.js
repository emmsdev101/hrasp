import React, { useState } from 'react'

export default function useApplication() {

    const [tab,setTab] = useState("")
    

    const gotoTab = (tabTo)=>{  
        setTab(gotoTab)
        }

  return{
    gotoTab
  }
}
