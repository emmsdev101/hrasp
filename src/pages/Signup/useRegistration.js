import {useState} from 'react'

export default function useRegistration(next) {
    const [firstname, setFirstname] = useState("")
    const [middlename, setMiddlename] = useState("")
    const [lastname, setLastname] = useState("")
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState("")
    const [birthDay, setBirthDay] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")

    const handleFirstname = (e)=> setFirstname(e.target.value)
    const handleMiddlename =(e)=> setMiddlename(e.target.value)
    const handleLastname =(e)=> setLastname(e.target.value)
    const handleGender =(e)=> setGender(e.target.value)
    const handleAge =(e)=> setAge(e.target.value)
    const handleBirthday = (e)=> setBirthDay(e.target.value)
    const handleContact =(e)=> setContact(e.target.value)
    const handleEmail =(e)=> setEmail(e.target.value)

    const submit = ()=>{
        const data ={firstname, middlename, lastname, gender, age, birthDay, contact, email}
        next(data)

    }
  return{
    firstname, handleFirstname,
    middlename, handleMiddlename,
    lastname, handleLastname,
    gender, handleGender,
    age, handleAge,
    birthDay, handleBirthday,
    contact, handleContact,
    email, handleEmail,
    submit
  }
}
