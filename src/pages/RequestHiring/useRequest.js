import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseUrl } from '../../config'

export default function useRequest(edit) {
    const [position, setPosition] = useState("")
    const [numPersons, setNumPersons] = useState(0)
    const [description, setDescription] = useState("")

    const [qualifications, setQualifications] = useState([])
    const [qualification, setQualification] = useState("")

    const {id} = useParams()
    useEffect(()=>{

        
        const fetchData = async()=>{
            const jobRequest = await axios.get(apiBaseUrl+"/panel/job-data/"+id,{withCredentials:true})
            const jobData = jobRequest.data
            console.log(jobData)
            setPosition(jobData.title)
            setNumPersons(jobData.num_persons)
            setDescription(jobData.description)

            const quals = await JSON.parse(jobData.qualifications)

            setQualifications(quals.qualifications)


        }
        if(edit)fetchData()
    },[])
    
    const handleQualification = (e) =>setQualification(e.target.value)
    const handlePosition = (e) => setPosition(e.target.value)
    const handleNumPersons = (e) => setNumPersons(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)

    const addQualification = () => {
        if(qualification)setQualifications((quals)=>[...quals, qualification])
        setQualification("")
    }
    const removeQualification = (name) => {
        setQualifications(qualifications.filter(item => item !== name))
    }
    const submit = async() => {
        const postingData = {
            position,numPersons,description,qualifications
        }

        let submitReq 
        if(!edit) submitReq = await axios.post(apiBaseUrl+"/panel/request-hiring",{postingData},{withCredentials:true})
        else submitReq = await axios.post(apiBaseUrl+"/panel/edit-hiring/"+id,{postingData},{withCredentials:true})
        
        const submitRes = submitReq.data
        if(!submitRes.success)return alert("Request Failed to Save")
        window.location.href = "/panel/hiring"
    }
  return {position,
    handlePosition,
    numPersons,
    handleNumPersons,
    description,
    handleDescription,
    addQualification,
    qualifications,
    handleQualification,
    qualification,
    removeQualification,
    submit
  }
}
