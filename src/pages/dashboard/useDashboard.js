import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../config'

export default function useDashboard() {
    const [jobPosts, setJobPosts] = useState([])
    const [registrations, setRegisrations] = useState(0)
    const [applicants, setApplicants] = useState(0)
    const [pending, setPending] = useState(0)

    useEffect(()=>{
        const fetch = async()=>{
            const jobPostsRequest = await axios.get(apiBaseUrl+"/admin/getJobPositions",{withCredentials:true})
            if(jobPostsRequest.status === 200)setJobPosts(jobPostsRequest.data)
            
            const registrationsRequest = await axios.get(apiBaseUrl+"/admin/getRequestVolume",{withCredentials:true})
            if(registrationsRequest.data)setRegisrations(registrationsRequest.data.requests)

            const acceptedRequest = await axios.get(apiBaseUrl+"/admin/getPendingVolume",{withCredentials:true})
            if(acceptedRequest.data)setPending(acceptedRequest.data.pending)
            
            const applicantsRequest = await axios.get(apiBaseUrl+"/admin/getApplicantsVolume",{withCredentials:true})
            if(applicantsRequest.data)setApplicants(applicantsRequest.data.num_applicants)
        }
        fetch()
    },[])

  return {
    jobPosts,
    registrations, applicants, pending
  }
}
