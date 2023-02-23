import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../config'

export default function usePanelDashboard(head,committee) {
    const [jobPosts, setJobPosts] = useState([])
    const [applicants, setApplicants] = useState(0)
    const [pending, setPending] = useState(0)

    useEffect(()=>{
        const fetch = async()=>{
            let reqUrl = ""
            if(head) reqUrl = apiBaseUrl+"/panel/getJobPositions/head"
            else if(committee) reqUrl = apiBaseUrl+"/panel/getJobPositions/committee"
            else reqUrl = apiBaseUrl+"/panel/getJobPositions/department"
            const jobPostsRequest = await axios.get(reqUrl,{withCredentials:true})

            console.log("Posiddtions", jobPostsRequest.data)
            if(jobPostsRequest.status === 200)setJobPosts(jobPostsRequest.data)

            let url1 = apiBaseUrl+"/panel/getPendingVolume"
            if(head)url1 = apiBaseUrl+"/panel/getCommitteeHeadPendingVolume"
            else if(committee)url1 = apiBaseUrl+"/panel/getCommitteePendingVolume"

            const acceptedRequest = await axios.get(url1,{withCredentials:true})
            if(acceptedRequest.data)setPending(acceptedRequest.data.pending)
            
            let url2 = apiBaseUrl+"/panel/getApplicantsVolume"
            if(head)url2 = apiBaseUrl+"/panel/getCommitteeHeadApplicantsVolume"
            else if(committee)url2 = apiBaseUrl+"/panel/getCommitteeApplicantsVolume"

            const applicantsRequest = await axios.get(url2,{withCredentials:true})
            if(applicantsRequest.data)setApplicants(applicantsRequest.data.num_applicants)
        }
        fetch()
    },[])
  return {jobPosts, pending, applicants}
}
