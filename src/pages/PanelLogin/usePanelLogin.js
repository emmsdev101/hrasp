import axios from 'axios'
import {useState} from 'react'
import { apiBaseUrl } from '../../config'

export default function useAdminLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submit = async() => {
        const loginReq = await axios.post(apiBaseUrl+"/panel-login",{
          username, password
        }, {withCredentials:true})
        if(loginReq.status === 200){
          const loginData = loginReq.data
          const loginStatus = loginData.status
          console.log(loginStatus)
          if(loginStatus === "wrong-email")alert("Wrong email")
          else if(loginStatus === "wrong-password")alert("Wrong password")

          else window.location.href = "/"+loginData.userType
        }
    }
  return {username, handleUsername, password, handlePassword, submit}
}
