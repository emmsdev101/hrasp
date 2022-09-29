import axios from 'axios'
import {useState} from 'react'
import { apiBaseUrl } from '../../config'

export default function useSignin() {  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const submit = async() => {
        const loginReq = await axios.post(apiBaseUrl+"/applicant/login",{
          email, password
        }, {withCredentials:true})
        if(loginReq.status === 200){
          const loginData = loginReq.data
          const loginStatus = loginData.status
          console.log(loginStatus)
          if(loginStatus === "wrong-email")alert("Wrong email")
          else if(loginStatus === "wrong-password")alert("Wrong password")
          else window.location.href = "/applicant"
        }
    }

  return {
      email, handleEmail,
      password, handlePassword,
      submit
  }
}
