import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../../config'

export default function useHome() {

    const [jobPosts, setJobPosts] = useState([])
    const [application, setApplication] = useState(null)
    const [interviewDate, setInterviewDate] = useState({})

    useEffect(() => {
      
        async function fetchPostsRequest(){
          const fetchPosts = await axios.get(apiBaseUrl+"/applicant/getJobPosts",{withCredentials:true})
          const fetchApplication = await axios.get(apiBaseUrl+"/applicant/getApplication",{withCredentials:true})
          const getSchedule = await axios.get(apiBaseUrl+"/applicant/getSchedule",{withCredentials:true})
          if(fetchPosts.status === 200){
            setJobPosts(fetchPosts.data)
          }
          if(fetchApplication.status === 200){
            const applicationData = fetchApplication.data[0]
            console.log(applicationData)
            applicationData?setApplication(applicationData):setApplication(null)
            
          }
           if(getSchedule.status === 200){
             console.log(getSchedule.data)
             setInterviewDate(getSchedule.data)
           }
        }
  
        fetchPostsRequest()
  
      
        return () => {
          
        }
      }, [])
  return {jobPosts, application, interviewDate}
}
