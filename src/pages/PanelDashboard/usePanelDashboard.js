import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../config'

export default function usePanelDashboard(head,committee) {
    const [jobPosts, setJobPosts] = useState([])

    useEffect(()=>{
        const fetch = async()=>{
            let reqUrl = ""
            if(head) reqUrl = apiBaseUrl+"/panel/getJobPositions/head"
            else if(committee) reqUrl = apiBaseUrl+"/panel/getJobPositions/committee"
            else reqUrl = apiBaseUrl+"/panel/getJobPositions/department"
            const jobPostsRequest = await axios.get(reqUrl,{withCredentials:true})

            console.log("Posiddtions", jobPostsRequest.data)
            if(jobPostsRequest.status === 200)setJobPosts(jobPostsRequest.data)
        }
        fetch()
    },[])
  return {jobPosts}
}
