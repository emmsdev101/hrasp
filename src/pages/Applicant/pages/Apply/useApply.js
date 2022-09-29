import {useState} from 'react'
import axios from 'axios'
import { apiBaseUrl } from '../../../../config'
import {useParams} from 'react-router-dom'
export default function useApply() {
    const [letter, setLetter] = useState("")
    const [tor, setTor] = useState("")
    const [pds, setPds] = useState("")
    const [certs, setCerts] = useState([])

    const {id} = useParams()


    const handleLetter = (e) => {
        setLetter(e.target.files[0])
    }
    const handleTor = (e) => {
        setTor(e.target.files[0])
    }
    const handlePds = (e) => {
        setPds(e.target.files[0])
    }
    const handleCerts = (e) => {
        setCerts(e.target.files)
    }

    const upload = async(path, data)=>{
        
        const headers = {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            
          };

          const uploadReq = await axios.post(
            apiBaseUrl + path,
            data,
            {withCredentials:true, headers:headers}
          );

          if (uploadReq.status !== 200) {
            throw uploadReq;
          }
          return uploadReq.data
    }

    const singleUpload = async(toUpload, path) => {
        let data = new FormData();
        data.append("file", toUpload, toUpload.name);
        return await upload(path, data)

    }
const multiUpload = async(toUpload, path) => {
    let data = new FormData();
        for (let i = 0; i < toUpload.length; i++) {
            const file = toUpload[i];
            data.append("files", file, file.name);
        }
        return upload(path, data)
}
    const submit = async() => {
        const letterPath = await singleUpload(letter, "/applicant/upload-letter")
        const torPath = await singleUpload(tor, "/applicant/upload-tor")
        const pdsPath = await singleUpload(pds, "/applicant/upload-pds")

        const certsPath = await multiUpload(certs, "/applicant/upload-certs")
        
        const saveApplication = await axios.post(apiBaseUrl+"/applicant/apply",{
            jobId:id,
            letter:letterPath,
            pds:pdsPath,
            tor:torPath,
            certs:certsPath
        },{withCredentials:true})
        console.log(saveApplication)
        if(saveApplication.status !== 200)return alert("Something went Wrong")
        console.log(saveApplication.data)

    }


  return {letter,handleLetter,tor, handleTor, pds, handlePds, certs, handleCerts, submit}
}
