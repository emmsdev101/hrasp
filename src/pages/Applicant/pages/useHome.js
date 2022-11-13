import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../../config'

export default function useHome() {

    const [jobPosts, setJobPosts] = useState([])
    const [application, setApplication] = useState(null)

    useEffect(() => {
      
        async function fetchPostsRequest(){
          const fetchPosts = await axios.get(apiBaseUrl+"/applicant/getJobPosts",{withCredentials:true})
          const fetchApplication = await axios.get(apiBaseUrl+"/applicant/getApplication",{withCredentials:true})
          if(fetchPosts.status === 200){
            setJobPosts(fetchPosts.data)
          }
          if(fetchApplication.status === 200){
            const applicationData = fetchApplication.data
            console.log(applicationData)
            applicationData?setApplication(applicationData):setApplication(null)
            
          }
          console.log(fetchPosts)
        }
  
        fetchPostsRequest()
  
      
        return () => {
          
        }
      }, [])
  return {jobPosts, application}
}
