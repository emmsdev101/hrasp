import axios from 'axios'
import {useState, useEffect} from 'react'
import { apiBaseUrl } from '../../../config'

export default function usePortalHome() {
    const [jobPosts, setJobPosts] = useState([])

    useEffect(() => {
      
        async function fetchPostsRequest(){
          const fetchPosts = await axios.get(apiBaseUrl+"/getJobPosts")
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
