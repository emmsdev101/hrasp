import axios from "axios";
import { useState, useEffect } from "react";
import { apiBaseUrl } from "../../config";

export default function useHiring() {
    const [show, setShow] = useState(false);
    const [jobPosts, setJobPosts] = useState([])
    const [cancelRequest, setCancel] = useState(false)

    const [idCancel, setIdCancel] = useState(0)
  
    useEffect(() => {
      
      async function fetchPostsRequest(){
        const fetchPosts = await axios.get(apiBaseUrl+"/panel/getJobPosts",{withCredentials:true})
        if(fetchPosts.status === 200){
          setJobPosts(fetchPosts.data)
        }
        console.log(fetchPosts)
      }

      fetchPostsRequest()

    
      return () => {
        
      }
    }, [])
    
  const handleCancel = () => setCancel(!cancelRequest)
  const prepareCancel = (id) => {
    setCancel(true)
    setIdCancel(id)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmCancel = async()=>{
    const cancelReq = await axios.post(apiBaseUrl+"/panel/cancel-request",{id:idCancel},{withCredentials:true})
    window.location.reload()
  }

  return {
      show, handleClose, handleShow, jobPosts, confirmCancel, prepareCancel, handleCancel, cancelRequest
  }
}
