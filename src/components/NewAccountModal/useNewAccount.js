import { useState, useEffect } from "react";
import axios from "axios";
import { apiBaseUrl } from "../../config";

export default function useNewAccount(handleClose, payload, refresh) {
  const [departmentType, setDeparmentType] = useState("Teaching")
  const [department, setDepartment] = useState("SICT")
  const [position, setPosition] = useState("Department Head");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("")


  useEffect(() => {
        setDeparmentType(payload? payload.departmentType:"Teaching")
        setDepartment(payload? payload.department:"SICT")
        setPosition(payload? payload.position:"Director")
        setFirstname(payload? payload.firstname:"")
        setMiddlename(payload? payload.middlename:"")
        setLastname(payload? payload.lastname:"")
        setEmail(payload? payload.email:"")

    console.log(payload)
  
    return () => {
    }
  }, [payload])
  


  const handleDepartmentType =(e)=> setDeparmentType(e.target.value)
  const handleDepartment = (e) => setDepartment(e.target.value)
  const handlePosition = (e) => setPosition(e.target.value)
  const handleFirstname = (e) => setFirstname(e.target.value)
  const handleMiddlename = (e) => setMiddlename(e.target.value)
  const handleLastname = (e) => setLastname(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)


  const submit = async () => {
    const data = {
      departmentType,
      department,
      position,
      email,
      firstname,
      middlename,
      lastname
    }
     console.log("submit :",data)

     let submitRequest = ""
     if(payload) submitRequest = await axios.post(apiBaseUrl+"/admin/editPanel/"+payload.account_id,data,{withCredentials:true})
     else submitRequest = await axios.post(apiBaseUrl+"/admin/addPanel",data,{withCredentials:true})
     if(!submitRequest.data.success)return alert("Panel Not Saved")
    alert("Panel saved successfully")
    refresh()
    handleClose()
   };
  return {
    email,
    handleEmail,
    departmentType,
    handleDepartmentType,
    department,
    handleDepartment,
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
