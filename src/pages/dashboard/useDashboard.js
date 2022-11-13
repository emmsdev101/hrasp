import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../config'

export default function useDashboard() {
    const [jobPosts, setJobPosts] = useState([])

    useEffect(()=>{
        const fetch = async()=>{
            const jobPostsRequest = await axios.get(apiBaseUrl+"/admin/getJobPosts",{withCredentials:true})
            if(jobPostsRequest.status === 200)setJobPosts(jobPostsRequest.data)
        }
        fetch()
    },[])

  return {
    jobPosts
  }
}
