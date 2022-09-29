import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../../config'

export default function useHome() {

    const [jobPosts, setJobPosts] = useState([])

    useEffect(() => {
      
        async function fetchPostsRequest(){
          const fetchPosts = await axios.get(apiBaseUrl+"/admin/getJobPosts",{withCredentials:true})
          if(fetchPosts.status === 200){
            setJobPosts(fetchPosts.data)
          }
          console.log(fetchPosts)
        }
  
        fetchPostsRequest()
  
      
        return () => {
          
        }
      }, [])
  return {jobPosts}
}
