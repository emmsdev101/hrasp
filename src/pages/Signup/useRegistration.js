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

    const [isContactValid, setIsContactValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)

    const hasNumber = (e)=>{
      return /\d/.test(e.target.value)
    }
    const isNumeric = (e)=>{
      const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
       return true
    }
    return false
    }

    function ValidateEmail(e) {

      var validRegex =     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
      if (e.target.value.match(validRegex)) {    
        return true;
      } 
      return false
    }
    const handleFirstname = (e)=> {
      if(!hasNumber(e) || e.target.value === ""){

        setFirstname(e.target.value)
      }else{
        console.log("has number")
      }
      
    }
    const handleMiddlename =(e)=> {
      if(!hasNumber(e) || e.target.value === ""){
        setMiddlename(e.target.value)
      }
    }
    const handleLastname =(e)=> {
      if(!hasNumber(e) || e.target.value === ""){
        setLastname(e.target.value)
      }
    }
    const handleGender =(e)=> setGender(e.target.value)
    const handleAge =(e)=> {
      if(isNumeric(e)){
        setAge(e.target.value)
      }
    }
    const handleBirthday = (e)=> setBirthDay(e.target.value)
    const handleContact =(e)=> {
      if(isNumeric(e)){
        setContact(e.target.value)

        if(e.target.value.length === 10){
          setIsContactValid(true)
        }else{
          setIsContactValid(false)
        }
      }
      
    }
    const handleEmail =(e)=>{ 
      setEmail(e.target.value)
      if(ValidateEmail(e)){
        setIsEmailValid(true)
      }else{
        setIsEmailValid(false)
      }
    
    }

    const submit = ()=>{
        const data ={firstname, middlename, lastname, gender, birthDay, contact, email}
        if(firstname && middlename && lastname && gender && birthDay && contact && email && isEmailValid && isContactValid){
          next(data)
        }else{
          alert("Please complete the form")
        }

    }
  return{
    firstname, handleFirstname,
    middlename, handleMiddlename,
    lastname, handleLastname,
    gender, handleGender,
    age, handleAge,
    birthDay, handleBirthday,
    contact, handleContact,
    isContactValid,
    email, handleEmail,
    isEmailValid,
    submit
  }
}
