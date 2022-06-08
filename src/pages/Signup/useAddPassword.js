import {useState} from 'react'

export default function useAddPassword(next) {
    const [password, setPassword] = useState("")
    const [retype, setRetype] = useState("")

    const handlePassword = (e)=> setPassword(e.target.value)
    const handleRetype =(e)=> setRetype(e.target.value)

    const submit = () =>{
        next(password)
    }
  return{
    password, handlePassword,
    retype, handleRetype,
    submit
  }
}
