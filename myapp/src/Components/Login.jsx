import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Auth.context'

const Login = () => {

    const [userData,setUserData] = useState({
        name:"",email:"",password:""
        
    })

    const {Login} = useContext(AuthContext)

    const router = useNavigate();

    const handleChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }

    const sendData =(event)=>{
        event.preventDefault()
        if(userData.email && userData.password){
            try{
                const response = {data:{success:true}} 
                if(response.data.success){
                     Login(response.data.userData1)
                     console.log(response.data.userData1)
                    alert("Login successfull")
                    setUserData({name:"",email:"",password:""})
                    router('/')
                }
            }catch(error){
                console.log(error)
            }
        }else{
            alert("all data mandotory")
        }
    }


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={sendData}>
            <label>userName:</label><br />
            <input type="text" name='userName' onChange={handleChange} /><br />
            <label>Email:</label><br />
            <input type="email" onChange={handleChange} name='email'/> <br />
            <label>password:</label><br />
            <input type="password" onChange={handleChange} name='password' /> <br />
            <input type="submit" value="Sign in " />
        </form>
    </div>
  )
}

export default Login