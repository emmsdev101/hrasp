import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function useTabNavigation({panel,committee,head}) {
    const {tab} = useParams() 


    const gotoTab = (tabTo)=>{ 
      if(head && committee) window.location.href = "/committee-president/applicants/"+tabTo
      else if(committee && !head)window.location.href = "/committee-member/applicants/"+tabTo
      else if(panel && !committee && !head)window.location.href = "/panel/applicants/"+tabTo
        else window.location.href = "/admin/applications/"+tabTo
        }

  return{
      tab,
    gotoTab
  }
}
