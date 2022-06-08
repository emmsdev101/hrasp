import axios from "axios";
import { useState, useEffect } from "react";
import { apiBaseUrl } from "../../config";

export default function useHiring() {
    const [show, setShow] = useState(false);
    const [jobPosts, setJobPosts] = useState([])


    useEffect(() => {
      
      async function fetchPostsRequest(){
        const fetchPosts = await axios.get(apiBaseUrl+"/admin/getJobPosts")
        if(fetchPosts.status === 200){
          setJobPosts(fetchPosts.data)
        }
        console.log(fetchPosts)
      }

      fetchPostsRequest()

    
      return () => {
        
      }
    }, [])
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return {
      show, handleClose, handleShow, jobPosts
  }
}
