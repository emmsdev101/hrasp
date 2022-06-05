import React, { useState } from 'react'

export default function useTabNavigation() {
    const [tab,setTab] = useState("applicants")

    const gotoTab = (tabTo)=>{  
        setTab(tabTo)
        }

  return{
      tab,
    gotoTab
  }
}
