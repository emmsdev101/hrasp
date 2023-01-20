import { useState, useEffect } from "react";
import axios from "axios";
import { apiBaseUrl } from "../../config";

export default function useCommitteeModal(handleClose, payload, refresh) {
  const [association, setAssociation] = useState("Administrative Staff")
  const [position, setPosition] = useState("committee Head");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("")


  useEffect(() => {
        setAssociation(payload? payload.committee:"Non Teaching")
        setPosition(payload? payload.position:"president")
        setFirstname(payload? payload.firstname:"")
        setMiddlename(payload? payload.middlename:"")
        setLastname(payload? payload.lastname:"")
        setEmail(payload? payload.email:"")

    console.log(payload)
  
    return () => {
    }
  }, [payload])
  


  const handleAssociation =(e)=> setAssociation(e.target.value)
  const handlePosition = (e) => setPosition(e.target.value)
  const handleFirstname = (e) => setFirstname(e.target.value)
  const handleMiddlename = (e) => setMiddlename(e.target.value)
  const handleLastname = (e) => setLastname(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)


  const submit = async () => {
    const data = {
      association,
      position,
      email,
      firstname,
      middlename,
      lastname
    }
     console.log("submit :",data)

     let submitRequest = ""
     if(payload) submitRequest = await axios.post(apiBaseUrl+"/admin/editCommittee/"+payload.account_id,data,{withCredentials:true})
     else submitRequest = await axios.post(apiBaseUrl+"/admin/addCommitee",data,{withCredentials:true})
     if(!submitRequest.data.success)return alert("Panel Not Saved")
    alert("Panel saved successfully")
    refresh()
    handleClose()
    setAssociation("Non Teaching")
    setPosition("president")
    setFirstname("")
    setMiddlename("")
    setLastname("")
    setEmail("")
   };
  return {
    email,
    handleEmail,
    association,
    handleAssociation,
    position,
    handlePosition,
    firstname,
    handleFirstname,
    middlename,
    handleMiddlename,
    lastname,
    handleLastname,
    submit,
  };
}
